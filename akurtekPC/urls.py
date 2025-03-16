from django.contrib import admin
from django.urls import path, include
from apps.product.views import IndexView, FaqsView, ContactUsView, AboutUsView

from django.contrib.sitemaps.views import sitemap
from apps.product.sitemaps import *
from apps.asemble.sitemaps import AssembleSitemap, ProductSitemap as AssembleProductSitemap
from apps.benchmark.sitemaps import *
from apps.blog.sitemaps import *
from apps.power_calculator.sitemaps import *

sitemaps = {
    'main_category': MainCategorySitemap,
    'child_category': ChildCategorySitemap,
    'product': ProductSitemap,
    'brand': BrandSitemap,
    'assemble_product': AssembleProductSitemap,
    'assemble': AssembleSitemap,
    'benchmark': BenchmarkSitemap,
    'blogs': BlogSitemap,
    'categories': CategorySitemap,
    'keywords': KeywordSitemap,
    'authers': AutherSitemap,
    'power': PowerSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('admin_tools_stats/', include('admin_tools_stats.urls')),
    path('', IndexView.as_view(), name='index'),
    path('faq', FaqsView.as_view(), name='faq'),
    path('contact-us', ContactUsView.as_view(), name='contact_us'),
    path('about-us', AboutUsView.as_view(), name='about_us'),
    path('product/', include('apps.product.urls', namespace='product')),
    path('blog/', include('apps.blog.urls', namespace='blog')),
    path('user/', include('apps.user.urls', namespace='user')),
    path('bucket/', include('apps.bucket.urls', namespace='bucket')),
    path('asemble/', include('apps.asemble.urls', namespace='asemble')),
    path('benchmark/', include('apps.benchmark.urls', namespace='benchmark')),
    path('power/', include('apps.power_calculator.urls', namespace='power')),
    path('panel/', include('apps.panel.urls', namespace='panel')),
    path('chat/', include('apps.chat.urls', namespace='chat')),
    path('video/', include('apps.video.urls', namespace='video')),

    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),

]

