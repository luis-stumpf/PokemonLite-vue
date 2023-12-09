<script setup>

import axios from 'axios';
import CONSTANTS from '@/constants';
import DecisionButton from '@/components/Buttons/DecisionButton.vue';

const props = defineProps({
  player: Object,
})

const onClickHandler = (value) => {
  let move
  switch (value) {
    case 'Fight!':
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