
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
  //serverUrl: "http://localhost:9000",
  serverUrl: 'https://pokemonlite.fly.dev',
  //websocketUrl: "ws://localhost:9000/websocket",
  websocketUrl:  "ws://pokemonlite.fly.dev/websocket",
  allPokemons,
  pokemonSamples,
}


export default CONSTANTS;