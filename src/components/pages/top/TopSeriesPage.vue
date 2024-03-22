<script setup>

import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import LoadingBase from "@/components/UI/LoadingBase.vue";
import FilmCard from "@/components/common/film/FilmCard.vue";

const store = useStore();
const film = ref(null)

const isLoaded = ref(false)

onMounted(async () => {
  await store.dispatch("series/getTopSeries")
  film.value = store.state.series.series
  console.log(film.value)
  isLoaded.value = true
})
</script>

<template>
  <LoadingBase/>
  <div class="top__series__container">
    <div class="top__episodes__header">
      <div class="top__episodes__header__title">
        <h3>Топ Дорам</h3>
      </div>
    </div>
    <div class="top__episodes">

      <div class="top__episodes__item" v-for="item in film" :key="item">
        <FilmCard :film="item" :film-type="'series'"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top__series__container {
  margin: 50px 0;
}

.top__episodes__header {
  margin: 20px 0;
}

.top__episodes__header__title {
  margin-bottom: 20px;
}

.top__episodes__item {
  margin-right: 20px;
  margin-bottom: 20px;
}

.top__episodes {
  display: flex;
  flex-wrap: wrap;
}

</style>