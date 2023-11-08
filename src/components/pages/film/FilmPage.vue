<script setup>
import {useStore} from "vuex";
import DescriptionFilmPage from "@/components/pages/film/DescriptionFilmPage.vue";
import CommentsFilmPage from "@/components/pages/film/CommentsFilmPage.vue";
import PhotosFilmPage from "@/components/pages/film/PhotosFilmPage.vue";
import PlayerFilmPage from "@/components/pages/film/PlayerFilmPage.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const store = useStore()
const route = useRoute()
const information = ref(null)
const isLoaded = ref(false)



onMounted(async () => {
  if (store.state.film.info.id === 0) {
    await store.dispatch("film/getFilm", route.params.id)
  }
  isLoaded.value = true
  information.value = store.state.film.info
  if (information.value && information.value.title) {
    document.title = information.value.title;
  }
})
</script>

<template>
  <div class="film-page" v-if="isLoaded && information">
    <div class="film-player">
     <PlayerFilmPage :voiceover="information.voiceovers"/>
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

</template>

<style scoped>
.film-player {
  margin: 50px 0;
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
