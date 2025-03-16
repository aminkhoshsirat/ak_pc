from django.contrib.sitemaps import Sitemap
from .models import MainCategoryModel, ChildCategoryModel, ProductModel, BrandModel

class MainCategorySitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8

    def items(self):
        return MainCategoryModel.objects.filter(active=True)

    def location(self, obj):
        return obj.get_absolute_url()


class ChildCategorySitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.7

    def items(self):
        return ChildCategoryModel.objects.filter(active=True)

    def location(self, obj):
        return obj.get_absolute_url()


class ProductSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.9

    def items(self):
        return ProductModel.objects.filter(active=True)

    def location(self, obj):
        return obj.get_absolute_url()


class BrandSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.6

    def items(self):
        return BrandModel.objects.filter(active=True)

    def location(self, obj):
        return obj.get_absolute_url()
