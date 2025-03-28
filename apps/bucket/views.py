from django.shortcuts import render, redirect, HttpResponse
from .models import *
from apps.panel.models import SiteDetailModel
from django.views.generic import View
from django.contrib.auth.mixins import LoginRequiredMixin
from utils.services import get_client_ip
import requests
import json
from akurtekPC.redis import redis_cli as r


class BucketView(View):
    def get(self, request):
        user = request.user
        if user.is_authenticated:
            products_ids = [int(r.hget(i, 'product')) for i in r.keys(f'bucket:user:{user.phone}:product:*')]
        else:
            ip = get_client_ip(request)
            products_ids = [int(r.hget(i, 'product')) for i in r.keys(f'bucket:user:{ip}:product:*')]
        products = ProductModel.objects.filter(id__in=products_ids)

        if products.exists():
            total_price = 0
            total_price_after_off = 0
            bucket_products = []
            if user.is_authenticated:
                for i in r.keys(f'bucket:user:{user.phone}:product:*'):
                    try:
                        bucket_products.append(
                            {'product': products.get(id=int(r.hget(i, 'product'))), 'num': int(r.hget(i, 'num'))})
                    except:
                        pass
            else:
                ip = get_client_ip(request)
                for i in r.keys(f'bucket:user:{ip}:product:*'):
                    try:
                        bucket_products.append(
                            {'product': products.get(id=int(r.hget(i, 'product'))), 'num': int(r.hget(i, 'num'))})
                    except:
                        pass
            for item in bucket_products:
                total_price += item['product'].price * item['num']
                total_price_after_off += item['product'].price_after_off * item['num']

            off = total_price - total_price_after_off

            context = {
                'bucket_products': bucket_products,
                'total_price': total_price,
                'total_price_after_off': total_price_after_off,
                'off': off,
            }

            return render(request, 'bucket/cart.html', context)

        else:
            site_detail = SiteDetailModel.objects.all().first()
            context = {
                'site_detail': site_detail
            }
            return render(request, 'bucket/empty-cart.html', context)


class SmallBucketView(View):
    def get(self, request):
        user = request.user
        if user.is_authenticated:
            products_ids = [int(r.hget(i, 'product')) for i in r.keys(f'bucket:user:{user.phone}:product:*')]
        else:
            ip = get_client_ip(request)
            products_ids = [int(r.hget(i, 'product')) for i in r.keys(f'bucket:user:{ip}:product:*')]
        products = ProductModel.objects.filter(id__in=products_ids)
        print(products)

        if products.exists():
            total_price = 0
            total_price_after_off = 0
            bucket_products = []
            if user.is_authenticated:
                for i in r.keys(f'bucket:user:{user.phone}:product:*'):
                    try:
                        bucket_products.append({'product': products.get(id=int(r.hget(i, 'product'))), 'num': int(r.hget(i, 'num'))})
                    except:
                        pass

            else:
                ip = get_client_ip(request)
                for i in r.keys(f'bucket:user:{ip}:product:*'):
                    try:
                        bucket_products.append(
                            {'product': products.get(id=int(r.hget(i, 'product'))), 'num': int(r.hget(i, 'num'))})
                    except:
                        pass
            for product in products:
                total_price += product.price
                total_price_after_off += product.price_after_off

            off = total_price - total_price_after_off

            context = {
                'bucket_products': bucket_products,
                'total_price': total_price,
                'total_price_after_off': total_price_after_off,
                'off': off,
            }

            return render(request, 'bucket/small-bucket.html', context)

        else:
            return render(request, 'bucket/small-bucket.html')


class DeleteProductBucketView(View):
    def get(self, request, id):
        user = request.user
        if user.is_authenticated:
            r.delete(f'bucket:user:{user.phone}:product:{id}')
        else:
            ip = get_client_ip(request)
            r.delete(f'bucket:user:{ip}:product:{id}')
        return HttpResponse('success')



ZP_API_REQUEST = f"https://www.zarinpal.com/pg/rest/WebGate/PaymentRequest.json"
ZP_API_VERIFY = f"https://www.zarinpal.com/pg/rest/WebGate/PaymentVerification.json"
ZP_API_STARTPAY = f"https://www.zarinpal.com/pg/StartPay/"

amount = 1000  # Rial / Required
description = "توضیحات مربوط به تراکنش را در این قسمت وارد کنید"  # Required
phone = 'YOUR_PHONE_NUMBER'  # Optional
# Important: need to edit for realy server.
CallbackURL = 'http://127.0.0.1:8080/verify/'


MERCHANT = 'e7857c35-9181-4989-98a8-830f6271491f'
ZP_API_REQUEST = "https://api.zarinpal.com/pg/v4/payment/request.json"
ZP_API_VERIFY = "https://api.zarinpal.com/pg/v4/payment/verify.json"
ZP_API_STARTPAY = "https://www.zarinpal.com/pg/StartPay/{authority}"
description = "توضیحات مربوط به تراکنش را در این قسمت وارد کنید"
CallbackURL = 'http://127.0.0.1:8000/orders/verify/'


class OrderPayView(View):
    def get(self, request):
        # order = Order.objects.get(id=order_id)
        # request.session['order_pay'] = {
        #     'order_id': order.id,
        # }
        data = {
            "merchant_id": MERCHANT,
            "amount": 20000,
            "callback_url": CallbackURL,
            "description": description,
            "metadata": {"mobile": '09909794694', "email": 'amin@gmail.com'}
        }
        data = json.dumps(data)
        # set content length by data
        headers = {'content-type': 'application/json', 'content-length': str(len(data))}
        try:
            response = requests.post(ZP_API_REQUEST, data=data, headers=headers, timeout=10)

            if response.status_code == 200:
                response = response.json()
                print(response)
                if response['status'] == 100:
                    return {'status': True, 'url': ZP_API_STARTPAY + str(response['Authority']),
                            'authority': response['Authority']}
                else:
                    return {'status': False, 'code': str(response['Status'])}
            return response

        except requests.exceptions.Timeout:
            return {'status': False, 'code': 'timeout'}
        except requests.exceptions.ConnectionError:
            return {'status': False, 'code': 'connection error'}
