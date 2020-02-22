import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    let hand = this.props.hand.map(pokemon => {
      return (
        <Pokecard
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          exp={pokemon.base_experience}
        />
      );
    });
    return (
      <div className="tc">
        <h3 className={this.props.isWinner ? 'dib br3 pa3 ma2 grow bw2 shadow-5 white bg-green' : ''}>
            {this.props.isWinner ? 'THIS HAND WINS!!!' : ''}
        </h3>
        <h5>Total experience: {this.props.total}</h5> 
        <p>{hand}</p>
      </div>
    );
  }
}

export default Pokedex;