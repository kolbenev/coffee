from django.urls import path
from .views import CoffeePriceView, FuturesPrice

urlpatterns = [
    path('prices/', CoffeePriceView.as_view(), name='price'),
    path('futures/', FuturesPrice.as_view(), name='futures'),
]