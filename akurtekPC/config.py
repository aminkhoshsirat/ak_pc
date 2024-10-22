from redis import Redis

NESHAN_API_KEY = 'web.65f0a4266dd8482b8151f738821a5554'

NESHAN_SERVICE_KEY = 'service.b617d02811a44be2999e57c3151f36ce'

ghasedak_api_key = 'RjZN5VorYOuI01duQPGOT5cE+DfLh6PDwPyEKYDpDwI'

ghasedak_template = 'akurtek'

# Postgresql Config
# postgres_config = {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'dgsahdajfwb_db',
#         'USER': 'postgres',
#         'PASSWORD': 'tUQnyO72rNbdk4DgeZFk',
#         'HOST': 'dgsahdajfgjtjreethsd-koz-service',
#         'PORT': '5432'
#     }
#
# redis_host = 'gfdhfdhfdhfhdhggoewwhou-utr-service'
#
# redis_password = 'nJmlpq69NIi7oBBnDTyr'


postgres_config = {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'akurtek',
        'USER': 'amin_ak',
        'PASSWORD': 'aminkh1110',
        'HOST': 'localhost',
        'PORT': '5432'
    }

redis_host = 'localhost'
redis_password = ''

redis_cli = Redis(host=redis_host, password=redis_password, db=0)
