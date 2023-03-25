from flask import Flask

from adopt_spot_backend.models import schemas


app = Flask(__name__)

@app.route('/')
def root():
    return 'Hello universe!'

@app.route('/pets')
def get_pets() -> schemas.GET_PETS:
    data = []
    for scraper in scrapers:
        data.append(scraper.get_pets())
    return data

if __name__ == '__main__':
    # TODO: create scrapers
    scrapers = [
        ...
    ]

    app.run(host='0.0.0.0')