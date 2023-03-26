
# url of site
# info you need to loop thru to get all the data
import requests 
from bs4 import BeautifulSoup

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

    def get_pets(self) -> schemas.GET_PETS:
        data = []
        for spec_name in [spec.value for spec in self.species]:
            # get html
            pets_response = requests.get(f"{self.url}/pet/listing/{spec_name}")
            if pets_response.ok:
                pets_json = pets_response.json()
                # print(pets_json)

                data.extend(self._extract_data(pets_json, spec_name))
            else:
                print(f"{spec_name} didn't work")
            # pass in and get the data we want
            # TODO: scrape and grab data
        return data

    def _extract_data(self, json, species) -> list[schemas.PET]:
        data = []
        for pet in json.get('results'):
            pet_output = {
                "name": pet.get('title'),
                "pic": f"{self.url}/{pet.get('field_pet_image_1', '')}",
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
