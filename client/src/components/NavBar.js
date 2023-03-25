import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return ( 
    <Bar>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/contact-form"}>Contact Us</NavLink>
        <NavLink to={"/pets"}>Search Pets</NavLink>
    </Bar> 
    );
}

const Bar = styled.div`
    width: 100vw;
    height: 5%;
    min-height: 100px;
  	border: 1px solid red;
`

export default NavBar;