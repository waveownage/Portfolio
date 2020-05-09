import styled from "styled-components";
import React from "react";

const StyledNav = styled.nav`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 2.0rem;
        justify-content: space-around;
        `;

export default function PortfolioList() {
    return(
    <div className= "PortfolioDiv">
        <h1>Welcome To My Portfolio</h1>
        <StyledNav>
            <a href="https://gigapets-andre.netlify.app/">GigaPets</a> |
            <a href="/css/">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/jquery/">jQuery</a>
        </StyledNav>
    </div>
    )
}