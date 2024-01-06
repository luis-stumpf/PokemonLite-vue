<script setup>

import axios from 'axios';
import CONSTANTS from '@/constants';
import DecisionButton from '@/components/Buttons/DecisionButton.vue';
import { computed } from 'vue';

const props = defineProps({
  player: Object,
})

const checkCurrentPokemonAlive = computed(() => {
  return props.player.value.pokemons.contents[props.player.value.currentPoke].hp > 0;
})


const onClickHandler = (value) => {
  let move
  switch (value) {
    case 'Fight!':
      if (checkCurrentPokemonAlive.value === false) {
        alert('Your current Pokemon is dead. Please switch to another Pokemon.')

        return
      }
      move = 1
      break;
    case 'Switch!':
      move = 2
      break;
    default:
      break;
  }

  axios.post(`${CONSTANTS.serverUrl}/api/decision`, {
    move,
  })
}

</script>

<template>
  <DecisionButton buttonType="decideFight" text="Fight!" :onClickHandler="onClickHandler" />
  <DecisionButton buttonType="decideSwitch" text="Switch!" :onClickHandler="onClickHandler" />
</template>