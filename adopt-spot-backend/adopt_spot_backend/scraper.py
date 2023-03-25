
# url of site
# info you need to loop thru to get all the data
# 

from .models import schemas

## generic scraper class that can be extended and specialized per website
class Scraper:
    def __init__(self, url) -> None:
        self.url = url

    def get_pets() -> schemas.GET_PETS:
        ...
    
    def get_pet_id(pet_id) -> schemas.GET_PET_ID:
        ...

# TODO: define a scraper driver that runs all the scrapers (prep for db)
