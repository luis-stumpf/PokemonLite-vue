<script setup>

import { useRouter } from 'vue-router'

const router = useRouter();

const startGame = () => {
    router.push('/init');
};

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 col-sm-9 col-md-11 col-lg-12 offset-md-0 offset-sm-1 text-center position-absolute">
          <img class="titleImage img-fluid" src="@/assets/images/Logo.png" alt="">
      </div>
      <div class="text-end col-md-8 offset-md-4 col-sm-3 offset-sm-9 text-end">
          <button id="rulesButton" class="bookButton">
            <img class="bookImage img-fluid" src="@/assets/images/bookIcon.png" alt="">
          </button>
      </div>
    </div>
    <div class="row">
      <div class="col-11 col-sm-12 col-md-12 col-lg-12 text-center">
          <button id="startButton" class="pokeballButton" @click="startGame">
              <img class="pokeballImage img-fluid" src="@/assets/images/pokeball.png" alt="">
              <span class="ball-shadow"></span>
              <span class="startText"> Start!</span>
          </button>
      </div>
    </div>
  </div>

</template>

<style scoped>

.titleImage {
  width: 77vh;
  margin-top: 3vh;
}

.ball-shadow {
    width: 17vh;
    height: 7vh;
    z-index: -99;
    margin-top: -4.7vh;
    background: radial-gradient(ellipse at center, #4e7844 10%, transparent 75%);
}

.bookButton {
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: 2vh;
    overflow: hidden;
    position: relative;
}

.bookImage {
    width: 14vh;
    transition: filter 0.3s;
}

.bookImage:hover {
    filter: brightness(1.5);
}

.pokeballButton {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-grid;
    margin-top: 20em;
    overflow: hidden;
    position: relative;
}

.pokeballImage {
    transition: filter 0.3s;
    width: 17vh;
}

.pokeballImage:hover {
    animation: wiggle 1s ease infinite;
    filter: brightness(1.2);
}

@keyframes wiggle {
    0% {
        transform: rotate(0) translateX(0) translateY(0);
    }
    10% {
        transform: rotate(2deg) translateX(1px) translateY(1px);
    }
    20% {
        transform: rotate(-2deg) translateX(-1px) translateY(-1px);
    }
    30% {
        transform: rotate(1deg) translateX(0.5px) translateY(0.5px);
    }
    40% {
        transform: rotate(-1deg) translateX(-0.5px) translateY(-0.5px);
    }
    50% {
        transform: rotate(0.5deg) translateX(0) translateY(0);
    }
    60% {
        transform: rotate(-0.5deg) translateX(0) translateY(0);
    }
    70% {
        transform: rotate(0) translateX(0) translateY(0);
    }
    100% {
        transform: rotate(0) translateX(0) translateY(0);
    }
}

.pokeballButton:hover + .startText {
    filter: brightness(1.2);
}

.startText {
    color: #fdc905;
    font-family: 'Press Start 2P', sans-serif;
    font-size: 2rem;
    letter-spacing: 3px;
    text-shadow:
            -1.5px -1.5px 0 #395ea9,
            1.5px -1.5px 0 #395ea9,
            -1.5px  1.5px 0 #395ea9,
            1.5px  1.5px 0 #395ea9;
    text-transform: uppercase;
    transition: filter 0.3s;
}

</style>