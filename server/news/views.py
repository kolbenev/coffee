from rest_framework.generics import ListAPIView
from .models import News
from .serializers import NewsSerializer

class NewsListView(ListAPIView):
    queryset = News.objects.all().order_by('-date')
    serializer_class = NewsSerializer
