from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/catalog/', include('catalog.urls')),
    path('api/news/', include('news.urls')),
    path('api/', include('prices.urls')),
    path('api/callback/', include('callback.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)