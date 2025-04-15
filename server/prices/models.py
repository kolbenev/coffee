from django.db import models

class CoffeePrice(models.Model):
    name = models.CharField(max_length=100, default=None, null=True)
    month = models.CharField(max_length=20)
    year = models.PositiveIntegerField()
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_day_fixation = models.DateField(default=None, null=True)

    class Meta:
        unique_together = ('name', 'month', 'year')
