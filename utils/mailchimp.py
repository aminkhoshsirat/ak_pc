from mailchimp_marketing import Client
from django.conf import settings


def add_user_to_mailchimp(email, fullname, phone):
    client = Client()
    client.set_config({
        "api_key": settings.MAILCHIMP_API_KEY,
        "server": settings.MAILCHIMP_SERVER_PREFIX
    })

    list_id = settings.MAILCHIMP_LIST_ID

    member_data = {
        "email_address": email,
        "status": "subscribed",
        "merge_fields": {
            "FNAME": fullname,
            "PHONE": phone,
        }
    }
    client.lists.add_list_member(list_id, member_data)