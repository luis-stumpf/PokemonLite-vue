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

  const switchAnimation = ref(false)

  const chatOpen = ref(false);

  const chatMessages = ref([]);

  function toggleChat() {
    chatOpen.value = !chatOpen.value;
  }

  function sendChatMessage(message) {
    socket.send(message);
  }

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
    attackAnimation.value = { animationType, animationOn };

    // After 2500ms, reset attackAnimation to null
    setTimeout(() => {
      attackAnimation.value = { animationType: "", animationOn: 0 };
    }, 800);
  };

  function showSwitchAnimation() {
    switchAnimation.value = true;

    setTimeout(() => {
      switchAnimation.value = false;
    }, 800);
  }

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

  async function getChatMessages() {
    const response = await axios.get(`${CONSTANTS.serverUrl}/api/getChatMessages`)
    chatMessages.value = response.data.reverse();
    console.log(chatMessages.value);
  }


  let socket;

  function openSocket() {
    socket = new WebSocket(CONSTANTS.websocketUrl);
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
      socket
      getData();
      getGameState();
      getChatMessages();
    });

    socket.addEventListener('message', (event) => {
      console.log('WebSocket message received:', event);
      if (event.data === "new message") return getChatMessages();
      getGameState();
      if (gameState.value === "InitState()" || gameState.value === "InitPlayerPokemonState()") return;
      getData();
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);

      setTimeout(() => {
        openSocket();
      }, 1000);
    });

    socket.addEventListener('error', (event) => {
      console.error('WebSocket error:', event);
    });
  }

  openSocket();


  return { gameState, player1, player2, gameTurn, attackAnimation, chatOpen, chatMessages, toggleChat, getData, getGameState, showAttackAnimation, sendChatMessage };
});