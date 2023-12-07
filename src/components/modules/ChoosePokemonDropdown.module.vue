<template>
    <div class="row">
      <div class="pokemonSelectionContainer">
        <PokemonSelector :allPokemons="allPokemons" playerName="firstPlayer" />
        <PokemonSelector :allPokemons="allPokemons" playerName="secondPlayer" />
      </div>
    </div>
</template>

<script>
import PokemonSelector from '@/components/PokemonSelector.vue'

export default {
  name: 'ChoosePokemonDropdownModule',
  props: {
    allPokemons: {
      type: Array,
      required: true,
    },
  },
  components: {
    PokemonSelector,
  },
}
</script>

<style scoped>

.pokemonSelectionContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>