from django.contrib import admin
from .models import *


@admin.register(VideoCategoryModel)
class VideoCategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'url']


@admin.register(VideoModel)
class VideoModelAdmin(admin.ModelAdmin):
    list_display = ['title', 'url']