
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from "axios";
import CONSTANTS from '../constants';

export const usePokemonsStore = defineStore('pokemons', () => {
  const pokemons = ref(CONSTANTS.pokemonSamples);


  async function getPokemonsData() {
      const response = await axios.get(`${CONSTANTS.serverUrl}/api/allPokemonsJson`)
      pokemons.value = response.data;
  }

  return { pokemons, getPokemonsData };
});