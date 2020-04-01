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
                <container>
                <div className="Die-1">{this.props.dice1}</div>
                <div className="Die-2">{this.props.dice2}</div>
                </container>
                <div className="Die-button">{this.props.rollButton}</div>
            </div>
        );
    }
}
 
export default Die;