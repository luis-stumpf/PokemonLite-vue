<template>
  <div class="container-fluid">
    <ChooseTitle title="CHOOSE YOUR NAMES" />
    <div class="row">
      <div class="playerNamesContainer">
        <PlayerNamesInput @input-change="handleInputChange" user="playerName1"/>
        <br>
        <PlayerNamesInput @input-change="handleInputChange" user="playerName2" />
      </div>
      <ConfirmButton @form-submit="handleSubmitForm" title="CONFIRM" />
    </div>
  </div>
</template>

<script>

import ChooseTitle from '@/components/ChooseTitle.vue'
import ConfirmButton from '@/components/Buttons/ConfirmButton.vue';
import PlayerNamesInput from '@/components/PlayerNamesInput.vue';

export default {
  name: 'PlayerNamesModule',
  components: {
    ChooseTitle,
    ConfirmButton,
    PlayerNamesInput,
  },
  data() {
    return {
      pageTitle: "Choose your Names",
      namesFormData: {
        playerName1: "",
        playerName2: "",
      },
    }
  },
  methods: {
    handleInputChange(updatedInput) {
      // Merge the updated input into formData
      this.namesFormData = { ...this.namesFormData, ...updatedInput };
    },
    handleSubmitForm() {
      // Handle form submission logic, e.g., make an API request
      console.log('Form submitted with data:', this.namesFormData);
    },
  },
}
</script>

<style scoped>
.playerNamesContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>