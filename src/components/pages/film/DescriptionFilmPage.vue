<script setup>
import {computed} from "vue";

const props = defineProps({
  film: {
    title: String,
    ratingKoda: Number,
    ratingKinopoisk: Number,
    plot: String,
    directors: Array,
    actors: Array,
    genres: Array,
    countries: Array,
    year: Number,
    writers: Array,
    required: true,
  },
});

function useColorRating(rating) {
  return computed(() => {
    if (rating > 7.0) {
      return '#3bb33b';
    } else if (rating < 6.0) {
      return '#ff0000';
    } else {
      return '#777777';
    }
  })
}

const ratingColor = useColorRating(props.film.ratingKoda);


</script>

<template>
  <div class="description-container">
    <div class="title-rating">
      <div class="title-container">
        <span class="title"> {{ props.film.title }}</span>
        <span class="country" v-for="country in props.film.countries" :key="country">
        {{ country }}	&ensp;
      </span>
        <span class="year">
        {{ props.film.year }}
      </span>
      </div>

      <span class="rating" :style="{color: ratingColor}" >
        {{ props.film.ratingKoda.toFixed(1) }}
      </span>
    </div>
    <div class="plot">
      {{ props.film.plot }}
    </div>

    <div class="info-container">
      <span class="info-title">Режиссер</span>
      <div class="info" v-for="director in props.film.directors" :key="director">
        {{ director }} &ensp;
      </div>
    </div>
    <div class="info-container">
      <span class="info-title">Сценаристы</span>
      <div class="info" v-for="writer in props.film.writers" :key="writer">
        {{ writer }} &ensp;
      </div>
    </div>
    <div class="info-container">
      <span class="info-title">Актеры</span>
      <div class="info">
        <span class="actor" v-for="actor in props.film.actors" :key="actor">
          {{ actor }} &ensp;
        </span>
      </div>
    </div>
    <div class="info-container">
      <span class="info-title">Рейтинг КП</span>
      <span class="info">{{ props.film.ratingKinopoisk.toFixed(1) }}</span>
    </div>
  </div>

</template>

<style scoped>
.description-container {
  display: block;
  width: 100%;
  background-color: #EFEFEF;
  border-radius: 10px;
  padding: 15px 20px;
}

.title-rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-container {
  display: inline-block;
  width: 100%;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #1e1e1e;
  margin-right: 20px;
}

.year, .country {
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: 400;
}


.plot {
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
}

.info-container {
  margin: 10px 0;
  display: flex;
}

.info-title {
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
  min-width: 100px;
}

.info {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  flex-wrap: wrap;
}

.rating{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 28px;
  font-weight: 700;
  margin-left: auto;
}

</style>