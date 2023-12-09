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
    padding-bottom: 2.5vh;
    font-size: 7vh;
    width: 27vh;
    background-image: url("@/assets/images/confirmButton.png");
    background-size: cover;
    color: white;
    border: none;
    background-color: transparent;
    height: 12vh;
    transition: filter 0.3s;
    text-shadow:
            -1.5px -1.5px 0 #558c87,
            1.5px -1.5px 0 #558c87,
            -1.5px  1.5px 0 #558c87,
            1.5px  1.5px 0 #558c87;
}

.confirmButtonContainer {
    display: flex;
    justify-content: center;
    padding-top: 20vh;
}

.confirmButton:hover {
    filter: brightness(1.2);
}

.confirm-shadow {
    width: 33vh !important;
    height: 17vh;
    z-index: -99;
    margin-top: -12.5vh !important;
    background: radial-gradient(ellipse at center, #4e7844 19%, transparent 67%);
}

</style>