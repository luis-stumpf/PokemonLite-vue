<script setup>
import GameFieldModule from '@/components/GameField/GameField.module.vue';
import GameMenuModule from '@/components/GameMenu/GameMenu.module.vue';
import ChatModule from '@/components/Chat/Chat.module.vue';
import { computed, onBeforeMount } from 'vue';

import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';

const { getData } = useGameStore();
const { player1, player2, chatOpen, gameTurn } = storeToRefs(useGameStore());

const currentPlayer = computed(() => gameTurn.value === 1 ? player1.value : player2.value);

onBeforeMount(async () => {
  await getData();
});

</script>
<template>
  <main>
    <div class="container">
      <GameFieldModule :player1Data="player1" :player2Data="player2" />
      <GameMenuModule />
    </div>
    <ChatModule v-if="chatOpen" :currentPlayerData="currentPlayer"/>
  </main>
</template>