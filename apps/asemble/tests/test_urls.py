from django.test import SimpleTestCase
from django.urls import reverse, resolve
from apps.asemble.views import *


class TestUrls(SimpleTestCase):
    def test_index(self):
        url = reverse('asemble:index')
        self.assertEqual(resolve(url).func.view_class, AsembleView)

    def test_category(self):
        url = reverse('asemble:category')
        self.assertEqual(resolve(url).func.view_class, CategoryView)

    def test_product_detail(self):
        url = reverse('asemble:product-detail', args=[1])
        self.assertEqual(resolve(url).func.view_class, ProductDetailView)
