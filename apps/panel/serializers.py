from rest_framework import serializers
from .models import *


class SiteDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteDetailModel
        fields = '__all__'


class AdvertisingBannerSerializers(serializers.ModelSerializer):
    class Meta:
        model = AdvertisingBannerModel
        fields = '__all__'


class InstantOfferSerializers(serializers.ModelSerializer):
    class Meta:
        model = InstantOfferModel
        fields = '__all__'


class AmazingPanelSerializers(serializers.ModelSerializer):
    class Meta:
        model = AmazingOfferModel
        fields = '__all__'


class AsemblePanelSerializers(serializers.ModelSerializer):
    class Meta:
        model = AsemblePanelModel
        fields = '__all__'


class DailyWorksSerializers(serializers.ModelSerializer):
    class Meta:
        model = DailyWorksModel
        fields = '__all__'


class FinancialStatementSerializers(serializers.ModelSerializer):
    class Meta:
        model = DailyWorksModel
        fields = '__all__'



