<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue';

const props = defineProps({
  playerName: {
    type: String,
    required: true,
  },
  playerPokemons: {
    type: String,
    required: true,
  },
  allPokemons: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['change']);

const selectedPokemons = ref([]);

watch(selectedPokemons, () => {
  emit('change', { [props.playerPokemons]: selectedPokemons.value });
}, { deep: true });

</script>

<template>
  <div class="pokemonSelection">
    <div class="pokemonLabel">
      <label for="player1Pokemon1">{{ playerName }}'s Pokemons: </label>
    </div>
    <div id="selection">
      <select v-for="(number, index) in 3" :key="number" id="player1Pokemon1" name="player1Pokemon1" v-model="selectedPokemons[index]">
        <option v-for="(pokemon, index) in allPokemons" :key="pokemon" :value="(index + 1)">
          {{ pokemon }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>

option {
  font-size: 0.9em;
  color: #626262;
  text-transform: uppercase;
  text-align: center;
}

option:hover {
  background-color: rgba(193, 229, 252, 0.94);
  color: white;
}

.pokemonLabel {
  font-size: 2em;
  margin-top: 0.2em;
  margin-bottom: -0.1em;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  text-transform: uppercase;
}

.pokemonSelection {
  align-items: center;
  background-image: url("@/assets/images/PlayerNamesTitle.png");
  background-size: cover;
  color: #626262;
  display: flex;
  flex-direction: column;
  height: 6.75rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  width: 25.6rem;
}

select {
  border-style: solid !important;
  border-radius: 0.3em;
  color: #626262;
  font-size: 1.7em !important;
  text-transform: uppercase !important;
  width: 4.5em;
  margin: 0 0.1em 0 0.1em;
}

</style>

