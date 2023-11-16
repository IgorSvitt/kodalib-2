<script setup>
import HeaderBase from "@/components/UI/HeaderBase.vue";
import FooterBase from "@/components/UI/FooterBase.vue";
import SorryAdaptive from "@/components/UI/SorryAdaptive.vue";
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
  <SorryAdaptive class="sorry"/>
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
  }
}
</style>
