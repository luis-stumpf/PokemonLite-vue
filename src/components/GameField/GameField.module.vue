<script setup>

import Pokemon from '@/components/GameField/Pokemon.vue';
import PokemonStatus from '@/components/GameField/PokemonStatus.vue';
import { computed } from 'vue';
import { useGameStore } from '@/stores/game';

const { getData } = useGameStore();

const props = defineProps({
  player1Data: Object | String,
  player2Data: Object | String,
})


await getData();

const currentPokemonP1 = computed(() => {
  return props.player1Data.pokemons.contents && props.player1Data.pokemons.contents[props.player1Data.currentPoke]
})

const currentPokemonP2 = computed(() => {
  return props.player2Data.pokemons.contents && props.player2Data.pokemons.contents[props.player2Data.currentPoke]
})

</script>

<template>
  <div class="image-container">
    <img src="@/assets/images/gamefield.jpg">
    <div class="overlay-content">
      <div class="row h-50">
        <div id="player-1-status" class="col">
          <PokemonStatus :pokemon="currentPokemonP1"/>
        </div>
        <div id="player-1-pokemon" class="col position-relative">
          <Pokemon :pokemon="currentPokemonP1" side="Front" playerNr="1"/>
        </div>
      </div>
      <div class="row h-50">
        <div id="player-2-pokemon" class="col position-relative">
          <Pokemon :pokemon="currentPokemonP2" side="Back" playerNr="2"/>
        </div>
        <div id="player-2-status" class="col">
          <PokemonStatus :pokemon="currentPokemonP2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  padding-top: 50%;
  overflow: hidden;
  border: 10px solid darkslategrey;
  border-radius: 15px;
}



.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
</style>