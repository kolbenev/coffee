from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime
from dateutil.relativedelta import relativedelta

from .models import CoffeePrice
from .serializers import FuturesPriceSerializer


class FuturesPrice(ListAPIView):
    queryset = CoffeePrice.objects.exclude(name__isnull=True)
    serializer_class = FuturesPriceSerializer


class CoffeePriceView(APIView):
    month_order = {
        "January": 1, "February": 2, "March": 3,
        "April": 4, "May": 5, "June": 6,
        "July": 7, "August": 8, "September": 9,
        "October": 10, "November": 11, "December": 12
    }

    month_translation = {
        "January": "Январь", "February": "Февраль", "March": "Март",
        "April": "Апрель", "May": "Май", "June": "Июнь",
        "July": "Июль", "August": "Август", "September": "Сентябрь",
        "October": "Октябрь", "November": "Ноябрь", "December": "Декабрь"
    }

    def get_expected_months(self):
        return [
            (
                (datetime.today() + relativedelta(months=i)).year,
                (datetime.today() + relativedelta(months=i)).month
            )
            for i in range(13)
        ]

    def prepare_data(self, user_dif=0):
        expected = self.get_expected_months()
        prices = CoffeePrice.objects.all()
        price_dict = {
            (p.year, self.month_order.get(p.month)): p.price for p in prices
        }

        data = []
        last_price = None

        for year, month_num in expected:
            month_name_en = [k for k, v in self.month_order.items() if v == month_num][0]
            month_name_ru = self.month_translation[month_name_en]

            base_price = price_dict.get((year, month_num))

            if base_price is not None:
                last_price = base_price
            elif last_price is not None:
                base_price = last_price + user_dif
                last_price = base_price
            else:
                continue

            converted = round(base_price * 0.022046 * 1.2 * 1.03, 2)
            delivery_date = datetime(year=year, month=month_num, day=1) + relativedelta(months=2)
            delivery_month_name = self.month_translation[delivery_date.strftime("%B")]

            data.append({
                "month": month_name_ru,
                "year": year,
                "price": converted,
                "delivery_month": f"{delivery_month_name}",
            })

        return data

    def get(self, request):
        data = self.prepare_data(user_dif=0)
        return Response(data)

    def post(self, request):
        user_dif = float(request.data.get('user_dif', 0))
        data = self.prepare_data(user_dif=user_dif)
        return Response(data)

