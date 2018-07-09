import React, { Component } from 'react';
import './display.css'
export default class Display extends Component {
    constructor(props) {
        super(props);
     
    }
   
    render() {
        return (
            <input id="display"  value={this.props.value} type="text"/>
        );
    }
}