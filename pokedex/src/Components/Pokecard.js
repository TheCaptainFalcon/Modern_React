import React, { Component } from 'react';
import './Pokecard.css';

const pokemon = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/';


class Pokecard extends Component {
    render() {
        let pokemonImage = `${pokemon}${this.props.id}.png`
        return(
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={pokemonImage} alt={this.props.name} />
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;