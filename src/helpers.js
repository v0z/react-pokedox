const data = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
//   { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 183 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
];

// randomly shuffles the input array
function shuffle(array) {
  let len = array.length;
  const result = [];
  for (let i = 0; i < len; ) {
    let index = Math.floor(Math.random() * len);
    if (!result.includes(array[index])) {
      result.push(array[index]);
      i++;
    }
  }
  return result;
}

// pads a 3 digit number with zeros.
let pad = (num) => "000".substr((num + "").length) + num;

export { data, shuffle, pad};