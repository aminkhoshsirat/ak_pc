from django.contrib import admin
from .models import *
from utils.mailchimp import add_user_to_mailchimp
from django.http import HttpResponse


@admin.register(UserAddressModel)
class UserAddressAdmin(admin.ModelAdmin):
    list_display = ['state']


def send_to_mailchimp(modeladmin, request, queryset):
    for user in queryset:
        try:
            add_user_to_mailchimp(user.email, user.fullname, user.phone)
            return HttpResponse("Users added to Mailchimp successfully.")
        except Exception as e:
            return HttpResponse(f"Error adding user to Mailchimp: {e}")



send_to_mailchimp.short_description = "Send selected users to Mailchimp"

class UserAdmin(admin.ModelAdmin):
    actions = [send_to_mailchimp]

admin.site.register(UserModel, UserAdmin)
