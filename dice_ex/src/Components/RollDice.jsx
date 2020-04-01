import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            die1Number: 1,
            die2Number: 1,
        };
    }

    roll() {
        // Roll from 1 - 6, two separate versions must be made to make 
        // the dices have a randomizer function independent of each other
        let dieRandomizer = Math.floor(Math.random() * 6) + 1;
        let dieRandomizer2 = Math.floor(Math.random() * 6) + 1;
        this.setState({ 
            die1Number : dieRandomizer,
            die2Number : dieRandomizer2,
        });
    }

    render() { 
        let die1;

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

        let die2;

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
                <Die 
                dice1 = {die1}
                dice2 = {die2}
                /* Temporary placeholder to see what's going on */
                dice1Num = {this.state.die1Number}
                dice2Num = {this.state.die2Number}
                rollButton = {<button onClick={this.roll.bind(this)}>Roll Dice!</button>}
                />
            </div>
        );
    }
}
 
export default RollDice;