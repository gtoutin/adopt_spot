import styled from "styled-components";
import { NavLink } from "react-router-dom";

import vectorOne from "./assets/about/VectorOne.png";
import vectorTwo from "./assets/about/VectorTwo.png";
import vectorThree from "./assets/about/VectorThree.png";

const About = () => {
  return (
    <Background>
      <div>
        <VectorOne src={vectorOne}></VectorOne>
        <VectorTwo src={vectorTwo}></VectorTwo>
        <VectorThree src={vectorThree}></VectorThree>
      </div>
      <Contents>
        <DescLeft>
          <div>
            <Title>
              Find your <span>forever</span>
            </Title>
            <Title>
              pet <span>today</span>
            </Title>
          </div>
          <div>
            <Subtitle>Help animal homelessness and adopt today.</Subtitle>
          </div>
          <div>
            <Button to={"/pets"}>Search for your forever pet</Button>
          </div>
        </DescLeft>
        <DescRight>
          <div>
            <Title>About Us</Title>
          </div>
          <div>
            <Text>
              Tempor nisi consectetur do ullamco amet. Dolor laboris eiusmod
              adipisicing culpa excepteur pariatur laboris nisi non qui nisi
              ullamco. Sit cillum laboris reprehenderit id excepteur minim elit
              amet ipsum id laboris laboris. Laboris ea ullamco magna mollit
              cillum veniam nulla irure ullamco duis. Consectetur enim dolore
              minim qui velit. Nisi in ipsum consectetur ex Lorem ullamco aliqua
              culpa voluptate.
            </Text>
          </div>
        </DescRight>
      </Contents>
    </Background>
  );
};

// CONTAINER STYLE
const Background = styled.div`
  height: 100%;
  width: 100%;
`;
const Contents = styled.div`
  padding: 300px 0px;
  height: 100vh;
  display: flex;
  overflow: hidden;
  font-family: "Inter", sans-serif;
`;
const DescRight = styled.div`
  padding-left: 150px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  
  div {
    padding-bottom: 80px;
  }
`;
const DescLeft = styled.div`
  padding-left: 150px;
  height: 100%;
  width: 50%;
  color: var(--blue-mid);

  div {
    padding-bottom: 80px;
  }
`;

// BUTTON STYLE
const Button = styled(NavLink)`
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

// TEXT STYLE
const Title = styled.h1`
  font-size: 4em;
  font-weight: lighter;

  span {
    font-weight: bold;
  }
`;
const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 2em;
`;
const Text = styled.p`
  width: 600px;
  font-weight: 400;
  font-size: 1.3em;
  line-height: 1.5em;
`;
// VECTOR BACKGROUND
const VectorOne = styled.img`
  position: absolute;
  z-index: -1;
  left: 30%;
  overflow: hidden;
`;
const VectorTwo = styled.img`
  position: absolute;
  z-index: -1;
  top: 15%;
  right: 0px;
  width: 50%;
  height: 85%;
  overflow: hidden;
`;
const VectorThree = styled.img`
  position: absolute;
  z-index: -1;
  width: 30%;
  left: 0px;
  bottom: 0px;
  overflow: hidden;
`;

export default About;
