import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from "./logo.png";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PodcastHome from './components/PodcastHome';
import FooterComponent from './components/FooterComponent';
import AnimalFarm from './components/AnimalFarm';
import TheShack from './components/TheShack';
import StephenKing from './components/StephenKing';


function App() {
  return (
    <React.Fragment>
   <Header />
      <Switch>
        <Route exact path="/" component= { PodcastHome } />
        <Route path="/animalfarm" component= { AnimalFarm } />
        <Route path="/theshack" component= { TheShack } />
        <Route path="/stephenking" component= { StephenKing } />
      </Switch>
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
