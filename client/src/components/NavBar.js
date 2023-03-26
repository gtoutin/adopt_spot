import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MediaQuery from 'react-responsive';
import React, { useState } from 'react';

import womanDogIllustration from "./assets/home/WomanDogIllustration.png";



const NavBar = () => {
    const [mobileNav, setMobileNav] = useState('none');
    const toggleMenuMobile = () =>
    {
        NavMenuMobile.display = 'block';
    }

    return (
        <div>
        <MediaQuery minWidth={320} maxWidth={400}>
            <BurgerMenuMobile>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </BurgerMenuMobile>

            <NavMenuMobile>
                <X> X </X>
                <MobileNavContainer>
                    <Logo src={womanDogIllustration}></Logo>
                    <h1> Adopt Spot </h1>
                    <NavigationMobile to={"/"}>Home</NavigationMobile>
                    <NavigationMobile to={"/about"}>About</NavigationMobile>
                    <NavigationMobile to={"/contact-form"}>Contact Us</NavigationMobile>
                    <NavigationMobile to={"/pets"}>Search Pets</NavigationMobile>
                </MobileNavContainer>
            </NavMenuMobile>

        </MediaQuery>

        <MediaQuery minWidth={1025}>
            <Bar>
                <Navigation to={"/"}>Home</Navigation>
                <Navigation to={"/about"}>About</Navigation>
                <Navigation to={"/contact-form"}>Contact Us</Navigation>
                <Navigation to={"/pets"}>Search Pets</Navigation>
            </Bar> 
        </MediaQuery>
    </div>
    );
}

const BurgerMenuMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 1rem;
    maxWidth: 80%;
`;
const Line = styled.div`
    border-bottom: 3px solid white;
    width: 2rem;
    margin-bottom: 0.4rem;
`;
const MobileNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const NavigationMobile = styled(NavLink)`
    display: flex;
    color: black;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    margin-top: 3rem;
`
const Logo = styled.img`
    width: 5rem;
    height: 5rem;
    margin: 1rem;
`;
const X = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: end;
    font-size: 2rem;
    font-family: 'Inter', sans-serif;
`;
const NavMenuMobile = styled.div`
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border: 1px solid black;
    display: none;
`;

const Bar = styled.div`
    display:  flex;
    justify-content: center;
    position: absolute;
    z-index: 100;
    width: 100vw;
    max-height: 100px;
    min-height: 5%;
`;
const Navigation = styled(NavLink)`
    padding: 2% 3%;
    color: white;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
`
export default NavBar;