from rest_framework import serializers
from .models import CoffeePrice

class CoffeePriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoffeePrice
        fields = ['month', 'year', 'price', 'last_day_fixation']


class FuturesPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoffeePrice
        fields = ['name', 'price']
