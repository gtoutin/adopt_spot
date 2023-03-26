
# url of site
# info you need to loop thru to get all the data
import asyncio
import json

import requests 
from bs4 import BeautifulSoup
import aiohttp

from .models import schemas, animals





## generic scraper class that can be extended and specialized per website
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
        self.url = "https://www.bluecross.org.uk"
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

    # async def _handle_data_fetching(self, url, spec_name):
    #     """Returns response json and ok bool"""
    #     print(f"fetching {spec_name}")

    #     async with aiohttp.ClientSession() as session:
    #         async with session.get(url) as pets_response:
    #             # pets_json = await pets_response.json()

    #             # pets_response = await requests.get(url).json()
    #             print(f"fetched {spec_name}")
    #             if pets_response.ok:
    #                 pets_json = await pets_response.json()
    #                 return self._extract_pets_data(pets_json, spec_name)
    #             else:
    #                 print(f"{url} didn't work")
    #                 return []

    async def fetch(self, session, url):
        print(f"fetching {url}")
        async with session.get(url) as response:
            if response.ok:
                output = await response.json()
                print(f"fetched {url}")
                return output

    async def get_pets(self) -> schemas.GET_PETS:
        data = []
        tasks = []

        async with aiohttp.ClientSession() as session:
            for spec_name in [spec.value for spec in self.species]:
                task = asyncio.create_task(self.fetch(session, f"{self.url}/pet/listing/{spec_name}"))
                tasks.append(task)
            results = await asyncio.gather(*tasks)
            for spec_name, spec_data in zip([spec.value for spec in self.species], results):
                data.extend(self._extract_data(spec_data, spec_name))
                # data = 
        return data


    def _extract_data(self, json, species) -> list[schemas.PET]:
        data = []
        for pet in json.get('results'):
            pet_output = {
                "name": pet.get('title'),
                "pic": f"{self.url}{pet.get('field_pet_image_1', '')}",
                "age": f"{pet.get('field_age_year', '0')} and {pet.get('field_age_month', '0')} month(s)",
                "breed": pet.get("breed"),
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
            # still need description, id
        

        # soup = BeautifulSoup(json, "html.parser")
        # pets are stored in a div w class "grid grid-cols-1 sm:grid-cols-3 gap-2"
        # pets_div = soup.find('div', class_="grid grid-cols-1 sm:grid-cols-3 gap-2")
        # for animal in there, grab its info
        return data


# TODO: define a scraper driver that runs all the scrapers (prep for db)
