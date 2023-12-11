<script setup>

import { useRouter } from 'vue-router';
import axios from 'axios';
import CONSTANTS from '@/constants';
import { ref } from 'vue';

import ChooseTitle from '@/components/ChooseTitle.vue'
import ConfirmButton from '@/components/Buttons/ConfirmButton.vue';
import PokemonShowCase from '@/components/PokemonShowCase.vue';
import ChoosePokemonDropdownModule from '@/components/modules/ChoosePokemonDropdown.module.vue';

const router = useRouter();

const allPokemons = CONSTANTS.allPokemons;
const playerPokemonsFormData = ref({
        playerPokemons1: {},
        playerPokemons2: {},
      });

const handleInputChange = (updatedInput) => {
      playerPokemonsFormData.value = { ...playerPokemonsFormData.value, ...updatedInput };
    }

const handleSubmitForm = () => {
      axios.post(`${CONSTANTS.serverUrl}/api/initPlayerPokemons`, {
        playerPokemons1: Object.values(playerPokemonsFormData.value.playerPokemons1),
        playerPokemons2: Object.values(playerPokemonsFormData.value.playerPokemons2),
      })
      router.push('/game');
    }

</script>

<template>
  <div class="container-fluid">
    <ChooseTitle title="CHOOSE YOUR POKEMONS" />
    <PokemonShowCase :allPokemons="allPokemons" />
    <ChoosePokemonDropdownModule :allPokemons="allPokemons" @change="handleInputChange"/>
    <ConfirmButton @form-submit="handleSubmitForm" title="CONFIRM" />
  </div>
</template>
