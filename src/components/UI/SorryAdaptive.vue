<script setup>

</script>

<template>
  <div class="sorry">
    <h1>Извините, но сайт ещё не адаптирован под мобильные устройства</h1>
    <div class="social-media">
      <a href="https://vk.com/kodalib" target="_blank" class="social-media__link">
        <img src="@/assets/icons/vk.svg" alt="Вконтакте" class="social-media__img">
      </a>
      <a href="https://www.instagram.com/koda.lib/" target="_blank" class="social-media__link">
        <img src="@/assets/icons/instagram.svg" alt="Инстаграм" class="social-media__img">
      </a>
      <a href="https://t.me/kodalib" target="_blank" class="social-media__link">
        <img src="@/assets/icons/telegram.svg" alt="Телеграм" class="social-media__img">
      </a>
    </div>
  </div>

</template>

<style scoped>
.sorry {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: #ccc;
}
h1{
  font-size: 24px;
  text-align: center;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.social-media__link {
  margin: 0 10px;
}

.social-media__img {
  width: 30px;
  height: 30px;
}

</style>