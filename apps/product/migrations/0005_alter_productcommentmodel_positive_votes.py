# Generated by Django 5.1 on 2024-09-04 16:03

import json
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_remove_productcommentpositivepointsview_comment_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productcommentmodel',
            name='positive_votes',
            field=models.JSONField(encoder=json.dumps),
        ),
    ]