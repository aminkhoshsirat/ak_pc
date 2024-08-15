# import requests
# url = "http://api.ghasedaksms.com/v2/sms/send/simple"
#
# payload = "message=&sender=30005006009763&Receptor=09909794694&="
# headers = {
#     'apikey': "z+leT7/tRRarXFn4e5IV1QfyiOIx7raK555uEVqFCGI",
#     'content-type': "application/x-www-form-urlencoded"
# }
#
# response = requests.request("POST", url, data=payload, headers=headers)
# print(response.text)


# import http.client
#
# conn = http.client.HTTPConnection("api.ghasedaksms.com")
# payload = "receptor=09909794694&type=1&template=akurtek&param1=123"
# headers = {
#     'apikey': "RjZN5VorYOuI01duQPGOT5cE+DfLh6PDwPyEKYDpDwI",
#     'content-type': "application/x-www-form-urlencoded"
# }
# conn.request("POST", "/v2/send/verify", payload, headers)
# res = conn.getresponse()
# data = res.read()
# print(data.decode("utf-8"))
import requests
import json

url = "http://api.ghasedaksms.com/v2/credit"

headers = {
'apikey': "RjZN5VorYOuI01duQPGOT5cE+DfLh6PDwPyEKYDpDwI",
}
response = requests.request("POST", url, headers=headers)
print(json.loads(response.text)['credit'])