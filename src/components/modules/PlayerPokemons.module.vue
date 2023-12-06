<template>
  <div class="container-fluid">
    <ChooseTitle title="CHOOSE YOUR POKEMONS" />
    <PokemonShowCase :allPokemons="allPokemons" />
    <div class="row">
      <div class="pokemonSelectionContainer">
        <div class="pokemonSelection">
          <div class="pokemonLabel">
            <label for="player1Pokemon1">@player1Name's Pokemons: </label>
          </div>
          <div id="selection1">
            <select id="player1Pokemon1" name="player1Pokemon1">
              <option value="" disabled selected style="display: none;"></option>
              <!-- 
                            @for((pokemon, index) <- allPokemons.zipWithIndex) {
                                <option value="@(index + 1)">
                                @pokemon.name
                                </option>
                            }
              -->
            </select>
            <label for="player1Pokemon2"></label>
            <select id="player1Pokemon2" name="player1Pokemon2">
              <option value="" disabled selected style="display: none;"></option>
              <!-- 
                            @for((pokemon, index) <- allPokemons.zipWithIndex) {
                                <option class="pokemonOptions" value="@(index + 1)">
                                @pokemon.name
                                </option>
                            }
              -->
            </select>
            <label for="player1Pokemon3"></label>
            <select id="player1Pokemon3" name="player1Pokemon3">
              <option value="" disabled selected style="display: none;"></option>
              <!-- 
                            @for((pokemon, index) <- allPokemons.zipWithIndex) {
                                <option value="@(index + 1)">
                                @pokemon.name
                                </option>
                            }
              -->
            </select>
          </div>
        </div>
        <div class="pokemonSelection">
          <div class="pokemonLabel">
            <label for="player2Pokemon1">@player2Name's Pokemons: </label>
          </div>
          <div id="selection2">
            <select id="player2Pokemon1" name="player2Pokemon1">
              <option value="" disabled selected style="display: none;"></option>
              <!-- 
                            @for((pokemon, index) <- allPokemons.zipWithIndex) {
                                <option value="@(index + 1)">
                                    @pokemon.name
                                </option>
                            }
              -->
            </select>
            <label for="player2Pokemon2"></label>
            <select id="player2Pokemon2" name="player2Pokemon2">
              <option value="" disabled selected style="display: none;"></option>
              <!-- 
                            @for((pokemon, index) <- allPokemons.zipWithIndex) {
                                <option value="@(index + 1)">
                                    @pokemon.name
                                </option>
                            }
              -->
            </select>
            <label for="player2Pokemon3"></label>
            <select id="player2Pokemon3" name="player2Pokemon3">
              <option value="" disabled selected style="display: none;"></option>
              <!-- 
                            @for((pokemon, index) <- allPokemons.zipWithIndex) {
                                <option value="@(index + 1)">
                                    @pokemon.name
                                </option>
                            }
              -->
            </select>
          </div>
        </div>
      </div>
      <ConfirmButton title="CONFIRM" />
    </div>
  </div>
</template>

<script>

import ChooseTitle from '@/components/ChooseTitle.vue'
import ConfirmButton from '@/components/Buttons/ConfirmButton.vue';
import PokemonShowCase from '@/components/PokemonShowCase.vue';
import CONSTANTS from '@/constants';

export default {
  name: 'PlayerPokemonsModule',
  components: {
    ChooseTitle,
    ConfirmButton,
    PokemonShowCase,
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

<style scoped>
@titleBackground: url("../images/PlayerNamesTitle.png");
@fontColour: #626262;
@navBarColour: rgba(193, 229, 252, 0.94);
@textShadow: 2px 2px rgba(210, 212, 202, 100);


.img-wrapper {
  align-items: center;
  border: 0.5vh solid dimgray;
  background-color: #dddddd;
  border-radius: 2vh;
  color: #626262;
  display: flex;
  flex-direction: column;
  font-family: 'Pokemon Fire Red', sans-serif;
  font-size: 3vh;
  justify-content: space-around;
  padding-left: 1vh;
  padding-right: 1vh;
  text-align: center;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  text-transform: uppercase;
}

option {
  font-family: 'Pokemon Fire Red', sans-serif;
  font-size: 2.3vh;
  color: #626262;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
}

option:hover {
  background-color: rgba(193, 229, 252, 0.94);
  color: white;
}

.pokemon-image {
  width: 22vh;
}

.pokemonLabel {
  font-family: 'Pokemon Fire Red', sans-serif;
  font-size: 4vh;
  margin-top: 1vh;
  margin-bottom: -1vh;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  text-transform: uppercase;
}

.pokemonSelection {
  align-items: center;
  background-image: url("@/assets/images/pokemonSelection.png");
  background-size: cover;
  color: #626262;
  display: flex;
  flex-direction: column;
  height: 13.8vh;
  margin-left: 4vh;
  margin-right: 4vh;
  margin-top: 1vh;
  width: 52.2vh;
}

.pokemonSelectionContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

select {
  border-radius: 1vh;
  color: #626262;
  font-family: 'Pokemon Fire Red', sans-serif !important;
  font-size: 3.1vh !important;
  height: 4.5vh;
  text-transform: uppercase !important;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  width: 15vh;
}

</style>