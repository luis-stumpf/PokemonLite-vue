<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';
import PlayerNamesModule from '@/components/modules/PlayersNames.module.vue';
import PlayerPokemonsModule from '@/components/modules/PlayerPokemons.module.vue';

const { gameState } = storeToRefs(useGameStore());
const { getGameState } = useGameStore();

console.log(gameState.value);

onMounted(async () => {
  await getGameState();
});

const isInitPlayerPokemonState = () => {
  return gameState.value === 'InitPlayerPokemonState()';
};

const isInitPlayerState = () => {
  return gameState.value === 'InitState()';
};

</script>


<template>

  <PlayerNamesModule v-if="isInitPlayerState()" />
  <PlayerPokemonsModule v-if="isInitPlayerPokemonState()" />
</template>
