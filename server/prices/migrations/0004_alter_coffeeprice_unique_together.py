# Generated by Django 5.2 on 2025-04-15 08:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0003_coffeeprice_name'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='coffeeprice',
            unique_together={('name', 'month', 'year')},
        ),
    ]
