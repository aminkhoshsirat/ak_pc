# Generated by Django 5.0.13 on 2025-03-17 15:53

import django_jalali.db.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0002_rename_videocategory_videocategorymodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='videomodel',
            name='published_date',
            field=django_jalali.db.models.jDateTimeField(auto_now=True),
        ),
    ]
