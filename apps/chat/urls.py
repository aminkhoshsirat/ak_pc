from django.urls import path
from .views import *

app_name = 'chat'

urlpatterns = [
    path('', UserChatView.as_view())
]
