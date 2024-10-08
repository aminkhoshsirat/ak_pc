# Generated by Django 4.2.1 on 2024-09-11 13:32

from django.db import migrations, models
import django_jalali.db.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserChatModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('file', models.FileField(blank=True, null=True, upload_to='chat/file')),
                ('date', django_jalali.db.models.jDateTimeField(auto_now_add=True)),
                ('seen', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='UserChatRoomModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', django_jalali.db.models.jDateTimeField(auto_now=True)),
                ('last_text', models.TextField(blank=True, null=True)),
                ('admin', models.BooleanField(default=False)),
                ('online', models.BooleanField(default=False)),
            ],
        ),
    ]
