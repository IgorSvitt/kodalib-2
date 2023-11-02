<script setup>
import HeaderBase from "@/components/UI/HeaderBase.vue";
import FooterBase from "@/components/UI/FooterBase.vue";
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
