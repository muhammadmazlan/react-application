import React, { Component } from 'react'

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            dateTime: new Date(),
        };
    }
    componentDidMount(){
        setInterval (() => {
            this.setState({
                dateTime: new Date(),
            });
        }, 1000);
    }

    render() {
        return (
        <div>{this.state.dateTime.toLocaleTimeString()}</div>
        )
    }
}

