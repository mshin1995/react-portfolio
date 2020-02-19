import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Technology from './components/Technology';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Technology />
    </div>
  );
};

export default App;
