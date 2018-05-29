import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    
    state = {
        deadline: 'December 25, 2018',
        newDeadline: ''
    }

    changeDeadline = () => {
        this.setState({deadline: this.state.newDeadline});
    };

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock />
                <div>
                    <input 
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={this.changeDeadline}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default App;

/*  state 
{deadline: "December 25, 2018", newDeadline: "November 25 2020"}
deadline: "December 25, 2018"newDeadline: "November 25 2020"__proto__: Object 
*/
