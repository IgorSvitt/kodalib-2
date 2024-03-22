<script setup>
import {useStore} from "vuex";
import DescriptionFilmPage from "@/components/pages/film/DescriptionFilmPage.vue";
import CommentsFilmPage from "@/components/pages/film/CommentsFilmPage.vue";
import PhotosFilmPage from "@/components/pages/film/PhotoFilmPage.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import PlayerSeriesPage from "@/components/pages/series/PlayerSeriesPage.vue";
import SeriesPageSkeleton from "@/components/pages/series/SeriesPageSkeleton.vue";

const store = useStore()
const route = useRoute()
const information = ref(null)
const isLoaded = ref(false)

const props = defineProps({
  numberEpisode: {
    type: Number,
    required: true,
  },
  numberSeason: {
    type: Number,
    required: true,
  },
  voiceover: {
    type: Array,
    required: true,
  },
});


onMounted(async () => {
  try{
    isLoaded.value = false
    if (store.state.series.info.id === 0) {
      console.log(route.params.id)
      await store.dispatch("series/getSeries", route.params.id)
    }

    information.value = store.state.series.info
    console.log(information.value)
    if (information.value && information.value.title) {
      document.title = information.value.title;
    }
  } catch (e) {
    console.log(e)
  }
  finally {
    isLoaded.value = true
  }
})
</script>

<template>
  <div class="film-page" v-if="isLoaded && information">
    <div class="film-player">
      <PlayerSeriesPage :voiceover="information.voiceiversSeries"/>
    </div>
    <div class="film-info">
      <div>
        <div class="description">
          <DescriptionFilmPage :film="information"/>
        </div>
        <div class="comments">
          <CommentsFilmPage/>
        </div>
      </div>
      <div class="photos">
        <div v-for="photo in information.photos" :key="photo.id" class="photo">
          <PhotosFilmPage :photo="photo.link"/>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!isLoaded">
    <SeriesPageSkeleton/>
  </div>
</template>

<style scoped>
.film-player {
  margin: 100px 0;
  width: 100%;
}



.film-info {
  display: flex;
  justify-content: center;
  width: 100%;
}

.description, .comments {
  width: 100%;
  max-width: 657px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.photos {
  width: 100%;
  max-width: 463px;
}

.film-page {
  margin-bottom: 100px;
}

.photo {
  width: 460px;
  height: 244px;
  margin-bottom: 20px;
}
</style>
