<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useGameStore } from '@/stores/game';
import ChatArea from "@/components/Chat/ChatArea.vue";

const { sendChatMessage } = useGameStore();


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
  <div class="chat" id="app">
    <div class="row chat-title">Chat</div>

    <div class="row" style="display: flex; justify-content: center;">
      <ChatArea />
    </div>

    <!-- TO TODOOO -->
    <div class="row" style="display: flex;">
        <form class="send-message" @submit.prevent="sendMessage">
          <textarea class="send-message-textarea" v-model="messageInput" maxlength="100"></textarea>
          <button class="send-button" type="submit" >Send</button>
        </form>
    </div>
  </div>
</template>

<style scoped>

.chat {
  background-image: url(@/assets/images/messageBackground2.png);
  background-size: cover;
  height: fit-content;
  width: 13em;
}

.chat-title {
  color: #626262;
  display: flex;
  font-size: 3rem;
  justify-content: center;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
  text-transform: uppercase;
}
.send-button {
  background-color: #4caf50;
  border: 0.1em solid #348437;
  border-radius: 0.3em;
  color: white;
  font-weight: bold;
  letter-spacing: 0.08em;
  margin: 0.3em 0 0 7.3em;
  text-transform: uppercase;
  width: 3.5em;
}

.send-message {
  display: flex;
  flex-direction: column;
  height: 8.7em;
  width: 13em;
}

.send-message-textarea {
  border-style: solid;
  border-color: rgb(198 198 184);
  border-radius: 0.4em;
  height: 5em;
  margin: 0.5em 0.7em 0 0.7em;
  padding: 0.5em;
}

</style>