import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pet = ({ species, name, age, breed, image, url }) => {
  const [button, setButton] = useState("hidden");
  const [opacity, setOpacity] = useState(1);

  return (
    <Card
      to={url}
      target="_blank"
      onMouseEnter={() => {
        setButton("visible");
        setOpacity(0.5);
      }}
      onMouseLeave={() => {
        setButton("hidden");
        setOpacity(1);
      }}
    >
      <Contents opacity={opacity}>
        <Button button={button}>Learn more</Button>
        <Image src={image} />
      </Contents>
        <Desc>
          <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Breed: {breed}</p>
          </div>
          <p>Animal Type: {species}</p>
        </Desc>
        <p>About the animal?</p>
        <p>Some useful information about the animal here.</p>
    </Card>
  );
};

const Card = styled(Link)`
  place-self: center;
  max-width: 400px;
  margin: 5% 10%;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #2870a1;

  text-decoration: none;
  font-family: "Inter", sans-serif;
  color: var(--blue-light);

  p {
    padding: 10px;
  }
`;
const Contents = styled.div`
  opacity: ${props => props.opacity};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Desc = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  border-radius: 15px;
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
const Button = styled.div`
  position: absolute;
  z-index: 100;

  visibility: ${(props) => props.button};
  border-radius: 20px;
  padding: 10px 40px;
  color: white;
  background-color: var(--blue-mid);
  box-shadow: inset 1px 0px 10px grey;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
`;
export default Pet;
