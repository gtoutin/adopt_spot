# adopt_spot
🐶🐱

## Backend REST API Docs

### Get page of pets
#### `/pets`
```json
{
    "results": [
        {
            "age":"10 and 1 month(s)",
            "breed": "",
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
    ],
}
```

## Running the backend Flask API
See the README in adopt-spot-backend for more info.
### With docker
- Ensure that docker is installed (docker desktop works)
- `cd adopt-spot-backend`
- `make build-docker`
- `make run-docker`
- By default, the API is exposed on localhost:8000. Call it with
  
  `curl localhost:8000/pets`
### Without docker
- Install [poetry](https://python-poetry.org/)
- `cd adopt-spot-backend`
- `make start-api`
- `curl localhost:8000/pets`

<!-- ### Get a specific pet
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
    "url":"https://www.bluecross.org.uk/pet/duke-1138958",
},
``` -->


### Run FE Server
<!-- 
    yarn install
    yarn start
    [05:32]
    If you need to install yarn :
    npm install --global yarn 
-->

### Using react-responsive 
- Download here or use yarn install
- `https://www.npmjs.com/package/react-responsive`
