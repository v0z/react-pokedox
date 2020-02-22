import React, { Component } from "react";
import { pad } from "./helpers";
import './Pokecard.css';

const useLargeImgs = true;
const IMG_API_MINI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const IMG_API_LARGE = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  static defaultProps = {
    name: "Test",
    type: "pika"
  };

  render() {
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <h3 className="Pokecard-name">{this.props.name}</h3>
        <img
          className="h-25"
          style={{ pointerEvents: "none" }}
          src={
            useLargeImgs
              ? `${IMG_API_LARGE}${pad(this.props.id)}.png`
              : `${IMG_API_MINI}${this.props.id}.png`
          }
          alt="pokemon"
        />
        <p className="Pokecard-type">{this.props.type}</p>
        <p className="Pokecard-exp">EXP: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
