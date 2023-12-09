<script setup>
import { ref, watch } from 'vue';


const props = defineProps({
  user: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['input-change']);

const username = ref('');

watch(username, (newUsername) => {
  emit('input-change', { [props.user]: newUsername });
});

</script>
<template>
        <div class="playerName1">
          <label class="playerName-label" for="player1Name">PLAYER 1 ?</label>
          <input class="inputNames" type="text" v-model="username" required>
          <span class="cursor" id="cursor1">_</span>
        </div>
</template>

<style scoped>

.inputNames:focus + .cursor {
    display: inline-block;
    animation: blink 0.7s infinite;
}

.inputNames {
    caret-color: transparent;
    margin-left: 15vh;
    height: 3vh;
    width: 26vh !important;
    margin-top: -0.8vh;
    border: none !important;
    outline: none;
    font-family: 'Pokemon Fire Red', sans-serif;
    color: #626262 !important;
    font-size: 4vh;
    text-shadow: 2px 2px rgba(210, 212, 202, 100);
    text-transform: uppercase;
}


.cursor {
    color: #626262;
    display: none;
    font-size: 4.3vh;
    left: 0;
    margin-left: 20.3vh;
    position: absolute;
    text-shadow: 2px 2px rgba(210, 212, 202, 100);
    top: 5.3vh;
}

@keyframes blink {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}


.playerName1 {
    background-image: url("@/assets/images/yourName.png");
    background-size: cover;
    margin-left: 4vh;
    margin-right: 4vh;
    margin-top: 3vh;
    width: 51vh;
    height: 13.4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}


.playerName-label {
    font-family: 'Pokemon Fire Red', sans-serif;
    color: #626262;
    padding-left: 19vh;
    padding-top: 0.3vh;
    font-size: 5.3vh;
    letter-spacing: -0.15vh;
    text-shadow: 2px 2px rgba(210, 212, 202, 100);
}
</style>