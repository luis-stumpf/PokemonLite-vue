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
    <div class="row game-view">
      <ChatModule v-if="chatOpen" :currentPlayerData="currentPlayer"/>
      <Suspense>
      <div class="container-fluid">
        <GameFieldModule :player1Data="player1" :player2Data="player2" />
        <GameMenuModule />
      </div>
        <template #fallback>
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </template>
      </Suspense>
    </div>
  </main>
</template>

<style scoped>

.container-fluid {
  flex: 1;
  resize: horizontal;
  display: flex;
  flex-direction: column;
  align-items: center
}

.game-view {
  display: flex;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  margin: 1em 1em 0 1em;
}

</style>