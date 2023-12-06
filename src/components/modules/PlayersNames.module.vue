<template>
  <div class="container-fluid">
    <div class="row">
      <div class="chooseTitleContainer">
        <div class="chooseTitle">CHOOSE YOUR NAMES !</div>
      </div>
    </div>
    <div class="row">
      <div class="playerNamesContainer">
        <div class="playerName1">
          <label class="playerName-label" for="player1Name">PLAYER 1 ?</label>
          <input class="inputNames" type="text" id="player1Name" name="player1Name" required>
          <span class="cursor" id="cursor1">_</span>
        </div>
        <br>
        <div class="playerName2">
          <label class="playerName-label" for="player2Name">PLAYER 2 ?</label>
          <input class="inputNames" type="text" id="player2Name" name="player2Name" required>
          <span class="cursor" id="cursor2">_</span>
        </div>
      </div>
      <div class="confirmButtonContainer">
        <input class="confirmButton" id="confirmButton" type="button" value="CONFIRM">
      </div>
      <div style="display: flex; flex-direction: column;  align-items: center;">
        <span class="confirm-shadow"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerNamesModule',
  components: {
  },
  computed: {
  },
}
</script>

<style scoped>
@titleBackground: url("../images/PlayerNamesTitle.png");
@fontColour: #626262;
@navBarColour: rgba(193, 229, 252, 0.94);
@textShadow: 2px 2px rgba(210, 212, 202, 100);

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

.confirmButton {
    padding-bottom: 2.5vh;
    font-size: 7vh;
    width: 27vh;
    background-image: url("@/assets/images/confirmButton.png");
    background-size: cover;
    font-family: 'Pokemon Fire Red', sans-serif;
    color: white;
    border: none;
    background-color: transparent;
    height: 12vh;
    transition: filter 0.3s;
    text-shadow:
            -1.5px -1.5px 0 #558c87,
            1.5px -1.5px 0 #558c87,
            -1.5px  1.5px 0 #558c87,
            1.5px  1.5px 0 #558c87;
}

.confirmButtonContainer {
    display: flex;
    justify-content: center;
    padding-top: 20vh;
}

.confirmButton:hover {
    filter: brightness(1.2);
}

.confirm-shadow {
    width: 33vh !important;
    height: 17vh;
    z-index: -99;
    margin-top: -12.5vh !important;
    background: radial-gradient(ellipse at center, #4e7844 19%, transparent 67%);
}

.cursor {
    color: #626262;
    display: none;
    font-size: 4.3vh;
    left: 0;
    margin-left: 20.3vh;
    position: absolute;
    text-shadow: 2px 2px rgba(210, 212, 202, 100);
    top: 5.3vh;
}

@keyframes blink {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}

.inputNames:focus + .cursor {
    display: inline-block;
    animation: blink 0.7s infinite;
}

.inputNames {
    caret-color: transparent;
    margin-left: 15vh;
    height: 3vh;
    width: 26vh !important;
    margin-top: -0.8vh;
    border: none !important;
    outline: none;
    font-family: 'Pokemon Fire Red', sans-serif;
    color: #626262 !important;
    font-size: 4vh;
    text-shadow: 2px 2px rgba(210, 212, 202, 100);
    text-transform: uppercase;
}

.playerNamesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.playerName1 {
    background-image: url("@/assets/images/yourName.png");
    background-size: cover;
    margin-left: 4vh;
    margin-right: 4vh;
    margin-top: 3vh;
    width: 51vh;
    height: 13.4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.playerName2 {
    background-image: url("@/assets/images/yourName2.png");
    background-size: cover;
    margin-left: 4vh;
    margin-right: 4vh;
    margin-top: 3vh;
    width: 51vh;
    height: 13.4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.playerName-label {
    font-family: 'Pokemon Fire Red', sans-serif;
    color: #626262;
    padding-left: 19vh;
    padding-top: 0.3vh;
    font-size: 5.3vh;
    letter-spacing: -0.15vh;
    text-shadow: 2px 2px rgba(210, 212, 202, 100);
}


</style>