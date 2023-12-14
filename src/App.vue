<script setup>
import { onBeforeMount } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game'
import NavBar from '@/components/NavBar/NavBar.module.vue'

const { getGameState } = useGameStore();

onBeforeMount(async () => {
  await getGameState();
});

</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>
