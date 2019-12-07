import React, { Component } from 'react';


export class Counter extends Component {
    state = {
        count:1
    }
    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
    <button className="btn">Increment</button>
            </React.Fragment>
        );
    }
   formatCount(){
       const {count} = this.state
       return count === 0 ? "Zero": count;
   }

}

export default Counter;
