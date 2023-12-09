<script setup>
import { computed, onBeforeMount, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';
import { usePokemonsStore } from '@/stores/pokemons';
import PlayerNamesModule from '@/components/modules/PlayersNames.module.vue';
import PlayerPokemonsModule from '@/components/modules/PlayerPokemons.module.vue';

const { gameState } = storeToRefs(useGameStore());
const { getPokemonsData } = usePokemonsStore();

const isInitPlayerPokemonState = computed(() => {
  return gameState.value === 'InitPlayerPokemonState()';
});

const isInitPlayerState = computed(() => {
  return gameState.value === 'InitState()';
});

onBeforeMount(async () => {
  await getPokemonsData();
});

</script>


<template>
  <PlayerNamesModule v-if="isInitPlayerState" />
  <PlayerPokemonsModule v-if="isInitPlayerPokemonState" />
</template>
