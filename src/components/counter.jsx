import React, { Component } from 'react';


export class Counter extends Component {
    state = {
        count:1,
        imgUrl: "https://media.gettyimages.com/photos/tokyo-skyscrapper-at-night-picture-id1165888881?s=612x612"
    }
    render() {
        return (
            <div>
                <img src={this.state.imgUrl} alt=""/>
                <span>{this.formatCount()}</span>
    <button className="btn">Increment</button>
            </div>
        );
    }
   formatCount(){
       const {count} = this.state
       return count === 0 ? "Zero": count;
   }

}

export default Counter;
