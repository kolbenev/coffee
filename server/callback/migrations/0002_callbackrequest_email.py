# Generated by Django 5.2 on 2025-04-09 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('callback', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='callbackrequest',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]
