<script setup>
import {useStore} from "vuex";
import DescriptionFilmPage from "@/components/pages/film/DescriptionFilmPage.vue";
import CommentsFilmPage from "@/components/pages/film/CommentsFilmPage.vue";
import PhotosFilmPage from "@/components/pages/film/PhotosFilmPage.vue";

const store = useStore()
const photos = ["https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8cc58883-6c8a-4edb-9ab5-bfa5713e22b4/orig",
  "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bdda55b8-8f29-48d0-bbd7-b26d11a61fda/orig",
  "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/bb21adce-1cd7-4951-b838-1e41bfe85f5c/orig",
  "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/ccae3abb-c12e-4ae5-8fef-b40f8a7226a1/orig",
]
const film = store.state.film.info
</script>

<template>
  <div class="film-page">
    <div class="player">
      <iframe src="//kodik.cc/video/39523/3e3c091400ff81435c1ac207f9ddbe8f/720p" width="610" height="370"
              frameborder="0"
              allowfullscreen allow="autoplay *; fullscreen *"></iframe>
    </div>
    <div class="film-info">
      <div>
        <div class="description">
          <DescriptionFilmPage :film="film"/>
        </div>
        <div class="comments">
          <CommentsFilmPage/>
        </div>
      </div>

      <div class="photos">
        <div v-for="photo in photos" :key="photo" class="photo">
          <PhotosFilmPage :photo="photo"/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.player {
  margin: 50px 0;
  height: 600px;
}

.player iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
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
