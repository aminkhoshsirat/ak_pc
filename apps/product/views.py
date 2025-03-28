import json

from django.shortcuts import render, HttpResponse, Http404, redirect
from django.views.generic import View, ListView, DetailView
from apps.blog.models import BlogCategoryModel, BlogModel
from apps.panel.models import SiteDetailModel, SuggestedProductsModel, AboutUsModel
from apps.panel.models import AmazingOfferModel, AdvertisingBannerModel, InstantOfferModel, FaqQuestionModel
from django.db.models.aggregates import Count, Max, Min
from .utils import *
from django.contrib.postgres.search import TrigramSimilarity
from django.db.models.functions import Greatest
from django.shortcuts import get_object_or_404
from .category_fields import product_fields
from django.utils.timezone import datetime, now
from json import dumps
from utils.services import get_client_ip
from .forms import *
from apps.panel.forms import ContactUsForm
from django.db.models import Avg
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from akurtekPC.redis import redis_cli as r


class HeaderView(View):

    def get(self, request):
        main_categories = MainCategoryModel.objects.prefetch_related('base_category_child', 'main_category_image').filter(active=True)
        blog_categories = BlogCategoryModel.objects.prefetch_related('child').filter(active=True, parent=None)
        site_detail = SiteDetailModel.objects.first()
        context = {
            'main_categories': main_categories,
            'blog_categories': blog_categories,
            'site_detail': site_detail,
        }
        return render(request, 'partial/header.html', context)


class FooterView(View):
    def get(self, request):
        site_detail = SiteDetailModel.objects.first()
        context = {
            'site_detail': site_detail,
        }
        return render(request, 'partial/footer.html', context)


class FaqsView(View):
    def get(self, request):
        questions = FaqQuestionModel.objects.all()
        return render(request, 'faq.html', {'questions': questions})


class ContactUsView(View):
    def get(self, request):
        context = {
            'site_detail': SiteDetailModel.objects.first()
        }
        return render(request, 'contact-us.html', context)

    def post(self, request):
        form = ContactUsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('contact_us')

        else:
            return redirect('contact_us')


class AboutUsView(View):
    def get(self, request):
        about_us = AboutUsModel.objects.first()
        return render(request, 'about-us.html', {'about_us': about_us})


class ProductListView(ListView):
    template_name = 'product/products.html'
    queryset = ProductModel.objects.filter(active=True)
    paginate_by = 20
    context_object_name = 'products'
    model = ProductModel

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        child_category_url = self.kwargs.get('child_category')

        context['count_products'] = context['products'].count()
        context['products_price'] = context['products'].aggregate(max=Max('price_after_off'), min=Min('price_after_off'))
        context['filters'] = filter_category(child_category_url) if child_category_url else None


        return context

    def get_queryset(self):
        main_category_url = self.kwargs.get('main_category')
        child_category_url = self.kwargs.get('child_category')
        brand = self.kwargs.get('brand')
        search = self.request.GET.get('search')
        sort = self.request.GET.get('sort')

        filter_dict = self.request.GET

        products = ProductModel.objects.filter(active=True)

        new_filter_dict = {}

        for i in filter_dict:
            if i != 'sort' and i != 'search':
                new_filter_dict[f'{i}__in'] = filter_dict.getlist(i)

        if main_category_url:
            main_category = MainCategoryModel.objects.prefetch_related('base_category_child').filter(
                url=main_category_url, active=True).first()
            self.extra_context = {'main_category': main_category}
            products = products.filter(main_category=main_category).order_by('-id')

        elif child_category_url:
            child_category = ChildCategoryModel.objects.filter(url=child_category_url, active=True).first()
            self.extra_context = {'child_category': child_category}
            products = products.filter(Q(child_category=child_category) | Q(child_category__parent_category=child_category)).order_by('-id')

        if brand:
            products = products.filter(brand__url=brand).order_by('-id')

        else:
            products = products.filter(active=True).order_by('-id')

        if new_filter_dict:
            try:
                products = CpuModel.objects.filter(**new_filter_dict).order_by('-id')
            except:
                pass

        if search:
            products = ProductModel.objects.annotate(similar=Greatest(
                TrigramSimilarity('title', search),
                TrigramSimilarity('url', search),
                TrigramSimilarity('main_category__title', search),
                TrigramSimilarity('child_category__title', search),
            )).filter(similar__gt=0.1).order_by('-similar')

        if sort:
            if sort == '1':
                products = products.order_by('-id')

            if sort == '2':
                products = products.annotate(count=Count('favorite_product')).order_by('-count')

            elif sort == '3':
                products = products.order_by('-sell')

            elif sort == '4':
                products = products.order_by('-published_date')

            elif sort == '5':
                products = products.order_by('price_after_off')

            elif sort == '6':
                products = products.order_by('-price_after_off')
        return products


