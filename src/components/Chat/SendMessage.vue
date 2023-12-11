<template>
  <form class="send-message" @submit.prevent="handleSendMessage">
    <textarea class="send-message-textarea" v-model="messageInput" maxlength="100"></textarea>
    <button class="send-button" type="submit" >Send</button>
  </form>
</template>

<script setup props="props">
import { ref } from 'vue';

const messageInput = ref('');

const userId = `User-${Math.floor(Math.random() * 100000)}`;

const handleSendMessage = () => {
  if (messageInput.value.trim() !== '') {
    props.sendMessage(`${userId}: ${messageInput.value}`);
    messageInput.value = '';
  }
};
</script>

<style scoped>
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