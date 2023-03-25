import styled from "styled-components";
import {NavLink} from "react-router-dom";

import vectorOne from "./assets/home/VectorOne.png";
import vectorTwo from "./assets/home/VectorTwo.png";
import vectorThree from "./assets/home/VectorThree.png";
import womanDogIllustration from "./assets/home/WomanDogIllustration.png";

const Home = () => {
  return (
    <Background>
      <div>
        <VectorOne src={vectorOne}></VectorOne>
        <VectorTwo src={vectorTwo}></VectorTwo>
        <VectorThree src={vectorThree}></VectorThree>
      </div>
      <Contents>
        <Left>
          <Logo>Adopt Spot</Logo>
          <Illustration src={womanDogIllustration}></Illustration>
        </Left>
        <Desc>
          <div>
            <Title>Find your <span>forever</span></Title>
            <Title>pet <span>today</span></Title>
          </div>
          <div>
            <Subtitle>Help animal homelessness and adopt today.</Subtitle>
          </div>
          <div>
            <Button to={"/pets"}>Search for your forever pet</Button>
          </div>
        </Desc>
      </Contents>
    </Background>
  );
};

// CONTAINER STYLE
const Background = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Contents = styled.div`
  height: 100vh; 
  display: flex;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Desc = styled.div`
  height: 100%;
  width: 50%;
  color: var(--blue-mid);
  padding-top: 250px;

  div {
    padding-bottom:  80px;
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
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 1.5em;
`;

// TEXT STYLE
const Logo = styled.h1`
  color: white;
  font-size: 4em;
  text-align: center;
  position: relative;
  bottom: -130px;
`;
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
  width: 40%;
  height: auto;
  overflow: hidden;
`;
const VectorThree = styled.img`
  position: absolute;
  z-index: -1;
  height: auto;
  width: 50%;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
`;
const Illustration = styled.img`
  position: relative;
  bottom: -110px;
  height: 50em;
  width: 50em;
  align-self: flex-end;
`;

export default Home;
