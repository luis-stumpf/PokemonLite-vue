<script setup>
import { computed } from 'vue';
import ChooseTitle from '@/components/ChooseTitle.vue';
import PokemonShowCase from '@/components/PokemonShowCase.vue';

import { useGameStore } from '@/stores/game';
import { onBeforeMount } from 'vue';
const { getData } = useGameStore();

const props = defineProps({
  winner: Object,
})

const pokemonNames = computed(() => {
  return props.winner.pokemons.contents.map(pokemon => pokemon.pType);
});

onBeforeMount(async () => {
  await getData();
});

</script>

<template>
  <div class="container-fluid">
    <ChooseTitle title="GAME OVER" />
    <ChooseTitle :title="`Winner: ${winner.name}`" />
    <PokemonShowCase :allPokemons="pokemonNames" />
  </div>
</template>


<style scoped>

.titleImage {
  width: 39rem;
  margin-top: 2rem;
}

.startText {
  color: #fdc905;
  font-size: 2.6em;
  letter-spacing: 0.07em;
  margin: -0.8em 0 0 0.05em;
  text-shadow:
          -1.5px -1.5px 0 #395ea9,
          1.5px -1.5px 0 #395ea9,
          -1.5px  1.5px 0 #395ea9,
          1.5px  1.5px 0 #395ea9;
  text-transform: uppercase;
  transition: filter 0.3s;
}

</style>