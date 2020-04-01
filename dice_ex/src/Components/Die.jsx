import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = {    
        }
    }
    render() { 
        return (  
            <div className="Die">
                <div className="Die-1">{this.props.dice1}</div>
                <div className="Die-2">{this.props.dice2}</div>
                {/* Temporary Placeholder to see dice number rolls */}
                <div>Dice #1 is: {this.props.dice1Num}</div>
                <div>Dice #2 is: {this.props.dice2Num}</div>
                <div className="Die-button">{this.props.rollButton}</div>
            </div>
        );
    }
}
 
export default Die;