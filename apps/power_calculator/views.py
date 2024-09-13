import json

from django.shortcuts import render, HttpResponse
from django.views.generic import View
from rest_framework import status

from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from akurtekPC.config import redis_cli as re


class PowerView(View):
    def get(self, request):
        gpu_brands = GpuBrandsModel.objects.all()

        main_boards = MainBoardModel.objects.all()

        rams = RamModel.objects.all()

        drives = DriveModel.objects.all()

        ssds = SSDModel.objects.all()

        hards = HardModel.objects.all()

        fans = FanModel.objects.all()

        liquid_fans = LiquidFanModel.objects.all()

        context = {
            'cpu_brands': ['Intel', 'AMD'],
            'gpu_brands': gpu_brands,
            'main_boards': main_boards,
            'rams': rams,
            'drives': drives,
            'ssds': ssds,
            'hards': hards,
            'fans': fans,
            'liquid_fans': liquid_fans,
        }

        return render(request, 'power/index.html', context)


class CpuSocketView(View):
    def get(self, request, title):
        if title == 'Intel':
            objects = re.get('intel_socket')
        else:
            objects = re.get('amd_socket')
        return HttpResponse(objects)


class CpusView(View):
    def get(self, request, title):
        cpus = json.loads(re.get('cpus'))
        objects = []
        for i in cpus:
            if i['socket'].replace("Socket", "").lstrip(" ") == title:
                objects.append(i)
        return HttpResponse(json.dumps(objects))


class GpuSeriesView(APIView):
    def get(self, request, id):
        series = GpuSeriesModel.objects.filter(brand__id=id)
        data = {
            'objects': GpuSeriesSerializer(series, many=True).data
        }
        return Response(data=data, status=status.HTTP_200_OK)


class GpusView(APIView):
    def get(self, request, id):
        gpus = GpuModel.objects.filter(series_id=id)
        data = {
            'objects': GpuSerializer(gpus, many=True).data
        }
        return Response(data, status=status.HTTP_200_OK)