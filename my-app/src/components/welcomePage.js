import styled from "styled-components";
import React from "react";
import headshot from "../images/headshot.png"


export default function WelcomePage() {

const StyledImg = styled.img`
height: 50%;
width: 50%;
`
const StyledHeader = styled.header`
display: flex;
flex-direction: row;
padding: 2%;

`
    return(
        <StyledHeader className="App-header">
        <div className="intro">
        <h2>Hello! My name is Andre Freeman</h2>
        <h1>I am a Software Engineer</h1>
        <p>Full Stack Web Developer Student at Lambda School. My skills include designing and creating websites, apps, and more...</p>
        </div>
        <StyledImg src={headshot} alt="Logo" />
        </StyledHeader>
    )
}