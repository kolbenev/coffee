from aiohttp import ClientSession
from .models import CoffeePrice
import asyncio

URL = "https://ondemand.websol.barchart.com/getQuote.json"
DATA = {
    "apikey": "2d8b3b803594b13e02a7dc827f4a63f8",
    "symbols": "KC*1,KC*2,KC*3,KC*4,KC*5,KC*6",
    "fields": "month,year,lastPrice",
}

async def fetch_coffee_prices():
    async with ClientSession() as session:
        async with session.post(url=URL, data=DATA) as response:
            result = await response.json()
            return result["results"]

def sync_fetch_and_save():
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    prices = loop.run_until_complete(fetch_coffee_prices())
    for p in prices:
        CoffeePrice.objects.update_or_create(
            month=p["month"],
            year=p["year"],
            defaults={"price": p["lastPrice"]}
        )
