from django.shortcuts import render
from django.views.generic import View
from .models import *


class PowerView(View):
    def get(self, request):
        cpu_brand = self.request.GET.get('cpu_brand')
        cpu_socket = self.request.GET.get('cpu_brand')
        gpu_brand = self.request.GET.get('gpu_brand')
        gpu_series = self.request.GET.get('gpu_brand')

        cpu_brands = CpuBrandsModel.objects.all()
        gpu_brands = GpuBrandsModel.objects.all()

        main_boards = MainBoardModel.objects.all()

        rams = RamModel.objects.all()

        drives = DriveModel.objects.all()

        ssds = SSDModel.objects.all()

        hards = HardModel.objects.all()

        fans = FanModel.objects.all()

        liquid_fans = LiquidFanModel.objects.all()

        context = {
            'cpu_brands': cpu_brands,
            'gpu_brands': gpu_brands,
            'main_boards': main_boards,
            'rams': rams,
            'drives': drives,
            'ssds': ssds,
            'hards': hards,
            'fans': fans,
            'liquid_fans': liquid_fans,
        }

        if cpu_brand:
            cpu_sockets = CpuSocketModel.objects.filter(brand=cpu_brand)
            context['cpu_sockets'] = cpu_sockets

        if cpu_socket:
            cpus = CpuModel.objects.filter(socket=cpu_socket)
            context['cpus'] = cpus

        if gpu_brand:
            gpu_series = GpuSeriesModel.objects.filter(brand=gpu_brand)
            context['gpu_series'] = gpu_series

        if gpu_series:
            gpus = GpuModel.objects.filter(series=gpu_series)
            context['gpus'] = gpus

        return render(request, 'power/index.html', context)
