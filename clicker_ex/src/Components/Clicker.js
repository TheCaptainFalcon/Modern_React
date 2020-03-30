import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicked: false,
            number: 1
        }
    };
        
    buttonClick() {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        this.setState({number: randomNumber})
    }
    
    render() { 

        return (
            <div>
                <p>Number is {this.state.number} </p>
                <button onClick={this.buttonClick.bind(this)}>Click me</button>
            </div>
          );
    }
}
 
export default Clicker;