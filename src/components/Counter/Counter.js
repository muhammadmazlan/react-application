import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        counter: 0
    };
    
    constructor(){
        super();
        this.addToCounter = this.addToCounter.bind(this);
        this.minusToCounter = this.minusToCounter.bind(this);
    }

    incrementCounter(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    decrementCounter(){
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    addToCounter(){
        console.log('Adding Counter!!');
        this.incrementCounter();
    };

    minusToCounter(){
        console.log('Minus Counter!!');
        this.decrementCounter();
    };

    render() {
        return (
            <div>
                <p>Counter ({this.state.counter})</p>
                <button type="button" onClick={this.addToCounter}>+</button>
                <button type="button" onClick={this.minusToCounter}>-</button>
            </div>
        )
    }
}
