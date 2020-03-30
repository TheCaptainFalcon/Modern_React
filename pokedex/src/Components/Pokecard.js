import React, { Component } from 'react';
import './Pokecard.css';

// Starter pixel image source
// const pokemon = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/';

// New image source (must incorporate '001' format)
const pokemon = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// Ternary operator to format numbers to "000" to match pokedex img params
let numberFormat = (number) => (number <= 152 ? `00${number}`.slice(-3): number);


class Pokecard extends Component {
    render() {
        let pokemonImage = `${pokemon}${numberFormat(this.props.id)}.png`
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