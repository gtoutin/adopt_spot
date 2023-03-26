from flask import Flask

from adopt_spot_backend.models import schemas
from adopt_spot_backend.scraper import BlueCrossScraper


app = Flask(__name__)

@app.route('/')
def root():
    return 'Hello universe!'

@app.route('/pets')
def get_pets() -> list[schemas.PET]:
    data = []
    for scraper in scrapers:
        data.extend(scraper.get_pets())
    return {"results": data}

if __name__ == '__main__':
    # TODO: create scrapers
    scrapers = [
        BlueCrossScraper()
    ]

    app.run(host='0.0.0.0')