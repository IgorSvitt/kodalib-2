<script setup>
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import FilmItem from "@/components/common/film/FilmCard.vue";
import CommonFilm from "@/components/common/film/FilmCard.vue";

const props = defineProps({
  title: {
    type: String,
    default: 'дорамы'
  },
  filmType: {
    type: String,
    default: 'series'
  }
});

const store = useStore();
const films = ref(null)

onMounted(async () => {
  if (props.title === 'фильмы') {
    await store.dispatch("film/getNewFilms")
    films.value = store.state.film.films
  } else {
    await store.dispatch("series/getNewSeries")
    films.value = store.state.series.series
  }

})

</script>

<template>
  <div class="new__series_header">
    <div class="new__series_header__title">
      <h3>Новые {{props.title}}</h3>
    </div>
  </div>
  <div class="new__series">
    <div class="new__series__item" v-for="film in films" :key="film">
      <CommonFilm :film="film" :film-type="props.filmType"/>
    </div>
  </div>
</template>

<style scoped>
.new__series_header {
  margin: 20px 0;
}
.new__series_header__title {
  margin-bottom: 20px;
}
.new__series__item {
  margin-right: 20px;
  margin-bottom: 20px;
}
.new__series{
  display: flex;
  flex-wrap: wrap;
}

</style>