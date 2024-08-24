from rest_framework import serializers
from .models import *


class GpuSeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GpuSeriesModel
        fields = '__all__'


class GpuSerializer(serializers.ModelSerializer):
    class Meta:
        model = GpuModel
        fields = '__all__'