from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    short_description = models.TextField(default=None, null=True)
    photo = models.ImageField(upload_to='../images/product_photos/')
    screen = models.CharField(max_length=10, default=None, null=True)
    grade = models.CharField(max_length=10, default=None, null=True)
    descriptor = models.TextField(max_length=10, default=None, null=True)
    price = models.DecimalField(decimal_places=2, max_digits=10, default=None, null=True)
    in_stock = models.BooleanField(default=True)


    def __str__(self):
        return self.name
