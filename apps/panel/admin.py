from django.contrib import admin
from .models import *


@admin.register(SiteDetailModel)
class SiteDetailAdmin(admin.ModelAdmin):
    list_display = ['title', 'phone', 'email']


@admin.register(AdvertisingBannerModel)
class AdvertisingBannerAdmin(admin.ModelAdmin):
    list_display = ['title', 'url', 'image', 'order', 'active']


@admin.register(InstantOfferModel)
class InstantOfferAdmin(admin.ModelAdmin):
    list_display = ['product', 'expired_date', 'active']


@admin.register(AmazingOfferModel)
class AmazingOfferAdmin(admin.ModelAdmin):
    list_display = ['product', 'expired_date', 'active']


@admin.register(FinancialStatementModel)
class FinancialStatementAdmin(admin.ModelAdmin):
    list_display = ['title']


@admin.register(FinancialStatementObjectsModel)
class FinancialStatementObjectsAdmin(admin.ModelAdmin):
    list_display = ['title']


@admin.register(AboutUsModel)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ['id']
