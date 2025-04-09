from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    short_description = models.TextField()
    photo = models.ImageField(upload_to='../images/product_photos/')

    def __str__(self):
        return self.name
