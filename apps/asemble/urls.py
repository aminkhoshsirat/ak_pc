from django.urls import path
from .views import *

app_name = 'asemble'

urlpatterns = [
    path('', AsembleView.as_view(), name='index'),
    path('category/', CategoryView.as_view()),
    path('product/detail/<pk>', ProductDetailView.as_view()),
]