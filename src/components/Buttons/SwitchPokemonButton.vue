<script setup>
import { computed } from 'vue';

const props = defineProps({
  pokemon: Object,
  onClickHandler: Function,
  move: Number,
})

const styleType = computed(() => {
  if (props.buttonType === 'decideFight') {
    return 'fight-button';
  } else if (props.buttonType === 'decideSwitch') {
    return 'switch-button';
  }
  return '';
});
</script>

<template>
  <button @click="onClickHandler(move)" class="pokemon-button small">
    <img class="img-fluid" :src="`/src/assets/images/pokemons/${pokemon.pType}Front.gif`" style="width: 10vh;" alt="">
    {{ pokemon.pType }}
    <br>
    HP: {{ pokemon.hp }}
  </button>
</template>