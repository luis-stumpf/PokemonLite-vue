<script setup>

import { computed } from 'vue';
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia';

import AttackButton from '@/components/Buttons/AttackButton.vue';
import { usePokemonsStore } from '@/stores/pokemons';

const { pokemons } = storeToRefs(usePokemonsStore());

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


</script>

<template>
  <AttackButton v-for="attack in currentPokemonAttacks" :attack="attack"/>
</template>