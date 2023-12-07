import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from "axios";
import CONSTANTS from '../constants';

export const useGameStore = defineStore('game', () => {
  const gameState = ref("InitialState()");
  const player1 = ref({});
  const player2 = ref({});
  const gameTurn = ref(0);

  async function getData() {
      const response = await axios.get(`${CONSTANTS.serverUrl}/api/gameJson`)
      console.log(response.data);
      gameState.value = response.data.state.stateVal;
      player1.value = response.data.player1;
      player2.value = response.data.player2;
      gameTurn.value = response.data.turn;
  }

  return { gameState, player1, player2, gameTurn, getData };
});