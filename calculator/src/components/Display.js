import React, { Component } from 'react';
export default class Display extends Component {
    constructor(props) {
        super(props);
     
    }
   
    render() {
        return (
            <input  value={this.props.value} type="text" onChange={this.props.change} />
        );
    }
}