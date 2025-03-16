# from django.contrib.sitemaps import Sitemap
# from django.urls import reverse
# from .models import *  # مدل‌های سایتت رو ایمپورت کن
#
# class StaticViewSitemap(Sitemap):
#     priority = 0.8
#     changefreq = 'weekly'
#
#     def items(self):
#         return ['home', 'about', 'contact']  # نام URLهای ثابت
#
#     def location(self, item):
#         return reverse(item)
#
# class ProductSitemap(Sitemap):
#     priority = 0.9
#     changefreq = 'daily'
#
#     def items(self):
#         return Product.objects.all()  # مدل محصولات یا صفحات داینامیک
#
#     def lastmod(self, obj):
#         return obj.updated_at  # فیلد زمان آخرین تغییرات
