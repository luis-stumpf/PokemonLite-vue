<script setup>
import NavBarElement from '@/components/Navbar/NavBarElement.vue';

import { useGameStore } from '@/stores/game';

const { toggleChat } = useGameStore();
</script>

<template>
  <nav class="custom-navbar navbar navbar-expand navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <NavBarElement name="Settings"></NavBarElement>
        <NavBarElement name="Home" />
        <NavBarElement name="Rules" />
        <NavBarElement name="Restart" />
        <button class="chat-button" @click="toggleChat()">
          <i class="bi bi-chat-dots"></i>
          <span class="navBarFont">Chat</span>
        </button>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.chat-button {
  background: none;
  border: none;
  color: #0d59be !important;
  font-size: 1.72rem;
  margin-left: 0.4rem;
}

.chat-button:hover {
  color: #e7f7ff !important;
}

.custom-navbar {
  background-color: rgba(193, 229, 252, 0.94);
  height: 3.3rem;
}
</style>