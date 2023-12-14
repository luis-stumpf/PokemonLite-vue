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
          <img class="pokemon-image img-fluid" :src="`/pokemons/${pokemon}Front.gif`" height="200" alt="">
        </div>
      </li>
    </div>
  </div>
</template>

<style scoped>
.showcase-box {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.img-wrapper {
  align-items: center;
  border: 2px solid dimgray;
  background-color: #dddddd;
  border-radius: 15px;
  color: #626262;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: space-around;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  text-transform: uppercase;
}

.pokemon-image {
  width: 10rem;
}

</style>