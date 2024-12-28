from django.shortcuts import render
from django.views.generic import View, DetailView
from .models import *


class VideoView(View):
    def get(self, request):
        videos = VideoModel.objects.all().order_by('-published_date')
        context = {
            'videos': videos
        }
        return render(request, 'video/index.html', context)


class VideoDetailView(DetailView):
    template_name = 'video/index.html'
    queryset = VideoModel.objects.all()

