<script setup>

import axios from 'axios';
import { computed } from 'vue';
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia';

import CONSTANTS from '@/constants';

import AttackButton from '@/components/Buttons/AttackButton.vue';
import { usePokemonsStore } from '@/stores/pokemons';
import { useGameStore } from '@/stores/game';
import { onBeforeMount } from 'vue';

const { showAttackAnimation } = useGameStore();

const { pokemons } = storeToRefs(usePokemonsStore());
const { getPokemonsData } = usePokemonsStore();

const props = defineProps({
  player: Object,
  isTurn: Boolean,
})

const currentPokemon = computed(() => {
  return props.player.value.pokemons.contents[props.player.value.currentPoke];
});

const currentPokemonAttacks = computed(() => {
  return pokemons.value.find(p => p.name === currentPokemon.value.pType).attacks;
});

const onClickHandler = (move) => {
  showAttackAnimation(pokemons.value.find(p => p.name === currentPokemon.value.pType).pokemonArt)
  axios.post(`${CONSTANTS.serverUrl}/api/fighting`, {
    move,
  })
}

onBeforeMount(() => {
  getPokemonsData();
})

</script>

<template>
  <AttackButton v-for="(attack, index) in currentPokemonAttacks" :attack="attack" :key="attack.name"
    :onClickHandler="onClickHandler" :move="(index + 1)" />
</template>