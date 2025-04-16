import re

from rest_framework import serializers
from .models import CallbackRequest

class CallbackRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallbackRequest
        fields = ['name', 'phone', 'comment', 'email', 'preferred_time']
        read_only_fields = ['id', 'created_at']

    def validate_phone(self, value):
        pattern = r'^(\+7|8|7)\d{10}$'
        cleaned = re.sub(r'[^\d+]', '', value)
        if not re.match(pattern, cleaned):
            raise serializers.ValidationError("Incorrect phone number")
        return cleaned
