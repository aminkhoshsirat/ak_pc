import json

from django.shortcuts import render, HttpResponse
from django.views.generic import View
from .models import *
from redis import Redis

re = Redis(host='localhost', port=6379, db=0)


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
        print(title)
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