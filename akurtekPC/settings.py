import os
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv("SECRET_KEY")

DEBUG = True
ALLOWED_HOSTS = ['akurtek.ir', 'www.akurtek.ir']


INSTALLED_APPS = [
    'admin_tools_stats',
    'django_nvd3',
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
    'django_template_maths',

    # Internal Apps
    'django.contrib.sitemaps',
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

SITE_ID = 1

MIDDLEWARE = [
    'django.middleware.gzip.GZipMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    "django_htmx.middleware.HtmxMiddleware",
]

CSRF_TRUSTED_ORIGINS = ['https://akurtek.ir', 'http://akurtekpc.runflare.run/']

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

WSGI_APPLICATION = 'akurtekPC.wsgi.application'

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [f'redis://:{os.getenv("redis_password")}@{os.getenv("redis_host")}:6379'],
        },
    },
}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv("pg_name"),
        'USER': os.getenv("pg_user"),
        'PASSWORD': os.getenv("pg_password"),
        'HOST': os.getenv("pg_host"),
        'PORT': '5432',
    }
}


CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.redis.RedisCache',
        'LOCATION': f'redis://:{os.getenv("redis_password")}@{os.getenv("redis_host")}:6379',
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

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Liara Storages
AWS_ACCESS_KEY_ID = 'delfbv0ahb81g94l'
AWS_SECRET_ACCESS_KEY = '0eaba88f-ea4b-4474-9282-376a0bd80d71'
AWS_STORAGE_BUCKET_NAME = 'akurtek-pc'
AWS_S3_ENDPOINT_URL = 'https://storage.c2.liara.space'
AWS_S3_REGION_NAME = 'us-east-1'
# AWS_DEFAULT_ACL = 'public-read'
# STATIC_URL = 'https://storage.c2.liara.space/'
# STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
# AWS_LOCATION = 'static'


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
CELERY_BACKEND = f'redis://:{os.getenv("redis_password")}@{os.getenv("redis_host")}:6379/3'
CELERY_BROKER_URL = f'redis://:{os.getenv("redis_password")}@{os.getenv("redis_host")}:6379/4'
CELERY_RESULT_BACKEND = f'redis://:{os.getenv("redis_password")}@{os.getenv("redis_host")}:6379/5'


CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_ENABLE_UTC = False

CELERY_BEAT_SCHEDULER = 'django_celery_beat.schedulers:DatabaseScheduler'

# STATICFILES_STORAGE = "django.contrib.staticfiles.storage.ManifestStaticFilesStorage"

MAILCHIMP_API_KEY = os.getenv("MAILCHIMP_API_KEY")
MAILCHIMP_SERVER_PREFIX = os.getenv("MAILCHIMP_SERVER_PREFIX")
MAILCHIMP_LIST_ID = os.getenv("MAILCHIMP_LIST_ID")
