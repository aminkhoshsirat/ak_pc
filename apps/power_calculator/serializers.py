from rest_framework import serializers
from .models import *


class CpuBrandSerializers(serializers.ModelSerializer):
    class Meta:
        model = CpuBrandsModel
        fields = '__all__'


class GpuBrandSerializers(serializers.ModelSerializer):
    class Meta:
        model = GpuBrandsModel
        fields = '__all__'


class CpuSerializers(serializers.ModelSerializer):
    class Meta:
        model = CpuModel
        fields = '__all__'


class MainBoardSerializers(serializers.ModelSerializer):
    class Meta:
        model = MainBoardModel
        fields = '__all__'


class GpuSerializers(serializers.ModelSerializer):
    class Meta:
        model = GpuModel
        fields = '__all__'


class SSDSerializers(serializers.ModelSerializer):
    class Meta:
        model = SSDModel
        fields = '__all__'


class HardSerializers(serializers.ModelSerializer):
    class Meta:
        model = HardModel
        fields = '__all__'


class MouseSerializers(serializers.ModelSerializer):
    class Meta:
        model = MouseModel
        fields = '__all__'


class KeyBoardSerializers(serializers.ModelSerializer):
    class Meta:
        model = KeyBoardModel
        fields = '__all__'


class RamSerializers(serializers.ModelSerializer):
    class Meta:
        model = RamModel
        fields = '__all__'


class DriveSerializers(serializers.ModelSerializer):
    class Meta:
        model = DriveModel
        fields = '__all__'


class FanSerializers(serializers.ModelSerializer):
    class Meta:
        model = FanModel
        fields = '__all__'


class LiquidFanSerializers(serializers.ModelSerializer):
    class Meta:
        model = LiquidFanModel
        fields = '__all__'


class PortSerializers(serializers.ModelSerializer):
    class Meta:
        model = PortModel
        fields = '__all__'


class OtherPartsSerializers(serializers.ModelSerializer):
    class Meta:
        model = OtherPartsModel
        fields = '__all__'
