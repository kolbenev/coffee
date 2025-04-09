from django.contrib import admin
from .models import CallbackRequest

@admin.register(CallbackRequest)
class CallbackRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'created_at')
    search_fields = ('name', 'phone', 'email', 'comment')
    list_filter = ('created_at',)
    readonly_fields = ('created_at',)
