<script setup>
import HeaderBase from "@/components/HeaderBase.vue";
import FooterBase from "@/components/FooterBase.vue";
import MainPage from "@/components/pages/main/MainPage.vue";
</script>

<template>
    <header>
      <HeaderBase/>
    </header>
    <main>
      <router-view/>
    </main>

    <footer>
      <FooterBase/>
    </footer>
</template>

<style scoped>
</style>
