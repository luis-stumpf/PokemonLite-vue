<script setup>

const props = defineProps({
  pokemon: Object,
})

</script>

<template>
  <div class="pokemon-status">
    <div class="pokemon-name">
      {{ pokemon.pType }}
    </div>
    <div class="pokemon-health-background">
      <!--
      <div id="bar-p-1" class="pokemon-health-bar" :style="width: @(f" ${(pokemon.hp.toDouble / pokemon.pType.hp) *
        100}%.0f" + "%" );">
      </div>
      -->
    </div>
    (pokemon.hp + "/" + pokemon.pType.hp)
  </div>
</template>