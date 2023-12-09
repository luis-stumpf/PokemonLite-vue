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

  const attackAnimation = ref({
    animationType: "",
    animationOn: 0
  });

  function showAttackAnimation(pokemonType) {
    let animationType = "punch"
    let animationOn = 0

    if (pokemonType === "Feuer") {
      animationType = "fire";
    } else if (pokemonType === "Wasser") {
      animationType = "bubbles";
    }

    if (gameTurn.value === 1) {
      animationOn = 2;
    } else {
      animationOn = 1;
    }

    // Set the attackAnimation to the selected attack
    attackAnimation.value = {animationType, animationOn};

    // After 2500ms, reset attackAnimation to null
    setTimeout(() => {
      attackAnimation.value = {animationType: "", animationOn: 0};
    }, 2500);
  };

  async function getData() {
    const response = await axios.get(`${CONSTANTS.serverUrl}/api/gameJson`)
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
    getGameState();
    if (gameState.value === "InitState()" || gameState.value === "InitPlayerPokemonState()") return;
    getData();
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

  return { gameState, player1, player2, gameTurn, getData, getGameState, showAttackAnimation, attackAnimation };
});