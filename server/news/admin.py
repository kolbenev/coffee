from django.contrib import admin
from .models import News

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('text', 'date')
    list_filter = ('date',)
    search_fields = ('text',)
