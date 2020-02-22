import React, { Component } from "react";
import { data } from './helpers';
import Pokedex from "./Pokedex";


let handOne = [];
let handTwo = [ ...data];

while(handOne.length < handTwo.length) {
  let idx = Math.floor(Math.random() * handTwo.length);
  handOne.push(handTwo.splice([idx], 1)[0]);
}

const handOneExp = handOne.map(v => v.base_experience).reduce((r, v) => r += v);
const handTwoExp = handTwo.map(v => v.base_experience).reduce((r, v) => r += v);

class Pokegame extends Component {
  render() {
    return (
      <div>
        <Pokedex hand={handOne} total={handOneExp} isWinner={handOneExp > handTwoExp} />
        <Pokedex hand={handTwo} total={handTwoExp} isWinner={handOneExp < handTwoExp} />
      </div>
    );
  }
}

export default Pokegame;