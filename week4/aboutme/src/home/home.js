import React, { Component } from 'react';
import Header from '../Header/Header';
import Landingpage from '../Landingpage/Landingpage'

class Home extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <div>This is Home page</div> 
       <Landingpage/>
      </div>
    );
  }
}

export default Home;
