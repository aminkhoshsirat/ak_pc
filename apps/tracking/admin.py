from django.contrib import admin
from .models import APIRequestLog


@admin.register(APIRequestLog)
class APIRequestLogAdmin(admin.ModelAdmin):
	list_display = (
		"id",
	)

