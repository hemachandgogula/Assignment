import React,{Component} from 'react';
export default class Button extends Component{
        constructor(props)
        {
            super(props);
            this.state={
                btn:this.props.btn
            }
        }   
        // handlebtn(e){
        //     let num= e.target.value;
        //     console.log(num);
        // }
    render()
        {
            return(
                <input type="button" value={this.state.btn} onClick={this.props.handlebtn} />
            );
        }
}