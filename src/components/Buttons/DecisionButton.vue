<script setup>
import { computed } from 'vue';

const props = defineProps({
  buttonType: String,
  text: String,
  onClickHandler: Function,
})

const styleType = computed(() => {
  if (props.buttonType === 'decideFight') {
    return 'fight-button';
  } else if (props.buttonType === 'decideSwitch') {
    return 'switch-button';
  }
  return '';
});

</script>
<template>
  <button @click="onClickHandler(text)" :class="`button-style ${styleType}`">
    {{ text }}
  </button>
</template>


<style scoped>

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