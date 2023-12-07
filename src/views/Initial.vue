<script setup>
import { useGameStore } from '@/stores/game';
const { gameState } = useGameStore();
</script>
<template>
  <PlayerNamesModule v-if="isInitPlayerState" />
  <PlayerPokemonsModule v-if="isInitPlayerPokemonState" />
</template>

<script>

import PlayerNamesModule from '@/components/modules/PlayersNames.module.vue';
import PlayerPokemonsModule from '@/components/modules/PlayerPokemons.module.vue';

export default {
  name: 'Initial',
  components: {
    PlayerNamesModule,
    PlayerPokemonsModule,
  },
  computed: {
    isInitPlayerState() {
      if (this.gameState == "InitPlayerState()") return true;
      return false;
    },
    isInitPlayerPokemonState() {
      if (this.gameState == "InitPlayerPokemonState()") return true;
      return true;
    },
  },
}
</script>