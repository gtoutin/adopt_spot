import asyncio

from flask import Flask

from adopt_spot_backend.models import schemas
from adopt_spot_backend.scraper import BlueCrossScraper


app = Flask(__name__)

@app.route('/')
def root():
    return 'Hello universe!'

@app.route('/pets')
def get_pets() -> list[schemas.PET]:
    tasks = []
    data = []
    for scraper in scrapers:
        tasks.append(scraper.get_pets())
    results = asyncio.run(fetch_results(tasks))
    for scraper_result in results:
        data.extend(scraper_result)
    return {"results": data}

async def fetch_results(tasks):
    return await asyncio.gather(*tasks)

if __name__ == '__main__':
    # TODO: create scrapers
    scrapers = [
        BlueCrossScraper()
    ]

    app.run(host='0.0.0.0')