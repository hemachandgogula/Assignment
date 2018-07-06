import React,{Component} from 'react';
import App from '../App';
import {BrowserRouter} from 'react-router-dom';
import Home from '../home/home';
class Header extends Component {
    render() {
      return (
        <nav>
            <Router>
            < Link path="../App">Aboutme</Link>
            < Link path="../home/home">Home</Link>
            {/* < Link path="#">GitHub</Link> */}
            {/* <Link path="#">Twitter</Link> */}
            </Router>
        </nav>
      );
    }
  }
  export default Header;