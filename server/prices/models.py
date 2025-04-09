from django.db import models

class CoffeePrice(models.Model):
    month = models.CharField(max_length=20)
    year = models.PositiveIntegerField()
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('month', 'year')
