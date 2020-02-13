import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Technology from './components/Technology';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Technology />
    </div>
  );
};

export default App;
