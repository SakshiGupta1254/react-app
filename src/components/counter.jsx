import React, {Component} from 'react';
import '../css/header.css';

export default class Counter extends Component{
    state={
        count:this.props.value,
        id: this.props.id
        
    };
    // constructor(){
    //     super();
    //     console.log(this);
    //     this.handeleIncrement= this.handeleIncrement.bind(this);
    // }
    handeleIncrement=() => {
        console.log("incremented",this);
        this.setState({count:this.state.count+1})
    }
    render(){
        //console.log(this.props);
        return (
        
        <React.Fragment><h1>{this.calculate()}</h1>
        <div>
        <button onClick={this.handeleIncrement}> b1</button>
        <button onClick={() => this.props.ondelete(this.props.id)}> decrement</button>
        </div>
        </React.Fragment>
        );
    }
    calculate(){
        const {count}=this.state;
        
        return count ===0 ? 'zero' : count;
    }
}