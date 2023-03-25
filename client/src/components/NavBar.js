import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return ( 
    <Bar>
        <Navigation to={"/"}>Home</Navigation>
        <Navigation to={"/about"}>About</Navigation>
        <Navigation to={"/contact-form"}>Contact Us</Navigation>
        <Navigation to={"/pets"}>Search Pets</Navigation>
    </Bar> 
    );
}

const Bar = styled.div`
    display:  flex;
    justify-content: center;
    position: absolute;
    z-index: 100;
    width: 100vw;
    max-height: 100px;
    min-height: 5%;
`

const Navigation = styled(NavLink)`
    padding: 2% 3%;
    color: white;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
`
export default NavBar;