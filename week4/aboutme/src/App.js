import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Landingpage from './Landingpage/Landingpage';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Landingpage/>
      </div>
    );
  }
}

export default App;
