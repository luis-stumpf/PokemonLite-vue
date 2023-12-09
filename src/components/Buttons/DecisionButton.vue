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