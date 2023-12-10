<script setup>

import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['form-submit']);

const submitForm = () => {
  emit('form-submit');
}

</script>

<template>
  <div class="confirmButtonContainer">
    <button @click="submitForm" class="confirmButton">
      {{ title }}
    </button>
  </div>
  <div style="display: flex; flex-direction: column;  align-items: center;">
    <span class="confirm-shadow"></span>
  </div>
</template>

<style scoped>

.confirmButton {
  background-color: transparent;
  background-image: url("@/assets/images/confirmButton.png");
  background-size: cover;
  border: none;
  padding-bottom: 1em;
  color: white;
  font-size: 3.25em;
  height: 1.83em;
  transition: filter 0.3s;
  text-shadow: -1.5px -1.5px 0 #558c87, 1.5px -1.5px 0 #558c87, -1.5px 1.5px 0 #558c87, 1.5px 1.5px 0 #558c87;
  width: 4.1em;
}

.confirmButtonContainer {
    display: flex;
    justify-content: center;
    padding-top: 1.5rem;
}

.confirmButton:hover {
    filter: brightness(1.2);
}

.confirm-shadow {
  width: 16em !important;
  height: 9em;
  z-index: -99;
  margin-top: -6.65em !important;
  background: radial-gradient(ellipse at center, #4e7844 19%, transparent 67%);
}

</style>