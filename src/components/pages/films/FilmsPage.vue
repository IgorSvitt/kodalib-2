<script setup>

import HeaderCatalogPage from "@/components/pages/catalog/HeaderCatalogPage.vue";
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import CommonFilm from "@/components/common/film/FilmCard.vue";

const films = ref(null)
const store = useStore()

onMounted(async () => {
  await store.dispatch("film/getFilms")
  films.value = store.state.film.films
  console.log(films.value)
})


</script>

<template>
  <div class="catalog-page">
    <div class="catalog-container">
      <div class="header">
        <HeaderCatalogPage/>
      </div>
      <ul class="films">
        <li v-for="film in films">
          <CommonFilm :film="film" :film-type="'film'"/>
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