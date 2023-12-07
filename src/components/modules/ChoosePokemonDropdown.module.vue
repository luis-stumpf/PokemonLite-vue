<template>
    <div class="row">
      <div class="pokemonSelectionContainer">
        <PokemonSelector :allPokemons="allPokemons" playerName="firstPlayer" playerPokemons="playerPokemons1" @change="emitHandleInputChange" />
        <PokemonSelector :allPokemons="allPokemons" playerName="secondPlayer" playerPokemons="playerPokemons2" @change="emitHandleInputChange" />
      </div>
    </div>
</template>

<script>
import PokemonSelector from '@/components/PokemonSelector.vue'

export default {
  name: 'ChoosePokemonDropdownModule',
  emits: ['change'],
  props: {
    allPokemons: {
      type: Array,
      required: true,
    },
  },
  components: {
    PokemonSelector,
  },
  methods: {
    emitHandleInputChange(updatedInput) {
      // Merge the updated input into formData
      console.log('updatedInput', updatedInput);
      this.$emit('change', updatedInput)
    },
    handleSubmitForm() {
      // Handle form submission logic, e.g., make an API request
      console.log('Form submitted with data:', this.playerPokemonsFormData);
    },
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