class ProductDetailView(DetailView):
    template_name = 'product/product-detail.html'
    context_object_name = 'product'
    queryset = ProductModel.objects.all()
    slug_field = 'url'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        product = context['product']
        amazing_offer = AmazingOfferModel.objects.filter(product=product, active=True).first()
        context['amazing_offer'] = amazing_offer
        context['images'] = ProductImageModel.objects.filter(product=product)
        context['comment_count'] = product.product_comments.count()
        context['favorite_product'] = UserFavoriteProductModel.objects.filter(user_id=self.request.user.id,
                                                                              product=product).exists()
        try:
            context['fields'] = product_fields(product)
        except:
            context['fields'] = None
        context['product'] = product
        context['product_video'] = ProductVideoModel.objects.filter(product=product).first()

        ip = get_client_ip(self.request)

        user = self.request.user

        if user.is_authenticated:
            product_view, status = ProductViewModel.objects.get_or_create(product=product, ip=ip, user=user)

        else:
            product_view, status = ProductViewModel.objects.get_or_create(product=product, ip=ip)

        if status:
            product.view_num += 1
            product.save()

        try:
            if user.is_authenticated:
                context['product_in_bucket'] = int(r.hget(
                    f'bucket:user:{user.phone}:product:{product.id}', 'num'))
            else:
                context['product_in_bucket'] = int(r.hget(
                    f'bucket:user:{ip}:product:{product.id}', 'num'))

        except:
            context['product_in_bucket'] = None
        return context


class SuggestedProductView(View):
    def get(self, request, category, title):
        products = ProductModel.objects.annotate(similar=TrigramSimilarity('title', title)).filter(
            child_category__url=category).order_by('-similar')[0:20]
        return render(request, 'product/suggested-products.html', {'products': products})


class ProductCommentView(ListView):
    template_name = 'product/comments.html'
    model = ProductCommentModel
    context_object_name = 'comments'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['comment_average_grade'] = context['comments'].aggregate(avg=Avg('grade'))
        context['star5_num'] = context['comments'].filter(grade=5).count()
        context['star4_num'] = context['comments'].filter(grade=4).count()
        context['star3_num'] = context['comments'].filter(grade=3).count()
        context['star2_num'] = context['comments'].filter(grade=2).count()
        context['star1_num'] = context['comments'].filter(grade=1).count()
        return context

    def get_queryset(self):
        product_id = self.kwargs.get('product_id')
        comments = ProductCommentModel.objects.filter(product_id=product_id, active=True, admin_seen=True)
        return comments

    def post(self, request, product_id):
        form = ProductCommentForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            positive = [i.get('value') for i in cd['positive_votes']]
            negative = [i.get('value') for i in cd['negative_votes']]
            ProductCommentModel.objects.create(user=request.user, product_id=product_id, text=cd['text'],
                                               grade=cd['grade'], positive_votes=positive,
                                               negative_votes=negative)
            return HttpResponse('success')
        return HttpResponse('failed')


class ProductLikeView(View):
    def get(self, request, id):
        if request.user.is_authenticated:
            like_status = self.request.GET.get('like-status')
            if like_status == 'like':
                UserFavoriteProductModel.objects.get_or_create(user=request.user, product_id=id)
                return HttpResponse('like success')
            elif like_status == 'dislike':
                product = UserFavoriteProductModel.objects.filter(user=request.user, product_id=id)
                if product:
                    product.delete()
                    return HttpResponse('dislike success')
        return HttpResponse('error')


class ProductAddView(View):
    def get(self, request, id):
        user = request.user
        if user.is_authenticated:
            r.hset(f'bucket:user:{user.phone}:product:{id}', mapping={'product': id, 'num': 1})
        else:
            ip = get_client_ip(request)
            r.hset(f'bucket:user:{ip}:product:{id}', mapping={'product': id, 'num': 1})
        return HttpResponse('success')


class ProductDeleteView(View):
    def get(self, request, id):
        user = request.user
        if user.is_authenticated:
            r.delete(f'bucket:user:{user.phone}:product:{id}')
        else:
            ip = get_client_ip(request)
            r.delete(f'bucket:user:{ip}:product:{id}')
        return HttpResponse('success')


class ProductChangeView(View):
    def get(self, request, id):
        num = request.GET.get('num')
        try:
            num = int(num)

        except:
            num = 1
        if num < 1:
            num = 1
        user = request.user
        if user.is_authenticated:
            r.hset(f'bucket:user:{user.phone}:product:{id}', mapping={'product': id, 'num': num})
        else:
            ip = get_client_ip(request)
            r.hset(f'bucket:user:{ip}:product:{id}', mapping={'product': id, 'num': num})
        return HttpResponse('success')


class ShowProductView(View):
    def get(self, request, id):
        product = get_object_or_404(ProductModel, id=id)
        try:
            fields = product_fields(product),
        except:
            fields = None
        context = {
            'product': product,
            'images': ProductImageModel.objects.filter(product=product),
            'fields': fields,
        }
        return render(request, 'product/show-product.html', context)


class ProductChartView(APIView):
    def get(self, request, id):
        products = ProductPriceChartModel.objects.filter(product_id=id)
        x = []
        y = []
        for i in products:
            x.append(i.date.strftime("%Y-%m-%d"))
            y.append(i.price)
        context = {
            'x': x,
            'y': y,
            'title': products.first().product.title
        }
        return Response(context)


