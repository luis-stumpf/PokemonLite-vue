<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

</script>

<template>
    <div class="row">
      <div class="chooseTitleContainer">
        <div class="chooseTitle">{{ title }}</div>
      </div>
    </div>
</template>

<style scoped>

.chooseTitle {
  background-image: url("@/assets/images/PlayerNamesTitle.png");
  background-size: cover;
  width: 27.6rem;
  height: 7.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chooseTitleContainer {
  color: #626262;
  display: flex;
  font-size: 3.5rem;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-shadow: 2px 2px rgba(210, 212, 202, 100);
}

</style>