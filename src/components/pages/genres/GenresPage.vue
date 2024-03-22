<script setup>
import GenreItemGenresPage from "@/components/pages/genres/GenreItemGenresPage.vue";


const genres = [
  {
    id: 1,
    name: 'Боевик',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/boevik.jpg'
  },
  {
    id: 2,
    name: 'Детектив',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/detektiv.jpg'
  },
  {
    id: 3,
    name: 'Драма',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/drama.jpg'
  },
  {
    id: 4,
    name: 'Исторический',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/istoricheskiy.jpg'
  },
  {
    id: 5,
    name: 'Комедия',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/komediya.jpg'
  },
  {
    id: 6,
    name: 'Мелодрама',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/melodrama.jpg'
  },
  {
    id: 7,
    name: 'Мистика',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/mistika.jpg'
  },
  {
    id: 8,
    name: 'Приключения',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/priklyucheniya.jpg'
  },
  {
    id: 9,
    name: 'Триллер',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/triller.jpg'
  },
  {
    id: 10,
    name: 'Ужасы',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/uzhasy.jpg'
  },
  {
    id: 11,
    name: 'Фантастика',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/fantastika.jpg'
  },
  {
    id: 12,
    name: 'Фэнтези',
    img: 'https://kodalib.ru/wp-content/uploads/2021/08/fentezi.jpg'
  }
]
</script>

<template>
  <div class="genres__page">
    <div class="genres__page__content">
      <div class="genres__page__content__items" v-for="item in genres" :key="id">
        <GenreItemGenresPage :genre="item"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.genres__page {
  width: 100%;
  margin: 50px 0;
}
.genres__page__content {
  display: flex;
  flex-wrap: wrap;
}
.genres__page__content__items {
  margin: 7px;
}
</style>