import React, { Component } from 'react';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            die1Number: 1,
            die2Number: 1,
        };
    }

    roll() {
        // Roll from 1 - 6
        let dieRandomizer = Math.floor(Math.random() * 6) + 1;
        this.setState({ 
            die1Number : dieRandomizer,
            die2Number : dieRandomizer,
        });
    }

    render() { 
        let die1;
        let die2;

        if (this.state.die1Number === 1) {
            die1 = <i className="fas fa-dice-one"></i>
        } if (this.state.die1Number === 2) {
            die1 = <i className="fas fa-dice-two"></i>
        } if (this.state.die1Number === 3) {
            die1 = <i className="fas fa-dice-three"></i> 
        } if (this.state.die1Number === 4) {
            die1 = <i className="fas fa-dice-four"></i> 
        } if (this.state.die1Number === 5) {
            die1 = <i className="fas fa-dice-five"></i> 
        } if (this.state.die1Number === 6) {
            die1 = <i className="fas fa-dice-six"></i> 
        };

        if (this.state.die2Number === 1) {
            die2 = <i className="fas fa-dice-one"></i>
        } if (this.state.die2Number === 2) {
            die2 = <i className="fas fa-dice-two"></i>
        } if (this.state.die2Number === 3) {
            die2 = <i className="fas fa-dice-three"></i> 
        } if (this.state.die2Number === 4) {
            die2 = <i className="fas fa-dice-four"></i> 
        } if (this.state.die2Number === 5) {
            die2 = <i className="fas fa-dice-five"></i> 
        } if (this.state.die2Number === 6) {
            die2 = <i className="fas fa-dice-six"></i> 
        };

        return (  
            <div className="RollDice">
                <div className="RollDice-1">{die1}</div>
                <div className="RollDice-2">{die2}</div>
                <br/>
                {/* Temporary placeholder to see what's going on */}
                <p>Die #1 is {this.state.die1Number}</p>
                <p>Die #2 is {this.state.die2Number}</p>
                <button onClick={this.roll.bind(this)}>Roll Dice!</button>
            </div>
        );
    }
}
 
export default RollDice;