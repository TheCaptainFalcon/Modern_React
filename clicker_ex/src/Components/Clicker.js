import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 1
        }
    };
        
    buttonClick() {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        this.setState({ number: randomNumber });
    }
    
    render() { 

        return (
            <div>
                <h3> Number is {this.state.number} </h3>
                <h2> {this.state.number === 7? 'You Win!' : <button onClick={this.buttonClick.bind(this)}>Click me</button>} </h2>
            </div>
          );
    }
}
 
export default Clicker;