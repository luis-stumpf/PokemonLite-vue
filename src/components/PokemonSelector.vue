<template>
  <div class="pokemonSelection">
    <div class="pokemonLabel">
      <label for="player1Pokemon1">{{ playerName }}'s Pokemons: </label>
    </div>
    <div id="selection">
      <select v-for="number in 3" :key="number" id="player1Pokemon1" name="player1Pokemon1">
        <option v-for="(pokemon, index) in allPokemons" :key="pokemon" :value="(index + 1)">
          {{ pokemon }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonSelector',
  props: {
    playerName: {
      type: String,
      required: true,
    },
    allPokemons: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>

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

