from django.urls import path
from .views import *

app_name = 'video'

urlpatterns = [
    path('', VideoView.as_view(), name='index'),
    path('show/<pk>', VideoDetailView.as_view(), name='detail'),
]