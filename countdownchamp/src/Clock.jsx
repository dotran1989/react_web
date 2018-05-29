import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        console.log('this.props', this.props);
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time', time);
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds);
    }

    render() {
        this.getTimeUntil(this.props.deadline);

        return (
            <div>
                <div className="Clock-days">{this.state.days} days</div>
                <div className="Clock-hours">{this.state.hours} hours</div>
                <div className="Clock-minutes">{this.state.minutes} minutes</div>
                <div className="Clock-seconds">{this.state.seconds} seconds</div>
            </div>
        );
    }
}

export default Clock;

/* 
this.props {deadline: "December 25, 2018"}
deadline: "December 25, 2018"
__proto__: Object 
*/

// days 209 hours 7 minutes 24 seconds 54

