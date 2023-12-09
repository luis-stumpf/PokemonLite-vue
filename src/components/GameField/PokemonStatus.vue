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