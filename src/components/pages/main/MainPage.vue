<script setup>
import CarouselNewsMainPage from "@/components/pages/main/CarouselNewsMainPage.vue";
import CarouselSeriesMainPage from "@/components/pages/main/CarouselSeriesMainPage.vue";
import {useStore} from "vuex";

const store = useStore()

const films = store.state.film.films
</script>

<template>
  <div class="news">
    <CarouselNewsMainPage/>
  </div>
  <div class="series">
    <CarouselSeriesMainPage :films="films"/>
  </div>
</template>

<style scoped>
.news {
  margin: 50px 0;
}
</style>