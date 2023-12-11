<script setup>

import '@/utils/turn';
const mounted = () => {
  $('#flipbook').turn({
    gradients: true,
    acceleration: true,
    autoCenter: false,
  });
};

</script>

<template>
  <div ref="flipbookContainer" class="bookContainer">
      <div id="flipbook">
        <div class="hard front-cover-front"></div>
        <div class="hard front-cover-back"></div>

        <div class="page-background own-size" style="width:37vh; height:45vh;">
          <div class="page-text">
            <span style="font-size: 2.5vh; font-weight: bold">Welcome to PokemonLite!</span>
            <br>
            <p>A fun and interactive game that brings the world of Pokemon to your web browser</p>
          </div>
        </div>
        <div class="page-background own-size" style="width:37vh; height:45vh;">
          <div class="page-text">
            <span style="font-size: 2.5vh; font-weight: bold">How to play:</span>
            <br>
            <ul>
              <li>Choose your names first.</li>
              <br>
              <li>Select three Pokemon to form your team. Each Pokemon has its own unique abilities.</li>
              <br>
              <li>Battle other trainers and become the ultimate Pokemon Master!</li>
            </ul>
          </div>
        </div>
        <div class="page-background own-size" style="width:37vh; height:45vh;">
          <div class="page-text">
            <span style="font-size: 2.5vh; font-weight: bold">Game Rules:</span>
            <br>
            <ul>
              <li>At the start of each battle, you must choose between two actions: 'Fight' or 'Switch Pokemon.'</li>
              <br>
              <li>'Fight' allows your active Pokemon to use its special move against the opponent.</li>
            </ul>
          </div>
        </div>
        <div class="page-background own-size" style="width:37vh; height:45vh;">
          <div class="page-text">
            <ul>
              <li>'Switch Pokemon' enables you to switch your current Pokemon with another from your team.</li>
              <br>
              <li>The battle continues until one trainer's team is defeated, or the player's last Pokemon faints.</li>
            </ul>
          </div>
        </div>
        <div class="page-background own-size" style="width:37vh; height:45vh;">
          <div class="page-text">
            <span style="font-size: 2.5vh; font-weight: bold">History of PokemonLite:</span>
            <br>
            <p>PokemonLite is a project born out of a passion for both Pokemon and web development. Developed as an exercise for the Web-Application lecture at HTWG Konstanz, it has grown into a full-fledged Scala Play Project.</p>
          </div>
        </div>
        <div class="page-background own-size" style="width:37vh; height:45vh;">
          <div class="page-text">
            <p>Originally created for the Software Engineering course, PokemonLite is now a dynamic online platform where players can engage in epic battles with their favorite Pokemon.</p>
          </div>
        </div>
        <div class="page-background own-size" style="width:37vh; height:45vh;">
          <div class="page-text">
            <span style="font-size: 2.5vh; font-weight: bold">How to interact with the code:</span>
            <br>
            <ul>
              <li>Compile the code with 'sbt compile.'</li>
              <br>
              <li>Run the game using 'sbt run.'</li>
              <br>
              <li>Open 'localhost:9000' on your browser and experiment with the game</li>
            </ul>
          </div>
        </div>
        <div class="page-background own-size" style="width:37vh; height:45vh;">
          <div class="page-text">
          </div>
        </div>

        <div class="fixed hard back-cover"></div>
      </div>
  </div>
</template>

<style scoped>
.bookContainer {
  font-family: 'Press Start 2P', sans-serif;
  font-size: 1.5vh;
  margin-top: 40vh !important;
  transform: translateX(-19vh);
  transition-duration: 2s;
  width: 80vh !important;
}

.back-cover {
  background-image: url("@/assets/images/bookCoverEmptyBack.png");
  background-size: cover;
  border-radius: 2vh;

}

.front-cover-back {
  background-image: url("@/assets/images/bookCoverEmptyFront.png");
  background-size: cover;
  border-radius: 2vh;

}

.front-cover-front {
  background-image: url("@/assets/images/bookCover.png");
  background-size: cover;
  border-radius: 2vh;
}

.page-background {
  position: relative;
  width: 37vh;
  height: 45vh;
}

.page-background::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 99%;
  background-color: #fff9e4;
  background-image: url("data:image/png;base64,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");
  box-shadow: 0 0 40px #aa8f55 inset,
  0 0 3px rgb(119, 102, 93) !important;
  color: #2e1806;
  filter: url(#wavy2);
}

.page-text {
  position: relative;
  margin: 3vh;
}

#flipbook {
  border-radius: 1vh;
  width: 80vh;
  height: 50vh;
}

#flipbook .page {
  border-radius: 1vh;
  width: 40vh;
  height: 50vh;
}

.shadow {
  display: none !important;
}
</style>