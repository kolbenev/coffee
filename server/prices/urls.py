from django.conf.urls.static import static
from django.urls import path
from .views import CoffeePriceView, FuturesPrice
from django.conf import settings

urlpatterns = [
    path('prices/', CoffeePriceView.as_view(), name='price'),
    path('futures/', FuturesPrice.as_view(), name='futures'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)