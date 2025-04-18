import os

from django.conf import settings
from django.http import HttpResponseForbidden

ALLOWED_IPS = [
    os.getenv('POSTGRES_HOST'),
]

if settings.DEBUG:
    ALLOWED_IPS += [
        '127.0.0.1',
        'localhost',
    ]

class AllowedIPMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        ip = request.META.get('REMOTE_ADDR')
        if request.path.startswith('/api/') and ip not in ALLOWED_IPS:
            return HttpResponseForbidden("Forbidden: Invalid IP")
        return self.get_response(request)
