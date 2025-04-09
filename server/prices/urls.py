from django.urls import path
from .views import CoffeePriceView

urlpatterns = [
    path('', CoffeePriceView.as_view(), name='price'),
]
