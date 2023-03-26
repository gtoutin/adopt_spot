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
    "age":"10 and 1 month(s)",
    "breed":null,
    "color":"Tan",
    "contact":"",
    "description":"",
    "location":"West Midlands: Bromsgrove rehoming centre",
    "name":"Duke",
    "pic":"https://www.bluecross.org.uk//sites/default/files/d8/722322.jpg",
    "sex":"Male",
    "species":"dog",
    "url":"https://www.bluecross.org.uk/pet/duke-1138958"
   },
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