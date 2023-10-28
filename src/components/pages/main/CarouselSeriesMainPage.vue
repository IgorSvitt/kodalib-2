<template>
  <div class="carousel-series">
    <h3 class="title-article">Название</h3>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="film in $props.films" :key="film.id">
        <carousel-series-item-main-page :filmInfo="film" title="slide" class="item"/>
      </Slide>

      <template #addons>
        <Navigation/>
      </template>
    </Carousel>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {Carousel, Navigation, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import CarouselSeriesItemMainPage from "@/components/pages/main/CarouselSeriesItemMainPage.vue";

export default defineComponent({
  props: {
    films: {
      type: Array,
      required: true,
    },
  },
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
    CarouselSeriesItemMainPage
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  }),
})
</script>

<style scoped>
.item {
  width: 270px;
  height: 434px;
}

.title-article {
  margin-left: 7.5px;
}

.carousel-series{
  margin : 100px 0;
}
</style>
