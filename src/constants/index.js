
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
  serverUrl: "https://pokemonlite.fly.dev",
  websocketUrl: "wss://pokemonlite.fly.dev/websocket",
  allPokemons,
  pokemonSamples,
}


export default CONSTANTS;