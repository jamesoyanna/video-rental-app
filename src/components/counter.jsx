import React, { Component } from 'react';


export class Counter extends Component {
    state = {
        count:1,

    }
 handleClick(){
     console.log("You click me");
 }
    
    render() {
        
        return (
            <div>
                
         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleClick} className="btn btn-secondary btn-sm">Increment</button>
               
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

   formatCount(){
       const {count} = this.state
       return count === 0 ? "Zero": count;
   }

}

export default Counter;
