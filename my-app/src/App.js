import React from 'react';
import './App.css';
import headshot from './images/headshot.png'
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const StyledNav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
height: 20vh;
font-size: 2.0rem;
justify-content: space-around;
`;

const StyledImg = styled.img`
height: 50%;
width: 50%;
`
const StyledHeader = styled.header`
display: flex;
flex-direction: row;
padding: 2%;

`

function App() {
  return (
    <div className="App">
      <StyledNav>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/Projects">Projects</Link>
      </StyledNav>
      <StyledHeader className="App-header">
      <div className="intro">
      <h2>Hello! My name is Andre Freeman</h2>
      <h1>I am a Software Engineer</h1>
      <p>I am a Full Stack Web Developer Student at Lambda School. My skills include designing and creating websites, apps, and more...</p>
      </div>
        <StyledImg src={headshot} alt="Logo" />
      </StyledHeader>
    </div>
  );
}

export default App;
