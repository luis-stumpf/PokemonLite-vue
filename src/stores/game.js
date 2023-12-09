import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import axios from "axios";
import CONSTANTS from '../constants';

export const useGameStore = defineStore('game', () => {
  const gameState = ref("InitState()");
  const player1 = ref({
    name: "",
    pokemons: {
      contents: [{}, {}, {}],
      size: 0
    },
    currentPoke: 0
  });
  const player2 = ref({
    name: "",
    pokemons: {
      contents: [{}, {}, {}],
      size: 0
    },
    currentPoke: 0
  });
  const gameTurn = ref(0);


  async function getData() {
    const response = await axios.get(`${CONSTANTS.serverUrl}/api/gameJson`)
    console.log(response.data);
    gameState.value = response.data.state.stateVal;
    player1.value = response.data.player1;
    player2.value = response.data.player2;
    gameTurn.value = response.data.turn;
  }

  async function getGameState() {
    const response = await axios.get(`${CONSTANTS.serverUrl}/api/stateJson`)
    gameState.value = response.data.stateVal;
  }

  // Create a WebSocket connection to the server
  const socket = new WebSocket(CONSTANTS.websocketUrl);

  socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened:', event);
  });

  socket.addEventListener('message', (event) => {
    getData();
    getGameState();
  });

  socket.addEventListener('close', (event) => {
    console.log('WebSocket connection closed:', event);
  });

  socket.addEventListener('error', (event) => {
    console.error('WebSocket error:', event);
  });

  onMounted(() => {
    return () => {
      socket.close();
    };
  });

  return { gameState, player1, player2, gameTurn, getData, getGameState };
});