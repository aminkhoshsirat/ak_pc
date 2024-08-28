# Generated by Django 5.1 on 2024-08-28 09:37

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('blog', '0002_initial'),
        ('notification', '0001_initial'),
        ('product', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='adminnotificationmodel',
            name='blog_comment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='blog_comment_admin_notification', to='blog.blogcommentmodel'),
        ),
        migrations.AddField(
            model_name='adminnotificationmodel',
            name='product_comment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='product_comment_admin_notification', to='product.productcommentmodel'),
        ),
        migrations.AddField(
            model_name='usernotificationmodel',
            name='user',
            field=models.ManyToManyField(blank=True, related_name='user_notification', to=settings.AUTH_USER_MODEL),
        ),
    ]
