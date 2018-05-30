import React, { Component } from 'react';
import Clock from './Clock';
import CountDown from './CountDown';
import './App.css';

class App extends Component {
    
    state = {
        deadline: 'December 25, 2018',
        newDeadline: '',
        amountOfTime: 3,
        newAmountOfTime: 0
    }

    changeDeadline = () => {
        this.setState({deadline: this.state.newDeadline});
    };

    countDownClick = () => {
        this.setState({amountOfTime: this.state.newAmountOfTime});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <div>
                    <input 
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={this.changeDeadline}>
                        Submit
                    </button>
                </div>
                <div className="Challenges">-------Challenges-------</div>
                <div>
                    <input 
                        placeholder="Amount of time"
                        onChange={event => this.setState({newAmountOfTime: event.target.value})}
                    />
                    <button
                        onClick={this.countDownClick}
                    >
                        Count Down
                    </button>
                </div>
                <CountDown
                    amountOfTime={this.state.amountOfTime}
                />
            </div>
        );
    }
}

export default App;

/*  state 
{deadline: "December 25, 2018", newDeadline: "November 25 2020"}
deadline: "December 25, 2018"newDeadline: "November 25 2020"__proto__: Object 
*/
