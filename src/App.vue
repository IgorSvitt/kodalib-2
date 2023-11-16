<script setup>
import HeaderBase from "@/components/UI/HeaderBase.vue";
import FooterBase from "@/components/UI/FooterBase.vue";
</script>

<template>
  <div class="main-field">
    <header>
      <HeaderBase/>
    </header>
    <main>
      <router-view/>
    </main>

    <footer>
      <FooterBase/>
    </footer>
  </div>
  <div class="sorry">
    <h1>Извините, но сайт ещё не адаптирован под мобильные устройства</h1>
  </div>
</template>

<style scoped>

.sorry {
  display: none;
}
@media (max-width: 1140px) {
  .main-field {
    display: none;
  }

  .sorry {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #ccc;
  }
  h1{
    font-size: 30px;
    text-align: center;
  }
}
</style>
