from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from apps.product.models import ProductModel


class ProductSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.9

    def items(self):
        return ProductModel.objects.filter(active=True)

    def location(self, obj):
        return reverse('asemble:product-detail', args=[obj.pk])


class AssembleSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return ['index']

    def location(self, obj):
        return reverse('asemble:index')
