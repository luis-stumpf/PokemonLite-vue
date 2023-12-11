<script setup props="props">
import {storeToRefs} from "pinia";
import {useGameStore} from "@/stores/game";

const { chatMessages } = storeToRefs(useGameStore());
</script>

<template>
  <v-list class="chat-area" id="chat-area">
    <v-list-item v-for="(message, index) in chatMessages" :key="index">
      <v-list-item-content>{{ message }}</v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.chat-area {
  background-image: url(@/assets/images/chatArea.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 24.1em;
  margin-top: -0.6em;
  overflow-y: auto;
  padding: 2em;
  width: 11em;
}
</style>
