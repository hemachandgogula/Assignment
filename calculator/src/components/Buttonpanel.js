import React, { Component } from 'react';
import Button from './Button';
export default class Buttonpanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    } 
    render() {
        return (
            <div>
                <div>
                    <Button handlebtn={this.props.handleevent} btn="AC" ></Button>
                    <Button handlebtn={this.props.handleevent} btn="+/-" ></Button>
                    <Button handlebtn={this.props.handleevent} btn="%" ></Button>
                    <Button handlebtn={this.props.handleevent} btn="/" ></Button>
                </div>
                <div>
                    <Button handlebtn={this.props.handleevent} btn="7"></Button>
                    <Button handlebtn={this.props.handleevent} btn="8"></Button>
                    <Button handlebtn={this.props.handleevent} btn="9"></Button>
                    <Button handlebtn={this.props.handleevent} btn="*"></Button>
                </div>
                <div>
                    <Button handlebtn={this.props.handleevent} btn="4"></Button>
                    <Button handlebtn={this.props.handleevent} btn="5"></Button>
                    <Button handlebtn={this.props.handleevent} btn="6"></Button>
                    <Button handlebtn={this.props.handleevent} btn="-"></Button>
                </div>
                <div>
                    <Button handlebtn={this.props.handleevent} btn="1"></Button>
                    <Button handlebtn={this.props.handleevent} btn="2"></Button>
                    <Button handlebtn={this.props.handleevent} btn="3"></Button>
                    <Button handlebtn={this.props.handleevent} btn="+"></Button>
                </div>
                <div>
                    <Button handlebtn={this.props.handleevent} btn="0"></Button>
                    <Button handlebtn={this.props.handleevent} btn="."></Button>
                    <Button handlebtn={this.props.calculate} btn="="></Button>
                </div>
            </div>
        );
    }
}