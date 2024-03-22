<script setup>

import HeaderCatalogPage from "@/components/pages/catalog/HeaderCatalogPage.vue";

import LoadingBase from "@/components/UI/LoadingBase.vue";
import CommonFilm from "@/components/common/film/FilmCard.vue";
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

const store = useStore()
const series = ref(null)

onMounted(async () => {
  await store.dispatch("series/getTopSeries")
  series.value = store.state.series.series
  console.log(series.value)
})

</script>

<template>
  <LoadingBase/>
  <div class="catalog-page">
    <div class="catalog-container">
      <div class="header">
        <HeaderCatalogPage/>
      </div>
      <ul class="films">
        <li v-for="series in series">
          <CommonFilm :film-type="'series'" :film="series"/>
        </li>

      </ul>
    </div>
  </div>

</template>

<style scoped>
.header {
  margin: 50px 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  max-width: 1140px;
}

li {
  width: 270px;
  list-style-type: none;
  margin-right: 20px;
  margin-bottom: 20px;
}

li:nth-child(4n) {
  margin-right: 0;
}
</style>