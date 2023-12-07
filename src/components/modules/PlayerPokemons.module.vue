<template>
  <div class="container-fluid">
    <ChooseTitle title="CHOOSE YOUR POKEMONS" />
    <PokemonShowCase :allPokemons="allPokemons" />
    <ChoosePokemonDropdownModule :allPokemons="allPokemons" />
    <ConfirmButton title="CONFIRM" />
  </div>
</template>

<script>

import ChooseTitle from '@/components/ChooseTitle.vue'
import ConfirmButton from '@/components/Buttons/ConfirmButton.vue';
import PokemonShowCase from '@/components/PokemonShowCase.vue';
import ChoosePokemonDropdownModule from '@/components/modules/ChoosePokemonDropdown.module.vue';
import CONSTANTS from '@/constants';

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
    }
  },
  computed: {
  },
}
</script>
