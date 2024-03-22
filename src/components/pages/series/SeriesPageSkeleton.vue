<script setup>
</script>

<template>
  <div class="player__container__loader loader">
    <div class="player__container__loader__player"></div>
    <div class="player__container__loader__player__voiceovers"></div>
  </div>
  <div class="series__loader__seasons_container">
    <div class="series__loader__seasons"></div>
    <div class="series__loader__episodes">
      <div v-for="i in 4" :key="i">
        <div class="series__loader__episode"></div>
        <div class="series__loader__episode__title"></div>
      </div>
    </div>
  </div>
  <div class="information__container__loader loader">
    <div>
      <div class="description__container__loader"></div>
      <div class="comments__container__loader"></div>
    </div>
    <div class="photo__container__loader loader">
      <div class="photo__loader"></div>
      <div class="photo__loader"></div>
      <div class="photo__loader"></div>
    </div>
  </div>
</template>

<style scoped>
.player__container__loader {
  display: flex;
  align-items: center;
  margin: 100px 0;
  width: 100%;
  height: 500px;
}

.player__container__loader__player {
  width: 885px;
  height: 500px;
  margin-right: 20px;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
  border-radius: 10px;
}

.player__container__loader__player__voiceovers {
  width: 235px;
  height: 100%;
  background: #1e1e1e;
  border-radius: 10px;
}

.information__container__loader {
  display: flex;
  justify-content: center;
  width: 100%;
}

.description__container__loader {
  width: 657px;
  height: 400px;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
}

.comments__container__loader {
  width: 100%;
  max-width: 657px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
  border-radius: 10px;
}

.photo__loader {
  width: 100%;
  max-width: 463px;
  height: 244px;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
  border-radius: 10px;
  margin-bottom: 20px;
}

.photo__container__loader {
  width: 100%;
  max-width: 463px;
}

.series__loader__seasons_container {
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.series__loader__seasons {
  height: 50px;
  width: 105px;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
  border-radius: 10px;
  margin-bottom: 20px;
}

.series__loader__episode {
  width: 270px;
  height: 177px;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
  border-radius: 10px;
  margin-right: 20px;
}

.series__loader__episodes {
  margin-bottom: 50px;
  display: flex;
}

.series__loader__episode__title {
  width: 100px;
  height: 30px;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
  border-radius: 5px;
  margin-top: 20px;
}


@keyframes loading {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>