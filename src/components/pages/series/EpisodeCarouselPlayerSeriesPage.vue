<template>
  <div class="carousel__series">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="episode in $props.episodes" :key="episode.id">
          <EpisodePlayerSeriesPage :episodeInfo="episode" class="item"/>
        </Slide>
      <template #addons>
        <Navigation  v-if="$props.episodes.length > 4"/>
      </template>
    </Carousel>
  </div>


</template>

<script>
import {defineComponent} from 'vue'
import {Carousel, Navigation, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import EpisodePlayerSeriesPage from "@/components/pages/series/EpisodePlayerSeriesPage.vue";

export default defineComponent({
  props: {
    episodes: {
      type: Array,
      required: true,
    },
  },
  name: 'Breakpoints',
  components: {
    EpisodePlayerSeriesPage,
    Carousel,
    Slide,
    Navigation,
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
  height: 217px;
}

.carousel__series{
  margin-top: 30px;
}
</style>

