
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
  serverUrl: import.meta.env.VUE_APP_SERVER_URL || "http://localhost:9000",
  websocketUrl: import.meta.env.VUE_APP_WEBSOCKET_URL || "ws://localhost:9000/websocket", 
  allPokemons,
  pokemonSamples,
}


export default CONSTANTS;