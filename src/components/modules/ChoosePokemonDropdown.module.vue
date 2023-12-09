<script setup>
import { defineProps, defineEmits } from 'vue';
import PokemonSelector from '@/components/PokemonSelector.vue'

const props = defineProps({
  allPokemons: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['change']);

const emitHandleInputChange = (updatedInput) => {
  emit('change', updatedInput)
}

</script>

<template>
    <div class="row">
      <div class="pokemonSelectionContainer">
        <PokemonSelector :allPokemons="allPokemons" playerName="firstPlayer" playerPokemons="playerPokemons1" @change="emitHandleInputChange" />
        <PokemonSelector :allPokemons="allPokemons" playerName="secondPlayer" playerPokemons="playerPokemons2" @change="emitHandleInputChange" />
      </div>
    </div>
</template>

<style scoped>

.pokemonSelectionContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>