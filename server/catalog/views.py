from django.shortcuts import render

from rest_framework.generics import ListAPIView
from .models import Product
from .serializers import ProductSerializer

class CatalogListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
