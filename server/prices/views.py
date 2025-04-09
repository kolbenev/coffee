from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime
from dateutil.relativedelta import relativedelta

from .models import CoffeePrice
from .serializers import CoffeePriceSerializer




class CoffeePriceView(APIView):
    month_order = {
        "January": 1, "February": 2, "March": 3,
        "April": 4, "May": 5, "June": 6,
        "July": 7, "August": 8, "September": 9,
        "October": 10, "November": 11, "December": 12
    }
    def get(self, request):
        prices = CoffeePrice.objects.all()

        data = []
        for item in prices:
            converted_price = round(item.price * 0.022046 * 1.2 * 1.03, 2)
            data.append({
                "month": item.month,
                "year": item.year,
                "price": converted_price
            })
        data.sort(key=lambda x: (x['year'], self.month_order.get(x['month'], 13)))

        return Response(data)

    def post(self, request):
        user_dif = float(request.data.get('user_dif', 0))
        prices = CoffeePrice.objects.all()

        data = []
        for item in prices:
            adjusted_price = round((item.price + user_dif) * 0.022046 * 1.2 * 1.03, 2)
            data.append({
                "month": item.month,
                "year": item.year,
                "price": adjusted_price
            })
        data.sort(key=lambda x: (x['year'], self.month_order.get(x['month'], 13)))

        return Response(data)

