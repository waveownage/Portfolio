import React from 'react';
import './App.css';
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import NavBar from "./components/navBar";
import axios from "axios";
import PortfolioList from "./components/portfolioList"


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/PortfolioList" component={PortfolioList} />
    </div>
  );
};

export default App;
