from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'short_description',
            'photo',
            "screen",
            "grade",
            "descriptor",
            "price",
            "in_stock",
        ]
