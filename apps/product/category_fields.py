from django.db.models import QuerySet, ManyToManyField

from .models import *


def product_fields(product):
    if product.child_category.url == 'cpu':
        product = CpuModel.objects.get(id=product.id)

    elif product.child_category.url == 'main-board':
        product = MainBoardModel.objects.get(id=product.id)

    elif product.child_category.url == 'gpu':
        product = GpuModel.objects.get(id=product.id)

    elif product.child_category.url == 'fan-cpu':
        product = FanCpuModel.objects.get(id=product.id)

    elif product.child_category.url == 'ram':
        product = RamModel.objects.get(id=product.id)

    elif product.child_category.url == 'hard':
        product = HardModel.objects.get(id=product.id)

    elif product.child_category.url == 'ssd':
        product = SSDModel.objects.get(id=product.id)

    elif product.child_category.url == 'power':
        product = PowerModel.objects.get(id=product.id)

    elif product.child_category.url == 'case':
        product = CaseModel.objects.get(id=product.id)

    elif product.main_category.url == 'laptop':
        product = LaptopModel.objects.get(id=product.id)

    else:
        fields = [{'name': i.field.title, 'amount': i.amount} for i in ProductFieldModel.objects.filter(product=product)]
        return fields

    fields = []

    # for i in product._meta.get_fields()[30:]:
    #     if hasattr(i, 'verbose_name'):
    #         if i.verbose_name != 'productmodel ptr':
    #             fields.append({'name': i.verbose_name , 'amount': '' if str(product.__getattribute__(i.name)).endswith('None')else product.__getattribute__(i.name)})

    for i in product._meta.get_fields()[30:]:
        if hasattr(i, 'verbose_name'):
            if i.verbose_name != 'productmodel ptr':
                # اگر فیلد many-to-many باشد
                if isinstance(getattr(product, i.name), ManyToManyField):

                    related_objects = getattr(product, i.name).all()
                    related_field_values = [str(obj) for obj in related_objects]
                    fields.append({'name': i.verbose_name, 'amount': ', '.join(related_field_values)})

                else:
                    field_value = getattr(product, i.name)
                    fields.append(
                        {'name': i.verbose_name, 'amount': '' if str(field_value).endswith('None') else field_value})

    return fields