# Generated by Django 5.2 on 2025-04-16 00:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('callback', '0002_callbackrequest_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='callbackrequest',
            name='preferred_time',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
