### JSON responses for the API endpoints
from enum import Enum

# this exists so that the schemas can be in the code independently of any class
class schemas(Enum):
    GET_PETS = {
        "results": [
            {
                "age": "",
                "breed": "",
                "color": "",
                "contact": "",
                "description": "",
                "location": "",
                "name": "",
                "pic":"",
                "sex":"",
                "species":"",
                "url":""
            }
        ]
    }
    PET = {
        "age": "",
        "breed": "",
        "color": "",
        "contact": "",
        "description": "",
        "location": "",
        "name": "",
        "pic":"",
        "sex":"",
        "species":"",
        "url":""
    }

# this exists so each scraper can cover a set of animals.
# we shouldn't rely on the string 'cat' to tell if 2 scrapers have an animal in common
class animals(Enum):
    CAT = 'cat'
    DOG = 'dog'
    DEGU = 'degu'
    HAMSTER = 'hamster'
    HORSE = 'horse'
    RABBIT = 'rabbit'
    RAT = 'rat'
    GUINEA_PIG = 'guinea-pig'
    GERBIL = 'gerbil'
    MOUSE = 'mouse'
    CHINCHILLA = 'chinchilla'