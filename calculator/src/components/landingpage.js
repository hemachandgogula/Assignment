import React, { Component } from 'react';
import './main.css';
import Buttonpanel from './Buttonpanel';
import Display from './Display';
export default class Landingpage extends Component {
    constructor(state) {
        super(state);
        this.state = {
            fields: {
                total: 0,
                next: 0,
                operator: ''
            }
        }
        this.calculate = this.calculate.bind(this);
        this.handleevent = this.handleevent.bind(this);
    }
    calculate() {
        var total = parseInt(this.state.fields.total);
        var next = parseInt(this.state.fields.next);
        var operator = this.state.fields.operator;
        if (operator === '+') {
            total = parseInt(total + next);
        }
        if (operator === '%') {
            total = parseInt(total % next);
        }
        if (operator === '/') {
            total = parseInt(total / next);
        }
        if (operator === '-') {
            total = parseInt(total - next);
        }
        if (operator === '*') {
            total = parseInt(total * next);
        }
        next = 0;
        this.setState({
            fields: {
                total: total,
                operator: operator,
                next: next
            }
        });
        console.log(this.state.fields);
    }
    handleevent(e) {
        var val = e.target.value;
        var total = this.state.fields.total;
        var nex = this.state.fields.next;
        var operator = this.state.fields.operator;
        if (val === 'AC') {
            console.log("here we go")
            total = 0;
            operator = '';
            nex = 0;
            this.setState({
                fields: {
                    total: total,
                    operator: operator,
                    next: nex
                }
            })
        }
        else if (val === '+/-') {
            if (total) {
                total = -(total);
            }
            if (nex) {
                nex = -(nex);
            }
            this.setState({
                fields: {
                    total: total,
                    operator: operator,
                    next: nex
                }
            })
        }
        else if (val === '.') {
            total += val;
            nex += val;
            this.setState({
                fields: {
                    total: total,
                    operator: operator,
                    next: nex
                }
            })
        }
        else if (val >= 0 && val <= 9) {
            operator
            if (!operator) {
                if (total) {
                    total += val;
                    if (nex)
                        nex += val;
                    else
                        nex = val;
                }
                else {
                    total = val;
                    nex = total;
                }
            }
            else {
                if (nex)
                    nex += val;
                else
                    nex = val;
            }
            this.setState({
                fields: {
                    total: total,
                    next: nex,
                    operator: operator
                }
            })
        }
        else {
            nex = 0;
            this.setState({
                fields: {
                    total: total,
                    operator: val,
                    next: nex
                }
            })
        }
        console.log(this.state.fields)
    }
    render() {
        return (
            <div id="container">
                <Display value={this.state.fields.next || this.state.fields.total || "0"} fields={this.state.fields} ></Display>
                <Buttonpanel handleevent={this.handleevent} fields={this.state.fields} calculate={this.calculate}></Buttonpanel>
            </div>

        );
    }
}