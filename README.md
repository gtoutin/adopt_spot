# adopt_spot
🐶🐱

## Backend REST API Docs

### Get page of pets
#### `/pets`
{
    results: [
        specific pets as defined below
    ],
    
}

### Get a specific pet
#### `/pet/{id}`
```
{
    "id": str,
    "name": str,
    "contact": {
        "info": str,
        "link": str
    }
    ...
}
```
- name
- contact
    - link to website  
- pic
- age
- breed
- type of animal
- description

### scrapers plan
- do smallest 1st
merge it
use in frontend
work on other scrapers meanwhile
database stuff