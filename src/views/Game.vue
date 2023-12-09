<script setup>
import GameFieldModule from '@/components/GameField/GameField.module.vue';
import GameMenuModule from '@/components/GameMenu/GameMenu.module.vue';
import { onBeforeMount } from 'vue';

import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';

const { getData } = useGameStore();
const { gameState, player1, player2, gameTurn } = storeToRefs(useGameStore());

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
  </main>
</template>