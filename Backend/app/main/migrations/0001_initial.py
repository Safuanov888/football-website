# Generated by Django 5.1.1 on 2024-09-26 16:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Command',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('linck_ava', models.TextField()),
                ('name', models.CharField(max_length=100)),
                ('text_syperliga', models.CharField(max_length=100)),
                ('linck_video', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Matches',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('score', models.CharField(max_length=5)),
                ('finished', models.BooleanField(default=True)),
                ('adres', models.CharField(max_length=100)),
                ('command1', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='home_team', to='main.command')),
                ('command2', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='away_team', to='main.command')),
            ],
        ),
    ]
