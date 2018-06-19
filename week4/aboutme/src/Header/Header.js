import React,{Component} from 'react';
import App from '../App';
import Home from '../home/home';
class Header extends Component {
    render() {
      return (
        <nav>
            {/* <router> */}
            <a href="../App">Aboutme</a>
            <a href="../home/home">Home</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            {/* <router> */}
        </nav>
      );
    }
  }
  export default Header;