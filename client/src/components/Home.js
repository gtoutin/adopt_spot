import styled from "styled-components";
import {NavLink} from "react-router-dom";
import MediaQuery from 'react-responsive';

import vectorOne from "./assets/home/VectorOne.png";
import vectorTwo from "./assets/home/VectorTwo.png";
import vectorThree from "./assets/home/VectorThree.png";
import womanDogIllustration from "./assets/home/WomanDogIllustration.png";

const Home = () => {
  return (
    <div>
      <MediaQuery minWidth={320} maxWidth={400}>
        <Flex>
          <Background>
            <div>
              <VectorOneMobile src={vectorOne}></VectorOneMobile>
              <VectorTwoMobile src={vectorTwo}></VectorTwoMobile>
              <LogoMobile>Adopt Spot</LogoMobile>
              <IllustrationMobile src={womanDogIllustration}></IllustrationMobile>
            </div>
            <Contents>
              <DescMobile>
                <div>
                  <TitleMobile>Find your <span>forever</span></TitleMobile>
                  <TitleMobile>pet <span>today</span></TitleMobile>
                </div>
                <div>
                  <SubtitleMobile>Help animal homelessness and adopt today.</SubtitleMobile>
                </div>
                <div>
                  <ButtonMobile to={"/pets"}>Search pets</ButtonMobile>
              </div>
              </DescMobile>
            </Contents>
          </Background>
        </Flex>
      </MediaQuery>


        <Flex>
        <Background>
          <div>
            <VectorOneMonitor src={vectorOne}></VectorOneMonitor>
            <VectorTwoMonitor src={vectorTwo}></VectorTwoMonitor>
            <VectorThreeMonitor src={vectorThree}></VectorThreeMonitor>
          </div>
          <Contents>
            <Left>
              <LogoMonitor>Adopt Spot</LogoMonitor>
              <IllustrationMonitor src={womanDogIllustration}></IllustrationMonitor>
            </Left>
            <DescMonitor>
              <div>
                <TitleMonitor>Find your <span>forever</span></TitleMonitor>
                <TitleMonitor>pet <span>today</span></TitleMonitor>
              </div>
              <div>
                <SubtitleMonitor>Help animal homelessness and adopt today.</SubtitleMonitor>
              </div>
              <div>
                <ButtonMonitor to={"/pets"}>Search for your forever pet</ButtonMonitor>
              </div>
            </DescMonitor>
          </Contents>
        </Background>
        </Flex>
    </div>
  );
};

// CONTAINER STYLE GLOBAL
const Background = styled.div`
  height: 100%;
  width: 100%;
`;
const Contents = styled.div`
  display: flex;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  margin: 1rem;
`;
// FLEX LAYOUT 
const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

// MONITORS
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const DescMonitor = styled.div`
  height: 100%;
  width: 50%;
  color: var(--blue-mid);
  padding-top: 250px;

  div {
    padding-bottom:  80px;
  }
`;

// BUTTON STYLE
const ButtonMonitor = styled(NavLink)`
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
const LogoMonitor = styled.h1`
  color: white;
  font-size: 4em;
  text-align: center;
  position: relative;
  bottom: -190px;
  left: -6rem;
`;
const TitleMonitor = styled.h1`
  font-size: 4em;
  font-weight: lighter;

  span {
    font-weight: bold;
  }
`;
const SubtitleMonitor = styled.h2`
  font-weight: 400;
  font-size: 2em;
`;

// VECTOR BACKGROUND
const VectorOneMonitor = styled.img`
  position: absolute;
  z-index: -1;
  left: 30%;
  overflow: hidden;
`;
const VectorTwoMonitor = styled.img`
  position: absolute;
  z-index: -1;
  top: 15%;
  width: 40%;
  height: auto;
  overflow: hidden;
`;
const VectorThreeMonitor = styled.img`
  position: absolute;
  z-index: -1;
  height: 80%;
  width: 50%;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
`;
const IllustrationMonitor = styled.img`
  position: relative;
  bottom: -140px;
  left: -4rem;
  height: 50rem;
  width: 50rem;
  align-self: flex-end;
`;

//MOBILES
// VECTOR BACKGROUND
const VectorOneMobile = styled.img`
  position: absolute;
  z-index: -1;
  width: 30rem;
  height: 10rem;
  top: -2rem;
  left: -1rem;
`;

const VectorTwoMobile = styled.img`
  position: absolute;
  z-index: -1;
  width: 42rem;
  height: 25rem;
  margin-top: 8rem;
  overflow: hidden;
  left: -10rem;
  transform: rotate(4deg);
`;
const IllustrationMobile = styled.img`
  position: relative;
  height: 35rem;
  width: 35rem;
  top: 140px;
  left: -5rem;
`;
const LogoMobile = styled.h1`
  color: white;
  font-size: 2em;
  text-align: center;
  position: relative;
  top: 190px;
`;

const DescMobile = styled.div`
  width: 100%;
  color: var(--blue-mid);
  padding-top: 5rem;
  border: 1px solid red;
`;
const TitleMobile = styled.h1`
  font-size: 2rem;
  font-weight: lighter;

  span {
    font-weight: bold;
  }
`;
const SubtitleMobile = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;
const ButtonMobile = styled(NavLink)`
  border-radius: 20px;
  padding: 10px 40px;
  color: white;
  background-color: var(--blue-mid);
  box-shadow: inset 1px 0px 10px grey;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 1rem;
`;


export default Home;
