from django.http import HttpRequest
import http.client
import os
from dotenv import load_dotenv
load_dotenv()


def get_client_ip(request: HttpRequest):
    x_forward_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forward_for:
        ip = x_forward_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def send_otp(phone, message):
    conn = http.client.HTTPConnection("api.ghasedaksms.com")
    payload = f"receptor={phone}&type=1&template={os.getenv("ghasedak_template")}&param1={message}"
    headers = {
        'apikey': os.getenv("ghasedak_api_key"),
        'content-type': "application/x-www-form-urlencoded"
    }
    conn.request("POST", "/v2/send/verify", payload, headers)
    res = conn.getresponse()
    data = res.read()