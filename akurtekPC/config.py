from redis import Redis

NESHAN_API_KEY = 'web.65f0a4266dd8482b8151f738821a5554'

NESHAN_SERVICE_KEY = 'service.b617d02811a44be2999e57c3151f36ce'

ghasedak_api_key = 'RjZN5VorYOuI01duQPGOT5cE+DfLh6PDwPyEKYDpDwI'

ghasedak_template = 'akurtek'

# ArvanCloud
arvan_cloud_config = {
    'access_key': "5de4b746-59da-4a18-bec9-411c09793550",
    'secret_key': "334a4bf4798191fc2f26ace1cde01b68ab00556d1c43285f49cbccc8e6b4304d",
    'simin_domain': "https://akurtek-pc.s3.ir-thr-at1.arvanstorage.ir",
    'bucket_name': "akurtek-pc"
}


# Postgresql Config
postgres_config = {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'akurtek_pc',
        'USER': 'amin_dj',
        'PASSWORD': 'aminkh1110',
        'HOST': 'localhost',
        'PORT': '5432'
    }


# postgres_config = {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'qpljhcndsdh_db',
#         'USER': 'postgres',
#         'PASSWORD': 'komm4TjHey9zPnDI6QYf',
#         'HOST': 'qpljhcndmnkzkweu-snj-service',
#         'PORT': '5432'
#     }

# redis_host = 'pzmekfhdajhbvghejcnv-jyl-service'
#
# redis_password = 'zjtUD6AEZ9oft8nLljHt'
#
# redis_cli = Redis(host=redis_host, password=redis_password, db=0)


redis_host = 'localhost'

redis_password = ''

redis_cli = Redis(host=redis_host, password=redis_password, db=0)