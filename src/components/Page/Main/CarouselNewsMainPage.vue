<script setup>
import CarouselNewsItemMainPage from "@/components/Page/Main/CarouselNewsItemMainPage.vue";
</script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <CarouselNewsItemMainPage :image="'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0891509c-24ad-4f8f-8e7a-527ebbe8d1c7/orig'"/>
      </div>
      <div class="carousel-item">
        <CarouselNewsItemMainPage :image="'https://ucare.timepad.ru/91198481-1d6f-4a5b-865c-22e335da577c/poster_event_2315049.jpg'"/>
      </div>
      <div class="carousel-item">
        <CarouselNewsItemMainPage :image="'https://a.viewy.ru/2022/06/11/dyshevno16549525024134.jpg'"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Предыдущий</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Следующий</span>
    </button>
  </div>
</template>

<style scoped>

.carousel-item{
  height: 550px;
}

button.active{
  background-color: #FF971D;
}

</style>