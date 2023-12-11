<script setup>
import { computed } from 'vue';

const props = defineProps({
  attack: Object,
  onClickHandler: Function,
  move: Number,
})

</script>

<template>
  <button @click="onClickHandler(move)" class="attack-button button-style fight-button small">
    {{ attack.name }}
  </button>
</template>

<style scoped>


.small {
  font-size: 2rem !important;
}

.button-style {
  display: inline-block;
  padding: 8px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer;
  color: #FFFFFF;
  font-family: 'Pokemon Fire Red', sans-serif;
}


.fight-button {
  background-color: #FF6347;
  border: 10px solid #FF4500;
  letter-spacing: 0.2vh;
  text-transform: uppercase;
}

.fight-button:hover {
  background-color: #FF4500;
}


.switch-button {
  background-color: #4CAF50;
  border: 10px solid #4CAF50;
  letter-spacing: 0.2vh;
  text-transform: uppercase;
}

.switch-button:hover {
  background-color: #45a049;
}
</style>