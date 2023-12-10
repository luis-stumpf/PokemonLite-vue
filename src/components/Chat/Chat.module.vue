<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useGameStore } from '@/stores/game';

const { sendChatMessage } = useGameStore();
const { chatMessages } = storeToRefs(useGameStore());

const props = defineProps({
  currentPlayerData: {
    type: Object,
    required: true
  }
});

const messageInput = ref('');


const sendMessage = () => {
  const message = `${props.currentPlayerData.name}: ${messageInput.value.trim()}`;
  console.log('sendMessage', JSON.stringify({ msg: message } ));
  sendChatMessage(message);
  messageInput.value = '';
};

</script>

<template>
  <div id="app">
    <div class="row">
      <div class="chooseTitleContainer" style="padding-bottom: 2vh !important;">
        <div class="chooseTitle">POKEMON GAME CHAT</div>
      </div>
    </div>

    <div class="row">
      <div class="chat-area-container">
        <div class="chat-area" id="chat-area">
          <div v-for="(message, index) in chatMessages" :key="index">{{ message }}</div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="send-message-container">
        <form class="send-message" @submit.prevent="sendMessage">
          <div class="user-id" ></div>
          <textarea class="send-message-textarea" style="font-family: 'Pokemon Fire Red', sans-serif"
            v-model="messageInput" maxlength="100"></textarea>
          <button class="confirmButton" type="submit" >Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
