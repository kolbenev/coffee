from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/catalog/', include('catalog.urls')),
    path('api/news/', include('news.urls')),
    path('api/prices/', include('prices.urls')),
    path('api/callback/', include('callback.urls')),
]
