<template>
    <div class="row">
      <div class="chooseTitleContainer">
        <div class="chooseTitle">{{ title }}</div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

.chooseTitle {
    background-image: url("@/assets/images/PlayerNamesTitle.png");
    background-size: cover;
    width: 56vh;
    height: 14.8vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.chooseTitleContainer {
    color: #626262;
    display: flex;
    font-family: 'Pokemon Fire Red', sans-serif;
    font-size: 7vh;
    justify-content: center;
    padding-top: 5vh;
    padding-bottom: 11vh;
    text-shadow: 2px 2px rgba(210, 212, 202, 100);
}

</style>