<template>
  <form class="send-message" id="send-message-form" @submit.prevent="handleSendMessage">
    <div class="user-id" id="userId">{{ userId }}</div>
    <textarea
      class="send-message-textarea"
      style="font-family: 'Pokemon Fire Red', sans-serif"
      v-model="messageInput"
      maxlength="100"
    ></textarea>
    <input class="confirmButton" type="submit" value="SEND">
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
