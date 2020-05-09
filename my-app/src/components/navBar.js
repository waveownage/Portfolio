import styled from "styled-components";
import React from "react";
import { Route, Link } from "react-router-dom";


export default function NavBar() {
    const StyledNav = styled.nav`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
        font-size: 2.0rem;
        justify-content: space-around;
        `;
        return(
    <StyledNav>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/PortfolioList">Portfolio</Link>
    </StyledNav>
    )
}