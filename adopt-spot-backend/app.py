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
    # run all the scrapers at once
    for scraper in scrapers:
        # prepare to run asyncly
        tasks.append(scraper.get_pets())
    # wait here for all scrapers to come back
    results = asyncio.run(fetch_results(tasks))
    for scraper_result in results:
        # compile data together
        data.extend(scraper_result)
    return {"results": data}

async def fetch_results(tasks):
    return await asyncio.gather(*tasks)

if __name__ == '__main__':
    # TODO: create scrapers
    # add all scrapers here
    scrapers = [
        BlueCrossScraper(),
    ]

    app.run(host='0.0.0.0')