# Generated by Django 4.2.1 on 2024-08-20 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('panel', '0007_advertisingbannermodel_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertisingbannermodel',
            name='url',
            field=models.URLField(),
        ),
    ]
