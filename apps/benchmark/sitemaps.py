from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from akurtekPC.config import redis_cli as r

class BenchmarkSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.7

    def items(self):
        categories = ['cpu', 'gpu', 'ram', 'disk', 'pc']
        item_list = []

        for category in categories:
            category_data = r.lrange(f'benchmark:{category}:category_list', 0, -1)
            item_list.extend(category_data)

        return item_list

    def location(self, obj):
        if obj.startswith('single_'):
            category, url = obj.split('_', 1)
            return reverse(f'benchmark:single_{category}', args=[url])
        else:
            return reverse(f'benchmark:{obj}')
