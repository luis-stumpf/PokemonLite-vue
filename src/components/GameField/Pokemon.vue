<script setup>

import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';
import { computed, toRef, toRefs } from 'vue';

const props = defineProps({
  pokemon: Object,
  side: String,
  playerNr: String,
})

const { attackAnimation } = storeToRefs(useGameStore());

const gifToShow = computed(() => {
  if (attackAnimation.value.animationOn === parseInt(props.playerNr)) return true
  return false
})

const attackAnimationType = computed(() => {
  return attackAnimation.value.animationType
})
</script>

<template>
  <img v-if="gifToShow" class="img-fluid" :src="`src/assets/images/attackGifs/${attackAnimationType}.gif`"
    alt="pokemon front" style="width: 40%; margin-left: 10%; object-fit: contain; z-index: 2">
  <img class="img-fluid" :src="`/src/assets/images/pokemons/${pokemon.pType}${side}.gif`" alt="pokemon front"
    style="width: 40%; margin-left: 10%;  object-fit: contain">
</template>