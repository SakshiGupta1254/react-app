import React, { Component } from 'react';
import Counter from './counter';
import ReactDOM from 'react-dom';
class Counters extends Component {
    state = { 
        counters:[{id:1,value:1},
            {id:2,value:2},
            {id:3,value:3},
            {id:4,value:4},
            {id:5,value:5}]
     }
     handleDecrement= counterId => {
        console.log("decremented",counterId);
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({counters});
    }
    render() { 
        
        return ( <div>{this.state.counters.map(counters =><Counter key={counters.id} id={counters.id} value={counters.value} selected={true} ondelete={this.handleDecrement}/>)}
        </div> );
    }
}
 
export default Counters;