<script setup>
import CarouselNewsMainPage from "@/components/Page/Main/CarouselNewsMainPage.vue";
import CarouselSeriesMainPage from "@/components/Page/Main/CarouselSeriesMainPage.vue";
</script>

<template>
  <div class="news">
    <CarouselNewsMainPage/>
  </div>
  <div class="series">
    <CarouselSeriesMainPage/>
  </div>
</template>

<style scoped>
.news {
  margin: 50px 0;
}
</style>