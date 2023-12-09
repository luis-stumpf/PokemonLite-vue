<script setup>
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';
import PlayerNamesModule from '@/components/modules/PlayersNames.module.vue';
import PlayerPokemonsModule from '@/components/modules/PlayerPokemons.module.vue';

const { getGameState } = useGameStore();
const { gameState } = storeToRefs(useGameStore());

onMounted(async () => {
  await getGameState();
});

const isInitPlayerPokemonState = computed(() => {
  return gameState.value === 'InitPlayerPokemonState()';
});

const isInitPlayerState = computed(() => {
  return gameState.value === 'InitState()';
});

</script>


<template>
  <PlayerNamesModule v-if="isInitPlayerState"/>
  <PlayerPokemonsModule v-if="isInitPlayerPokemonState" />
</template>
