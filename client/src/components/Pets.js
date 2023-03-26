import styled from "styled-components";
import { useContext } from "react";

import vector from "./assets/pets/Vector.png";

import { PetsContext } from "../contexts/PetsContext";

import Search from "./Search";
import Pet from "./Pet";
import { useState } from "react";

const Pets = () => {
  const { pets } = useContext(PetsContext);
  const [selectedSearchValue, setSelectedSearchValue] = useState([]);

  return (
    <Background>
      <Vector src={vector} />
      <Search pets={pets} handleSelect={(res) => setSelectedSearchValue(res)}/>
      <Results>
      {//TO DO: Add pagination and remove filter here:
      selectedSearchValue.length > 0 
      ? pets
        .filter(pet => pet.breed === selectedSearchValue)
        .filter((e,i) => i < 50)
        .map(pet => (
            <Pet species={pet.species} name={pet.name} age={pet.age} breed={pet.breed} image={pet.pic} url={pet.url} />
        ))
      : pets.filter((e,i) => i < 50)
      .map(pet => (
          <Pet species={pet.species} name={pet.name} age={pet.age} breed={pet.breed} image={pet.pic} url={pet.url} />
      ))
      }
      </Results>
    </Background>
  );
};

// CONTAINER STYLE
const Background = styled.div`
  font-family: "Inter", sans-serif;
`;
const Results = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 200px;
`
// VECTOR BACKGROUND
const Vector = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 40%;
`;
export default Pets;
