import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Offers from './Components/Offers';
import Calculator from './Components/Calculator';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Header />
          <About />
          <Offers />
          <Calculator />
      </div>
    );
  }
}

export default App;
