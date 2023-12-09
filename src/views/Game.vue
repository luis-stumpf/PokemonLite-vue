<script setup>
import GameFieldModule from '@/components/modules/GameField.module.vue';
import GameMenuModule from '@/components/modules/GameMenu.module.vue';
import { onMounted } from 'vue';

import { storeToRefs } from 'pinia';
import { useGameStore } from '@/stores/game';
import { usePokemonsStore } from '@/stores/pokemons';

const { getData } = useGameStore();
const { getPokemonsData } = usePokemonsStore();
const { gameState, player1, player2, gameTurn } = storeToRefs(useGameStore());

onMounted(async () => {
  await getData();
  await getPokemonsData();
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