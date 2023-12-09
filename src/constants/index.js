
const allPokemons = [
  "Glurak",
  "Simsala",
  "Brutalanda",
  "Bisaflor",
  "Turtok"
];

const pokemonSamples = allPokemons.map(name => ({
  name: name,
  hp: 0,
  attacks: [],
}));

const CONSTANTS = {
  serverUrl: "http://localhost:9000",
  allPokemons,
  pokemonSamples,
}


export default CONSTANTS;