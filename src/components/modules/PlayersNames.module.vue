<script setup>

import axios from 'axios';
import CONSTANTS from '@/constants';

import ChooseTitle from '@/components/ChooseTitle.vue'
import ConfirmButton from '@/components/Buttons/ConfirmButton.vue';
import PlayerNamesInput from '@/components/PlayerNamesInput.vue';
import { ref } from 'vue';

const namesFormData = ref({
  playerName1: "",
  playerName2: "",
});

const handleInputChange = (updatedInput) => {
  namesFormData.value = { ...namesFormData.value, ...updatedInput };
}
const handleSubmitForm = () => {
  axios.post(`${CONSTANTS.serverUrl}/api/initPlayerNames`, namesFormData.value)
}

</script>


<template>
  <div class="container-fluid">
    <ChooseTitle title="CHOOSE YOUR NAMES" />
    <div class="row">
      <div class="playerNamesContainer">
        <PlayerNamesInput @input-change="handleInputChange" user="playerName1" />
        <br>
        <PlayerNamesInput @input-change="handleInputChange" user="playerName2" />
      </div>
      <ConfirmButton @form-submit="handleSubmitForm" title="CONFIRM" />
    </div>
  </div>
</template>

<style scoped>
.playerNamesContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>