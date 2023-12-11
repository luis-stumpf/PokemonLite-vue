<script setup>
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';


import DecisionState from '@/components/GameMenu/DecisionState.vue';
import FightingState from '@/components/GameMenu/FightingState.vue';
import SwitchPokemonState from '@/components/GameMenu/SwitchPokemonState.vue';
import { useGameStore } from '@/stores/game';

const { gameState, player1, player2, gameTurn } = storeToRefs(useGameStore());

const currentPlayer = computed(() => {
  if (gameTurn.value === 1) {
    return player1;
  } else {
    return player2;
  }
});

const stateToShow = computed(() => {
  switch (gameState.value) {
    case 'DesicionState()':
      return DecisionState;
    case 'FightingState()':
      return FightingState;
    case 'SwitchPokemonState()':
      return SwitchPokemonState;
    default:
      return DecisionState;
  }
});


</script>
<template>
  <div class="container">
    <div id="menu-field" class="mx-auto menu-field">
      <div class="turn">
        It's your turn {{ currentPlayer.value.name }} !
      </div>

      <div class="menu-wrapper">
        <component :is="stateToShow" :player="currentPlayer" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.turn {
  color: #626262;
  font-family: 'Pokemon Fire Red', sans-serif;
  font-size: 4vh;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
}


.menu-field {
  background-color: beige;
  border: 1vh solid darkslategrey;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  max-width: 75% !important;
  margin-top: 2% !important;
  padding-bottom: 2%;
}

.menu-wrapper {
  display: flex;
  justify-content: center;
  gap: 2vh;
}

</style>