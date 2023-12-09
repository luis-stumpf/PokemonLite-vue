<script setup>
import { computed } from 'vue';

const props = defineProps({
  attack: Object,
  onClickHandler: Function,
  move: Number,
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
  <button @click="onClickHandler(move)" class="attack-button button-style fight-button small">
    {{ attack.name }}
  </button>
</template>