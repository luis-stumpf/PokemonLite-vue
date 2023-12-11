<script setup>

import { computed } from 'vue';

const props = defineProps({
  pokemon: Object,
})

const healthBarWidth = computed(() => {
  return parseInt(props.pokemon.hp / props.pokemon.maxHp * 100);
});

const healthOf = computed(() => {
  return `${props.pokemon.hp} / ${props.pokemon.maxHp} `
});

</script>

<template>
  <div class="pokemon-status">
    <div class="pokemon-name">
      {{ pokemon.pType }}
    </div>
    <div class="pokemon-health-background">
      <div id="bar-p-1" class="pokemon-health-bar" :style="`width: ${healthBarWidth}%`">
      </div>
    </div>
    {{ healthOf }}
  </div>
</template>

<style scoped>


.pokemon-health-background {
  width: 4em; /* Adjust the width of the health bar as needed */
  height: 20px; /* Adjust the height of the health bar as needed */
  border: 1px solid #000;
  overflow: hidden;
  background-color: #7b7b7b;
}

.pokemon-health-bar {
  height: 100%;
  background-color: #4CAF50;
  transition: width 0.5s ease;
  font-size: 0.9rem;
  text-shadow: none;
}


.pokemon-status {
  background-color: antiquewhite;
  border-radius: 15px;
  color: #626262;
  font-size: 1.5rem;
  text-align: center;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  width: 40%;
  margin-left: 20%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4px;
}


.pokemon-name {
  text-transform: uppercase;
}

</style>