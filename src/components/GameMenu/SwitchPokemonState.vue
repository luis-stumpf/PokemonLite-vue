<script setup>

import axios from 'axios';
import { computed } from 'vue';
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia';

import CONSTANTS from '@/constants';

import SwitchPokemonButton from '@/components/Buttons/SwitchPokemonButton.vue';
import { useGameStore } from '@/stores/game';


const props = defineProps({
  player: Object,
  isTurn: Boolean,
})

const onClickHandler = (move) => {
  if (props.player.value.pokemons.contents[move - 1].hp <= 0) {
    alert('Your selected Pokemon is dead. Please switch to another Pokemon.')

    return
  }
  axios.post(`${CONSTANTS.serverUrl}/api/switch`, {
    move,
  })
}

</script>

<template>
  <SwitchPokemonButton v-for="(pokemon, index) in props.player.value.pokemons.contents" :pokemon="pokemon" :key="pokemon.pType.name"
    :onClickHandler="onClickHandler" :move="(index + 1)" />
</template>