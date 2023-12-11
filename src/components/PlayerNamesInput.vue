<template>
  <div :class="[user === 'playerName1' ? 'playerName1' : 'playerName2']">
    <label class="playerName-label" :for="user">{{ user === 'playerName1' ? 'PLAYER 1' : 'PLAYER 2' }} ?</label>
    <input class="inputNames" type="text" :id="user" v-model="username" required @input="updateCursor">
    <span class="cursor" :id="'cursor' + (user === 'playerName1' ? '1' : '2')" :style="{ left: cursorPosition }">_</span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['user']);

const emit = defineEmits(['input-change']);

const username = ref('');
const cursorPosition = ref('0px');

watch(username, (newUsername) => {
  emit('input-change', { [props.user]: newUsername });
  updateCursor();
});

const updateCursor = () => {
  const inputLength = username.value.length;
  cursorPosition.value = inputLength === 0 ? '0px' : `${inputLength * 0.31}em`;
};
</script>

<style scoped>

.cursor {
  color: #626262;
  display: none;
  font-size: 2.7em;
  left: 0;
  margin-left: 3.7em;
  position: absolute;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  top: 0.9em;
}

@keyframes blink {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.inputNames:focus + .cursor {
  display: inline-block;
  animation: blink 0.7s infinite;
}

.inputNames {
  caret-color: transparent;
  margin-left: 4em;
  height: 0.9em;
  width: 14rem !important;
  margin-top: -0.3em;
  border: none !important;
  outline: none;
  color: #626262 !important;
  font-size: 2.2em;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  text-transform: uppercase;
}

.playerName1,
.playerName2 {
  background-size: cover;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  width: 25.2rem;
  height: 6.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.playerName1 {
  background-image: url("@/assets/images/yourName.png");
}

.playerName2 {
  background-image: url("@/assets/images/yourName2.png");
}

.playerName-label {
  color: #626262;
  padding-left: 3.6em;
  padding-top: 0.05em;
  font-size: 2.65em;
  letter-spacing: -0.03em;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
}

</style>