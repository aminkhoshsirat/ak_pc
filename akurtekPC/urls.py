from django.contrib import admin
from django.urls import path, include
from apps.product.views import IndexView, FaqsView, ContactUsView, AboutUsView
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('', IndexView.as_view(), name='index'),
    path('faq', FaqsView.as_view(), name='faq'),
    path('contact-us', ContactUsView.as_view(), name='contact_us'),
    path('about-us', AboutUsView.as_view(), name='about_us'),
    path('product/', include('apps.product.urls', namespace='product')),
    path('blog/', include('apps.blog.urls', namespace='blog')),
    path('user/', include('apps.user.urls', namespace='user')),
    path('bucket/', include('apps.bucket.urls', namespace='bucket')),
    path('asemble/', include('apps.asemble.urls', namespace='asemble')),
    path('benchmark/', include('apps.benchmark.urls', namespace='benchmark')),
    path('power/', include('apps.power_calculator.urls', namespace='power')),
    path('panel/', include('apps.panel.urls', namespace='panel')),
    path('chat/', include('apps.chat.urls', namespace='chat')),
    path('video/', include('apps.video.urls', namespace='video')),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

