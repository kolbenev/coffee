import asyncio
from aiohttp import ClientSession
from django.core.management.base import BaseCommand
from prices.models import CoffeePrice

URL = "https://ondemand.websol.barchart.com/getQuote.json"
DATA = {
    "apikey": "2d8b3b803594b13e02a7dc827f4a63f8",
    "symbols": "KC*1,KC*2,KC*3,KC*4,KC*5,KC*6",
    "fields": "month,year,lastPrice",
}

async def fetch_prices():
    async with ClientSession() as session:
        async with session.post(url=URL, data=DATA) as response:
            result = await response.json()
            return result["results"]

class Command(BaseCommand):
    help = "Обновляет цены на кофе из биржи и сохраняет в базу данных"

    def handle(self, *args, **kwargs):
        self.stdout.write("⏳ Получение актуальных цен...")

        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        prices = loop.run_until_complete(fetch_prices())

        for item in prices:
            CoffeePrice.objects.update_or_create(
                month=item["month"],
                year=item["year"],
                defaults={"price": item["lastPrice"]}
            )

        self.stdout.write(self.style.SUCCESS("✅ Цены успешно обновлены"))
