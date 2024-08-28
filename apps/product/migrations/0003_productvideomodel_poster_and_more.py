# Generated by Django 5.1 on 2024-08-28 20:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='productvideomodel',
            name='poster',
            field=models.ImageField(default=1, upload_to='product/poster'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='productvideomodel',
            name='product',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='product_video', to='product.productmodel', verbose_name='کالا'),
        ),
        migrations.AlterField(
            model_name='productvideomodel',
            name='video',
            field=models.FileField(upload_to='product/product_videos', verbose_name='ویدیو'),
        ),
    ]
