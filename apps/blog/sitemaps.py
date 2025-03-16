from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from .models import BlogModel, BlogCategoryModel, BlogKeyWordModel, AutherModel

class BlogSitemap(Sitemap):
    def items(self):
        return BlogModel.objects.filter(active=True)

    def location(self, obj):
        return reverse('blog:detail_blog', args=[obj.url])

class CategorySitemap(Sitemap):
    def items(self):
        return BlogCategoryModel.objects.filter(active=True)

    def location(self, obj):
        return reverse('blog:category', args=[obj.url])

class KeywordSitemap(Sitemap):
    def items(self):
        return BlogKeyWordModel.objects.all()

    def location(self, obj):
        return reverse('blog:keyword', args=[obj.url])

class AutherSitemap(Sitemap):
    def items(self):
        return AutherModel.objects.filter(active=True)

    def location(self, obj):
        return reverse('blog:auther', args=[obj.url])

