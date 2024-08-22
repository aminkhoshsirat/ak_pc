from django.urls import path
from .views import *

app_name = 'power'

urlpatterns = [
    path('', PowerView.as_view(), name='caculator'),
    path('socket/<title>', CpuSocketView.as_view()),
    path('cpus/<title>', CpusView.as_view()),
]