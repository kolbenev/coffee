from django.contrib import admin
from .models import CoffeePrice

@admin.register(CoffeePrice)
class CoffeePriceAdmin(admin.ModelAdmin):
    list_display = ('month', 'year', 'price', 'created_at')
    list_filter = ('year', 'month')
    search_fields = ('month',)
