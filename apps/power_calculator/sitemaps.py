from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from .models import GpuBrandsModel, GpuSeriesModel, GpuModel, MainBoardModel, SSDModel, HardModel, RamModel, DriveModel, \
    FanModel, LiquidFanModel


class PowerSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.8

    def items(self):
        return [
            'power:caculator',
            'power:socket',
            'power:cpus',
            'power:gpu-series',
            'power:gpus',
        ]

    def location(self, item):
        if item == 'power:caculator':
            return reverse('power:caculator')
        elif item == 'power:socket':
            return reverse('power:socket', kwargs={'title': 'Intel'})
        elif item == 'power:cpus':
            return reverse('power:cpus', kwargs={'title': 'Intel'})
        elif item == 'power:gpu-series':
            return reverse('power:gpu-series', kwargs={'id': 1})
        elif item == 'power:gpus':
            return reverse('power:gpus', kwargs={'id': 1})
