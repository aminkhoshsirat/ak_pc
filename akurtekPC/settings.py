import os
from pathlib import Path

from .config import *

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-*7ka_#@8d5k2&vv^6uud@w&7h^$9143+vdgnv_x)vvqk+jp7t='

DEBUG = True

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'admin_tools_stats',
    'django_nvd3',
    'daphne',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.postgres',
    'django.contrib.sites',
    'ckeditor',
    'djangobower',

    # Internal Apps
    'django_jalali',
    'storages',
    'channels',
    'ckeditor_uploader',
    'django_render_partial',
    'rest_framework',
    'boto3',
    'django_celery_beat',
    'azbankgateways',
    "django_htmx",

    # External Apps

    'apps.asemble.apps.AsembleConfig',
    'apps.user.apps.UserConfig',
    'apps.product.apps.ProductConfig',
    'apps.blog.apps.BlogConfig',
    'apps.bucket.apps.BucketConfig',
    'apps.panel.apps.PanelConfig',
    'apps.power_calculator.apps.PowerCalculatorConfig',
    'apps.benchmark.apps.BenchmarkConfig',
    'apps.notification.apps.NotificationConfig',
    'apps.chat.apps.ChatConfig',
    'apps.video.apps.VideoConfig',
]

AUTH_USER_MODEL = 'user.UserModel'


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    "django_htmx.middleware.HtmxMiddleware",
]

ROOT_URLCONF = 'akurtekPC.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates']
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

ASGI_APPLICATION = 'akurtekPC.asgi.application'

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [("127.0.0.1", 6379)],
        },
    },
}

DATABASES = {
    'default': postgres_config
}

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.redis.RedisCache',
        'LOCATION': 'redis://127.0.0.1:6379',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'fa-iran'

TIME_ZONE = 'Asia/Tehran'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'

STATICFILES_DIRS = [BASE_DIR / 'static']

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Liara Storages

AWS_ACCESS_KEY_ID = 's7mtd3ecb1safiaq'
AWS_SECRET_ACCESS_KEY = '50dfce50-11b3-45a6-a8ec-4029430c8ae5'
AWS_STORAGE_BUCKET_NAME = 'akurtek'
AWS_S3_ENDPOINT_URL = 'https://storage.c2.liara.space'
AWS_S3_REGION_NAME = 'us-east-1'

# Django-storages configuration

STORAGES = {
  "default": {
      "BACKEND": "storages.backends.s3.S3Storage",
  },
  "staticfiles": {
      "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
  },
}


# Ckeditor Config

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
    }
}

CKEDITOR_UPLOAD_PATH = "blog/uploads/"

# Rest Framework Settings

rest_framework = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 15,
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
    ],

}


REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# CELERY SETTINGS
CELERY_BACKEND = 'redis://localhost:6379/3'
CELERY_BROKER_URL = 'redis://localhost:6379/4'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/5'

CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_ENABLE_UTC = False

CELERY_BEAT_SCHEDULER = 'django_celery_beat.schedulers:DatabaseScheduler'
