# Generated by Django 4.2.1 on 2024-09-11 13:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AsembleModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_payed', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='AsembleProductsModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numbers', models.PositiveIntegerField(default=1)),
                ('asemble', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='asemble_products', to='asemble.asemblemodel')),
            ],
        ),
    ]
