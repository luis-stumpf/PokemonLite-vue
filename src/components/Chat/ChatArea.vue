<template>
  <div class="chat-area" id="chat-area">
    <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
  </div>
</template>

<script setup props="props" />
