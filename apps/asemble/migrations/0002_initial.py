# Generated by Django 4.2.1 on 2024-09-11 13:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0001_initial'),
        ('asemble', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='asembleproductsmodel',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='product.productmodel'),
        ),
    ]
