from django.urls import path
from .views import *

app_name = 'power'

urlpatterns = [
    path('', PowerView.as_view(), name='caculator'),
    path('socket/<title>', CpuSocketView.as_view(), name='socket'),
    path('cpus/<title>', CpusView.as_view(), name='cpus'),
    path('gpu-series/<id>', GpuSeriesView.as_view(), name='gpu-series'),
    path('gpus/<id>', GpusView.as_view(), name='gpus'),
]