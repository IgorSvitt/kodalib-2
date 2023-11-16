<script setup>
import CarouselNewsMainPage from "@/components/pages/main/CarouselNewsMainPage.vue";
import CarouselSeriesMainPage from "@/components/pages/main/CarouselSeriesMainPage.vue";
import {useStore} from "vuex";
import LoadingBase from "@/components/UI/LoadingBase.vue";

const store = useStore()

const films = store.state.film.films
</script>

<template>
  <LoadingBase/>
  <div class="news">
    <CarouselNewsMainPage/>
  </div>
  <div class="series">
    <CarouselSeriesMainPage :films="films" :title="'Топ 10'"/>
  </div>
</template>

<style scoped>
.news {
  margin: 50px 0;
}
</style>