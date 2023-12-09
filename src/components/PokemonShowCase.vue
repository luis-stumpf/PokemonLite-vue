<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  allPokemons: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <div class="row">
    <div class="showcase-box">
      <li v-for="(pokemon) in allPokemons" :key="pokemon" class="img-wrapper">
        <div>
          {{ pokemon }}
          <br>
          <img class="pokemon-image img-fluid" :src="`/src/assets/images/pokemons/${pokemon}Front.gif`" height="200" alt="">
        </div>
      </li>
    </div>
  </div>
</template>

<style scoped>
.showcase-box {
  display: flex;
  justify-content: center;
  gap: 2vh;
  margin-bottom: 2vh;
}

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

.pokemon-image {
  width: 10rem;
}

</style>