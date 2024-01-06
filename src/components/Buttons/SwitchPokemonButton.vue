<script setup>
import { computed } from 'vue';

const props = defineProps({
  pokemon: Object,
  onClickHandler: Function,
  move: Number,
})

const hpToShow = computed(() => {
  return props.pokemon.hp > 0 ? props.pokemon.hp : 'DEAD';
})

</script>

<template>
  <button @click="onClickHandler(move)" class="pokemon-button small">
    <img class="img-fluid" :src="`/pokemons/${pokemon.pType}Front.gif`" style="width: 10vh;" alt="">
    {{ pokemon.pType }}
    <br>
    HP: {{ hpToShow }}
  </button>
</template>


<style scoped>

.small {
  font-size: 2rem !important;
}

.pokemon-button {
  align-items: center;
  background-color: #F6F6F6;
  border: 5px solid #7b7b7b;
  border-radius: 15px;
  color: #626262;
  cursor: pointer;
  display: flex;
  font-family: 'Pokemon Fire Red', sans-serif;
  justify-content: center;
  padding: 10px 20px;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  transition: background-color 0.3s, border-color 0.3s;
}

.pokemon-button:hover {
  background-color: #FFF;
  border-color: #000;
}
</style>