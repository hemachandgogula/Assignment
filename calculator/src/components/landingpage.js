import React, { Component } from 'react';
// import './landingpage.css';
import Buttonpanel from './Buttonpanel';
import Display from './Display';
export default class Landingpage extends Component {
    constructor(state) {
        var result = 0;
        super(state);
        this.state = {
            fields: {
                total: 0,
                next: '',
                operator: ''
            }
        }
        this.change = this.change.bind(this);
        this.calculate = this.calculate.bind(this);
        this.handleevent = this.handleevent.bind(this);
    }
    change(e) {
        var t = e.target.value;
        var next=this.state.fields.next;
        var operator=this.state.fields.operator;
        this.setState({
            fields: {
                total:t,
                    next: next,
                    operator:operator
            }
        });
        console.log(this.state.fields)
    }
    calculate() {
        var fields = []
        fields["total"] = this.state.fields["total"];
        fields["next"] = this.state.fields["next"];
        fields["operator"] = this.state.fields["operator"];
        if (fields["operator"] === '+') {
            fields["total"] += fields["next"];
            this.result = parseInt(fields["total"]);
        }
        if (fields["operator"] === '-') {
            fields["total"] -= fields["next"];
        }
        if (fields["operator"] === '*') {
            fields["total"] *= fields["next"];
        }
        this.setState({
            fields: fields
        });
        console.log(this.result + "fields");
        // console.log(fields["total"]);
        // console.log(fields["next"]);
        console.log(this.state.fields);
    }
    handleevent(e) {
        var val = e.target.value;
        var total=this.state.fields.total;
        var operator=this.state.fields.operator;
        if (!isNaN(val)) {
            this.setState({
                fields: {
                    total:total,
                    next: val,
                    operator:operator
                }
            })
        }
        else {
            var tot=this.state.fields.total;
            this.setState({
                fields: {
                    total:tot,
                    operator: val,
                    next:tot
                }
            })
        }
        console.log(this.state.fields)
    }
    render() {
        return (
            <div>
                <Display fields={this.state.fields} change={this.change}></Display>
                <Buttonpanel handleevent={this.handleevent} fields={this.state.fields} calculate={this.calculate}></Buttonpanel>
            </div>

        );
    }
}