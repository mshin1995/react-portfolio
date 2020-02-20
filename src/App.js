import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Gameup from './modals/Gameup';
import Dinodash from './modals/Dinodash';
import Petmatchr from './modals/Petmatchr';
import Nba from './modals/Nba';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Technology />
      <Contact />
      <Gameup />
      <Dinodash />
      <Petmatchr />
      <Nba />
    </div>
  );
};

export default App;
