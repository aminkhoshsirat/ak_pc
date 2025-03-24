import json

from django.http import JsonResponse
from django.shortcuts import HttpResponse
from django.contrib import messages
from django.contrib.auth import login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Q
from django.shortcuts import render, redirect
from django.views.generic import View, TemplateView, ListView, DetailView
from apps.blog.models import BlogCommentModel
from apps.bucket.models import BuketModel
from apps.product.models import UserFavoriteProductModel, ProductCommentModel
from .forms import *
from django.utils.safestring import mark_safe
from apps.panel.models import SiteDetailModel
import random
from apps.notification.models import UserNotificationModel
from django.utils import timezone
from utils.services import send_otp
from akurtekPC.redis import redis_cli as r
import time


class UserLoginView(View):
    def get(self, request):
        return render(request, 'user/login.html')

    def post(self, request):
        form = UserLoginForm(request.POST)

        if not form.is_valid():
            messages.add_message(request, messages.ERROR, 'اطلاعات وارد شده اشتباه است')
            return redirect(request.META['HTTP_REFERER'])

        cd = form.cleaned_data
        phone_or_email = cd['phone_or_email']
        user = UserModel.objects.filter(Q(phone=phone_or_email) | Q(email=phone_or_email)).first()

        if user:
            if user.check_password(cd['password']):
                login(request, user)
                return redirect('index')
            else:
                messages.add_message(request, messages.ERROR, 'رمز عبور اشتباه است')
        else:
            messages.add_message(request, messages.ERROR, 'کاربر یافت نشد')

        return redirect(request.META['HTTP_REFERER'])


class UserLoginHeaderView(View):
    def post(self, request):
        form = UserLoginForm(request.POST)

        if not form.is_valid():
            return redirect(request.META['HTTP_REFERER'])

        cd = form.cleaned_data
        phone_or_email = cd['phone_or_email']
        user = UserModel.objects.filter(Q(phone=phone_or_email) | Q(email=phone_or_email)).first()

        if user:
            if user.check_password(cd['password']):
                login(request, user)
            else:
                messages.add_message(request, messages.ERROR, 'رمز عبور اشتباه است')
        else:
            messages.add_message(request, messages.ERROR, 'کاربر یافت نشد')

        return redirect(request.META['HTTP_REFERER'])



class UserRegisterView(View):
    def get(self, request):
        return render(request, 'user/register.html')

    def post(self, request):
        form = UserRegisterForm(request.POST)
        if not form.is_valid():
            return render(request, 'user/form-errors.html', {'form': form})

        cd = form.cleaned_data
        phone = cd['phone']
        email = cd['email']

        if UserModel.objects.filter(phone=phone).exists():
            return HttpResponse('این شماره تلفن قبلاً ثبت شده است')

        if UserModel.objects.filter(email=email).exists():
            return HttpResponse('این ایمیل قبلاً ثبت شده است')


        cache_key = f'{phone}:activation_code'
        last_request_key = f'{phone}:last_request_time'


        last_request_time = r.get(last_request_key)
        current_time = int(time.time())

        if last_request_time and (current_time - int(last_request_time)) < 120:
            remaining_time = 120 - (current_time - int(last_request_time))
            return HttpResponse( f'لطفاً {remaining_time} ثانیه دیگر تلاش کنید')


        code = random.randint(100000, 999999)
        r.set(cache_key, code, ex=600)
        r.set(last_request_key, current_time, ex=120)
        send_otp(phone, str(code))

        return HttpResponse('کد فعال‌سازی ارسال شد')


class UserRegisterActivationView(View):
    def post(self, request):
        form = UserRegisterActivationForm(request.POST)
        if not form.is_valid():
            return render(request, 'user/form-errors.html', {'form': form})

        cd = form.cleaned_data
        phone = cd['phone']
        email = cd['email']
        code = cd['code']

        try:
            stored_code = str(int(r.get(f'{phone}:activation_code')))
        except (TypeError, ValueError):
            stored_code = ''

        if not stored_code or stored_code != code:
            return HttpResponse('کد نادرست یا نامعتبر است')

        if UserModel.objects.filter(phone=phone).exists():
            return HttpResponse('این شماره تلفن قبلاً ثبت شده است')

        if UserModel.objects.filter(email=email).exists():
            return HttpResponse('این ایمیل قبلاً ثبت شده است')

        user = UserModel.objects.create_user(
            fullname=cd['fullname'],
            email=email,
            phone=phone,
            password=cd['password']
        )

        r.delete(f'{phone}:activation_code')
        login(request, user)

        return HttpResponse('ok')



class UserLogoutView(LoginRequiredMixin, View):
    def get(self, request):
        logout(request)
        return redirect('index')


class SendOtpCodeView(View):
    def post(self, request):
        form = SendOtpForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            phone = cd['phone']
            user = UserModel.objects.filter(phone=phone).first()

            if not user:
                return HttpResponse('کاربر وجود ندارد')

            if user.ban:
                messages.add_message(request, messages.ERROR, 'کاربر ازسایت محروم شده است')
                return HttpResponse('کاربر ازسایت محروم شده است')

            time = r.ttl(f'{phone}:activation_code')
            if time < 120:
                code = random.randint(100000, 999999)
                r.set(f'{phone}:activation_code', code, ex=600)
                send_otp(phone, code)

            return HttpResponse('ok')

        return render(request, 'user/form-errors.html', {'form': form})



