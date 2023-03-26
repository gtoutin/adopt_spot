import asyncio

from bs4 import BeautifulSoup
import aiohttp

from .models import schemas, animals



## generic scraper class that can be extended and specialized per website
# not really used/needed. feel free to delete
class Scraper:
    def __init__(self) -> None:
        self.species = []

    def get_pets() -> schemas.GET_PETS:
        ...
    
    def get_pet_id(pet_id) -> schemas.PET:
        ...


# url = https://www.bluecross.org.uk/pet/listing
class BlueCrossScraper(Scraper):
    def __init__(self) -> None:
        super().__init__()
        # base url of website
        self.url = "https://www.bluecross.org.uk"
        # the species covered by this scraper
        # see where animals is defined for more info
        self.species = [
            animals.DOG,
            animals.CAT,
            animals.DEGU,
            animals.HORSE,
            animals.RABBIT,
            animals.RAT,
            animals.GUINEA_PIG,
            animals.MOUSE, 
            animals.CHINCHILLA
        ]

    async def fetch(self, session, url):
        "asynchronously fetch stuff from a url"
        print(f"fetching {url}")
        async with session.get(url) as response:
            if response.ok:
                output = await response.json()
                print(f"fetched {url}")
                return output

    async def get_pets(self) -> schemas.GET_PETS:
        "asynchronously get the data returned from GET /pets"
        data = []
        tasks = []

        async with aiohttp.ClientSession() as session:
            # loop thru species
            for spec_name in [spec.value for spec in self.species]:
                # prepare to fetch asyncly
                task = asyncio.create_task(self.fetch(session, f"{self.url}/pet/listing/{spec_name}"))
                tasks.append(task)
            # wait here for async fetches to finish
            results = await asyncio.gather(*tasks)
            for spec_name, spec_data in zip([spec.value for spec in self.species], results):
                # collect results together
                data.extend(self._extract_data(spec_data, spec_name))
        return data


    def _extract_data(self, json, species) -> list[schemas.PET]:
        "format each page of results"
        data = []
        for pet in json.get('results'):
            pet_output = {
                "name": pet.get('title'),
                "pic": f"{self.url}{pet.get('field_pet_image_1', '')}",
                "age": f"{pet.get('field_age_year', '0')} and {pet.get('field_age_month', '0')} month(s)",
                "breed": pet.get("field_breed", ''),
                "species": species,
                "color": pet.get('field_pet_colour', ''),
                "sex": pet.get('field_pet_sex', ''),
                "location": pet.get('field_centre', ''),
                "url": f"{self.url}{pet.get('view_node')}",
                # not available without further scraping
                "description": "",
                "contact": "",
            }
            data.append(pet_output)
        return data


# TODO: define a scraper driver that runs all the scrapers (prep for db)
