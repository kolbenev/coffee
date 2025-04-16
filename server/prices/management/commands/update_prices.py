import asyncio
from datetime import datetime
from aiohttp import ClientSession
from django.core.management.base import BaseCommand
from prices.models import CoffeePrice
from dateutil.relativedelta import relativedelta

URL = "https://ondemand.websol.barchart.com/getQuote.json"
DATA = {
    "apikey": "2d8b3b803594b13e02a7dc827f4a63f8",
    "symbols": "KC*1,KC*2,KC*3,KC*4,KC*5,KC*6",
    "fields": "month,year,lastPrice",
}

MONTH_TRANSLATION = {
    "January": "Январь", "February": "Февраль", "March": "Март",
    "April": "Апрель", "May": "Май", "June": "Июнь",
    "July": "Июль", "August": "Август", "September": "Сентябрь",
    "October": "Октябрь", "November": "Ноябрь", "December": "Декабрь"
}

MONTH_ORDER = {name: i for i, name in enumerate(MONTH_TRANSLATION.keys(), start=1)}

async def fetch_prices():
    async with ClientSession() as session:
        async with session.post(url=URL, data=DATA) as response:
            result = await response.json()
            return result["results"]

class Command(BaseCommand):
    help = "Обновляет цены на кофе из биржи и сохраняет в базу данных"

    def handle(self, *args, **kwargs):
        self.stdout.write("\u23f3 Получение актуальных цен...")

        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        prices = loop.run_until_complete(fetch_prices())

        now = datetime.now()
        expected_months = [
            (
                (now + relativedelta(months=i)).year,
                (now + relativedelta(months=i)).month
            ) for i in range(13)
        ]

        price_map = {(int(p["year"]), datetime.strptime(p["month"], "%B").month): float(p["lastPrice"]) for p in prices}

        last_price = None
        for year, month in reversed(expected_months):
            base_price = price_map.get((year, month))
            if base_price is not None:
                last_price = base_price
            elif last_price is not None:
                base_price = last_price
            else:
                continue

            month_name = datetime(year, month, 1).strftime("%B")

            CoffeePrice.objects.update_or_create(
                month=month_name,
                year=year,
                defaults={"price": base_price}
            )
