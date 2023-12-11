<script setup>

import Pokemon from '@/components/GameField/Pokemon.vue';
import PokemonStatus from '@/components/GameField/PokemonStatus.vue';

const props = defineProps({
  player1Data: Object,
  player2Data: Object,
})

</script>

<template>
  <div class="image-container">
    <img src="@/assets/images/gamefield.jpg">
    <div class="overlay-content">
      <div class="row h-50">
        <div id="player-1-status" class="col">
          <PokemonStatus :pokemon="player1Data.pokemons.contents[player1Data.currentPoke]"/>
        </div>
        <div id="player-1-pokemon" class="col position-relative">
          <Pokemon :pokemon="player1Data.pokemons.contents[player1Data.currentPoke]" side="Front" playerNr="1"/>
        </div>
      </div>
      <div class="row h-50">
        <div id="player-2-pokemon" class="col position-relative">
          <Pokemon :pokemon="player2Data.pokemons.contents[player2Data.currentPoke]" side="Back" playerNr="2"/>
        </div>
        <div id="player-2-status" class="col">
          <PokemonStatus :pokemon="player2Data.pokemons.contents[player2Data.currentPoke]"/>
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
</style>