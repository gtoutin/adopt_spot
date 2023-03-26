### JSON responses for the API endpoints
from enum import Enum

class schemas(Enum):
    GET_PETS = {
        ...
    }
    PET = {
        ...
    }

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