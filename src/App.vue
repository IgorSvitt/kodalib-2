<script setup>
import HeaderBase from "@/components/UI/HeaderBase.vue";
import FooterBase from "@/components/UI/FooterBase.vue";
import SorryAdaptive from "@/components/UI/SorryAdaptive.vue";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";


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

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: var(--color-nav-button);
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
