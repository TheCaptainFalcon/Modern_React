import React, { Component } from 'react';
import './App.css';
import Pokecard from './Components/Pokecard';
import Pokedex from './Components/Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard 
          id={4}
          name="Charmander"
          type="fire"
          exp={62}
        />
        <Pokedex/>
      </div>
    );
  }
}
    
  export default App;