import React, { Component } from 'react';


export class Counter extends Component {
    state = {
        count:1
    }
    render() {
        return (
            <React.Fragment>
                <span>{     this.state.count}</span>
    <button className="btn">Increment</button>
            </React.Fragment>
        );
    }
   formaCount(){
       const {count} = this.state
       return count === 0 ? "Zero": count;
   }

}

export default Counter;
