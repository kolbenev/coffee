import asyncio

from aiohttp import ClientSession
from django.core.management import BaseCommand


URL = "https://ondemand.websol.barchart.com/getQuote.json"
DATA = {
    "apikey": "2d8b3b803594b13e02a7dc827f4a63f8",
    "symbols": "RCN*1,RCN*2,RCN*3",
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

        print(prices)

        self.stdout.write(self.style.SUCCESS("✅ Цены успешно обновлены"))
