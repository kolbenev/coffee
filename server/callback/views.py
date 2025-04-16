from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CallbackRequestSerializer


@method_decorator(csrf_exempt, name='dispatch')
class CallbackRequestView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = CallbackRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "OK!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
