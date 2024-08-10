from django.urls import path
from .views import *

app_name = 'power'

urlpatterns = [
    path('', PowerView.as_view(), name='caculator')
]