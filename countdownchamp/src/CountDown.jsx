import React, { Component } from 'react';
import './App.css';

class CountDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsRemaining: this.props.amountOfTime,
            timerId: 0
        };
        console.log('this.props', this.props);
        console.log('this.state.secondsRemaining', this.state.secondsRemaining);
    }

    componentWillMount() {
        this.countDown(this.state.secondsRemaining);
    }

    componentDidMount() {
        this.clockTimer();
    }

    stopTimer(timerId) {
        clearInterval(timerId);
    }

    clockTimer() {
        const timerId = setInterval(() => this.countDown(this.state.secondsRemaining), 1000);
        this.setState({timerId: timerId});
    }

    countDown(seconds) {
        const {secondRemaining, timerId} = this.state;

        if (secondRemaining > 0) {
            this.setState({secondRemaining: seconds - 1});
        } else {
            alert('time is up!');
            this.stopTimer(timerId);
        }
    }

    render() {
        return (
            <div>
                <div className="Clock-seconds">{this.state.secondsRemaining} seconds</div>
            </div>
        );
    }
}

export default CountDown;