import styled from "styled-components";

import pets from "../mockdata";
import vector from "./assets/pets/Vector.png";

import Search from "./Search";
import Pet from "./Pet";

const Pets = () => {
  return (
    <Background>
      <Vector src={vector} />
      <Search />
      <Results>
      {
        pets.map(pet => (
            <Pet type={pet.type} name={pet.name} age={pet.age} breed={pet.breed} image={pet.image} contact={pet.contact} />
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
  margin-top: 5%;
`
// VECTOR BACKGROUND
const Vector = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 40%;
`;
export default Pets;
