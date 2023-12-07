<template>
  <div class="container-fluid">
    <ChooseTitle title="CHOOSE YOUR POKEMONS" />
    <PokemonShowCase :allPokemons="allPokemons" />
    <ChoosePokemonDropdownModule :allPokemons="allPokemons" @change="handleInputChange"/>
    <ConfirmButton @form-submit="handleSubmitForm" title="CONFIRM" />
  </div>
</template>

<script>

import ChooseTitle from '@/components/ChooseTitle.vue'
import ConfirmButton from '@/components/Buttons/ConfirmButton.vue';
import PokemonShowCase from '@/components/PokemonShowCase.vue';
import ChoosePokemonDropdownModule from '@/components/modules/ChoosePokemonDropdown.module.vue';
import CONSTANTS from '@/constants';
import axios from 'axios';

export default {
  name: 'PlayerPokemonsModule',
  components: {
    ChooseTitle,
    ConfirmButton,
    PokemonShowCase,
    ChoosePokemonDropdownModule,
  },
  data() {
    return {
      pageTitle: "Choose your Pokemons",
      allPokemons: CONSTANTS.allPokemons,
      pageTitle: "Choose your Names",
      playerPokemonsFormData: {
        playerPokemons1: {},
        playerPokemons2: {},
      },
    }
  },
  methods: {
    handleInputChange(updatedInput) {
      // Merge the updated input into formData
      this.playerPokemonsFormData = { ...this.playerPokemonsFormData, ...updatedInput };
    },
    handleSubmitForm() {
      // Handle form submission logic, e.g., make an API request
      axios.post(`${CONSTANTS.serverUrl}/api/initPlayerPokemons`, {
        playerPokemons1: Object.values(this.playerPokemonsFormData.playerPokemons1),
        playerPokemons2: Object.values(this.playerPokemonsFormData.playerPokemons2),
      })
    },
  },
  computed: {
  },
}
</script>
