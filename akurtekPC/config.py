from redis import Redis

NESHAN_API_KEY = 'web.65f0a4266dd8482b8151f738821a5554'

NESHAN_SERVICE_KEY = 'service.b617d02811a44be2999e57c3151f36ce'

ghasedak_api_key = 'RjZN5VorYOuI01duQPGOT5cE+DfLh6PDwPyEKYDpDwI'

ghasedak_template = 'akurtek'

# Postgresql Config
postgres_config = {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'vbuviughciu_db',
        'USER': 'postgres',
        'PASSWORD': 'uddZwhyENJ5EU9Ona5xp',
        'HOST': 'vbuviughbvdbvkbfapqoqkkv-vdj-service',
        'PORT': '5432'
    }

redis_host = 'fuwegfgaqpbbcvvzmxad-crc-service'

redis_password = 'dnniv157DTuyqTEOYaEn'


# postgres_config = {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'akurtek',
#         'USER': 'amin_ak',
#         'PASSWORD': 'aminkh1110',
#         'HOST': 'localhost',
#         'PORT': '5432'
#     }
#
# redis_host = 'localhost'
# redis_password = ''

redis_cli = Redis(host=redis_host, password=redis_password, db=0)