class IndexView(View):
    def get(self, request):
        products = ProductModel.objects.filter(active=True)
        categories = MainCategoryModel.objects.filter(active=True)
        brands = BrandModel.objects.filter(active=True)
        amazing_offers = AmazingOfferModel.objects.filter(active=True, expired_date__gt=now())
        instant_offers = InstantOfferModel.objects.filter(active=True, expired_date__gt=now())
        advertising_banners = AdvertisingBannerModel.objects.filter(active=True)
        blogs = BlogModel.objects.select_related('category').prefetch_related('auther').filter(active=True)[0:10]
        best_off_products = products.order_by('-off')[0:20]
        top_rating = products.order_by('-view_num')
        new_products = products.filter(available=True).order_by('-published_date')[0:20]
        amazing_offers = [{'product': i.product, 'fields': product_fields(i.product), 'date': i.expired_date} for i in amazing_offers]
        suggested_products = SuggestedProductsModel.objects.filter(active=True)
        max_off_suggested_products = suggested_products.aggregate(max_off=Max('product__off'))
        site_detail = SiteDetailModel.objects.all().first()
        assembled_cases = AssembledCaseModel.objects.filter(active=True)
        laptops = LaptopModel.objects.filter(active=True)
        cpus = CpuModel.objects.filter(active=True)
        main_boards = MainBoardModel.objects.filter(active=True)
        gpus = GpuModel.objects.filter(active=True)
        context = {
            'categories': categories,
            'brands': brands,
            'blogs': blogs,
            'top_rating': top_rating,
            'best_off_products': best_off_products,
            'new_products': new_products,
            'amazing_offers': amazing_offers,
            'instant_offers': instant_offers,
            'suggested_products': suggested_products,
            'max_off_suggested_products': max_off_suggested_products,
            'site_detail': site_detail,
            'advertising_banner1': advertising_banners.filter(order=1, type='desktop').first(),
            'advertising_banner2': advertising_banners.filter(order=2, type='desktop').first(),
            'advertising_banner3': advertising_banners.filter(order=3, type='desktop').first(),
            'advertising_banner4': advertising_banners.filter(order=4, type='desktop').first(),
            'advertising_banner5': advertising_banners.filter(order=1, type='phone').first(),
            'advertising_banner6': advertising_banners.filter(order=2, type='phone').first(),
            'advertising_banner7': advertising_banners.filter(order=3, type='phone').first(),
            'advertising_banner8': advertising_banners.filter(order=4, type='phone').first(),
            'assembled_cases': assembled_cases,
            'laptops': laptops,
            'cpus': cpus,
            'main_boards': main_boards,
            'gpus': gpus,
        }
        return render(request, 'index.html', context)


# class CompareView(View):
#     def get(self, request, category):
#         id = self.request.GET.get('id')
#         cp = compare_products(category, id)
#         context = {
#             'product': cp[0],
#             'fields': cp[1],
#         }
#         return render(request, 'product/compare.html', context)


class CompareProductView(View):
    def get(self, request, category, id):
        try:
            cp = compare_products(category, id)
        except:
            raise Http404
        context = {
            'product': cp[0],
            'fields': cp[1],
        }
        return render(request, 'product/compare.html', context)


class CompareProductListView(ListView):
    template_name = 'product/compare-list.html'
    paginate_by = 20
    model = ProductModel
    context_object_name = 'products'

    def get_queryset(self):
        category = self.kwargs.get('category')
        search = self.request.GET.get('search')
        if category == 'laptop':
            products = ProductModel.objects.filter(main_category__url=category, active=True)
        else:
            products = ProductModel.objects.filter(child_category__url=category, active=True)

        if search:
            products = products.annotate(similar=Greatest(
                TrigramSimilarity('title', search),
                TrigramSimilarity('url', search),
            )).filter(similar__gt=0.1).order_by('-similar')

        return products


class CompareProductDetailView(APIView):
    def get(self, request, category, pk):
        print(category)
        try:
            cp = compare_products(category, pk)
        except:
            return Response(None)
        if category == 'cpu':
            product = CpuSerializers(cp[0]).data

        elif category == 'main-board':
            product = MainBoardSerializers(cp[0]).data

        elif category == 'gpu':
            product = GpuSerializers(cp[0]).data

        elif category == 'fan-cpu':
            product = FanCpuSerializers(cp[0]).data

        elif category == 'ram':
            product = RamSerializers(cp[0]).data

        elif category == 'hard':
            product = HardSerializers(cp[0]).data

        elif category == 'ssd':
            product = SSDSerializers(cp[0]).data

        elif category == 'power':
            product = PowerSerializers(cp[0]).data

        elif category == 'case':
            product = CaseSerializers(cp[0]).data

        elif category == 'laptop':
            product = LaptopSerializers(cp[0]).data

        else:
            product = ProductSerializers(cp[0]).data
        data = {
            'product': product,
            'fields': cp[1],
        }
        return Response(data)