class PasswordForgetView(View):
    def get(self, request):
        return render(request, 'user/forget.html')

    def post(self, request):
        form = ForgetForm(request.POST)
        if not form.is_valid():
            return HttpResponse('نامعتبر')

        cd = form.cleaned_data
        phone = cd['phone']
        user = UserModel.objects.filter(phone=phone).first()

        if not user:
            return HttpResponse('کاربر وجود ندارد')

        if user.ban:
            return HttpResponse('کاربر ازسایت محروم شده است')

        try:
            sending_code = str(int(r.get(f'{phone}:activation_code')))
        except:
            sending_code = ''

        if sending_code == cd['code']:
            login(request, user)
            r.delete(f'{phone}:activation_code')
            return HttpResponse('ok')

        return HttpResponse('کد نادرست است')



class ChangePasswordView(LoginRequiredMixin, View):
    def get(self, request):
        return render(request, 'user/change-password.html')

    def post(self, request):
        form = UserChangePasswordForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = self.request.user
            user.set_password(cd['password'])
            user.save()
            return redirect('user:dashboard')

        return render(request, 'user/change-password.html')


class UserProfileView(LoginRequiredMixin, TemplateView):
    template_name = 'user/profile.html'

    def post(self, request):
        user = request.user
        form = UserEditForm(request.POST, instance=user)
        if form.is_valid():
            form.save()


class UserDashboardView(LoginRequiredMixin, ListView):
    template_name = 'user/dashboard.html'
    model = UserFavoriteProductModel
    paginate_by = 10
    context_object_name = 'products'

    def get_queryset(self):
        products = UserFavoriteProductModel.objects.filter(user=self.request.user)
        return products

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        notifications = UserNotificationModel.objects.filter(Q(user=self.request.user) | Q(user=None),
                                                             expire_date__gt=timezone.now()).order_by('-published_date')
        context['notifications'] = notifications
        context['orders'] = BuketModel.objects.filter(is_paid=True)
        return context


class UserCommentsView(LoginRequiredMixin, View):
    def get(self, request):
        product_comments = ProductCommentModel.objects.filter(user=request.user)
        blog_comments = BlogCommentModel.objects.filter(user=request.user)
        context = {
            'product_comments': product_comments,
            'blog_comments': blog_comments,
        }
        return render(request, 'user/comments.html', context)


class UserEditProfileView(View):
    def get(self, request):
        return render(request, 'user/edit-profile.html')


class FavoriteView(ListView):
    template_name = 'user/favorite.html'
    context_object_name = 'products'
    paginate_by = 20

    def get_queryset(self):
        products = UserFavoriteProductModel.objects.filter(user=self.request.user)
        return products


class OrderView(ListView):
    template_name = 'user/order.html'
    context_object_name = 'orders'
    paginate_by = 20

    def get_queryset(self):
        orders = BuketModel.objects.filter(is_paid=True, user=self.request.user)
        return orders


class OrderDetailView(DetailView):
    model = BuketModel
    template_name = 'user/order-detail.html'
    context_object_name = 'order'

    def get_queryset(self):
        orders = BuketModel.objects.prefetch_related('user_bucket_products').filter(is_paid=True, user=self.request.user)
        return orders


class UserAddressView(ListView):
    template_name = 'user/address.html'
    model = UserAddressModel
    paginate_by = 20
    context_object_name = 'address'

    def get_queryset(self):
        user = self.request.user
        address = UserAddressModel.objects.filter(user=user)
        return address


# class UserAddressView(View):
#     def get(self, request):
#         context = {
#             'api_key': mark_safe(NESHAN_API_KEY),
#             'map_x': request.session.get('map_x'),
#             'map_y': request.session.get('map_y'),
#         }
#         return render(request, 'user/neshan.html', context)
#
#     def post(self, request):
#         form = NeshanSearchForm(request.POST)
#         if form.is_valid():
#             search = form.cleaned_data['search']
#             map = requests.get(f'https://api.neshan.org/v4/geocoding?address={search}', headers={"Api-Key": 'service.a77ead3f22874b168c2b86ed615fd771'})
#             map = map.json()['location']
#             request.session['map_x'] = map['x']
#             request.session['map_y'] = map['y']
#             context = {
#                 'api_key': mark_safe(NESHAN_API_KEY),
#                 'map_x': request.session['map_x'],
#                 'map_y': request.session['map_y'],
#                 'search': search,
#             }
#
#             return render(request, 'user/neshan.html', context)
#
#
class UserAddAddressView(LoginRequiredMixin, View):
    def get(self, request):
        context = {
            'map_x': request.session.get('map_x'),
            'map_y': request.session.get('map_y'),
        }
        return render(request, 'user/neshan.html', context)

    def post(self, request):
        count = UserAddressModel.objects.all().count()
        try:
            limit = SiteDetailModel.objects.first().limit_of_address_can_add
        except:
            limit = 5
        if count > limit:
            return HttpResponse(f'امکان اضافه کردن بیش از {limit}وجود ندارد')
        else:
            form = AddressForm(request.POST)

            if form.is_valid():
                cd = form.cleaned_data
                UserAddressModel.objects.create(user=request.user, state=cd['state'], city=cd['city'],
                                                address=cd['address'], plaque=cd['plaque'],
                                                post_code=cd['post_code'], position_x=float(cd['position_x']),
                                                position_y=float(cd['position_y'])).save()
                return HttpResponse('success')
            errors = json.dumps(form.errors)
            return errors


class NotificationView(ListView):
    template_name = 'user/notification.html'
    context_object_name = 'notifications'
    paginate_by = 20

    def get_queryset(self):
        notifications = UserNotificationModel.objects.filter(Q(user=self.request.user) | Q(user=None), expire_date__gt=timezone.now()).order_by('-published_date')
        return notifications

