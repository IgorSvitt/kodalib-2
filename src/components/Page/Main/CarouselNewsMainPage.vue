<script setup>
import CarouselNewsItemMainPage from "@/components/Page/Main/CarouselNewsItemMainPage.vue";

const film1 = {
  imageLink: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0891509c-24ad-4f8f-8e7a-527ebbe8d1c7/orig',
  title: 'Королевство зомби',
  rating: 6.7,
  description: 'Королевство — это история о борьбе монстров за власть в исторических декорациях. В эпоху Чосон Корею охватила неизвестная эпидемия. \n' +
      'Главный герой — принц Ли Чан. Отвергнутый всеми и объявленный предателем, он будет прорубать путь к трону через толпы ходячих мертвецов. Сохранит ли он человеческое лицо?'
}

const film2 = {
  imageLink: 'https://ucare.timepad.ru/91198481-1d6f-4a5b-865c-22e335da577c/poster_event_2315049.jpg',
  title: 'Паразиты',
  rating: 8.0,
  description: 'Семья бедняков обманом и хитростью устраивается на работу в дом богачей. Скрывая родство друг с другом, герои пользуются имуществом своих обманутых работодателей в их отсутствие. Чтобы сохранить секрет, находчивые жулики пойдут на любые, даже самые отчаянные меры.'
}

const film3 = {
  imageLink: 'https://a.viewy.ru/2022/06/11/dyshevno16549525024134.jpg',
  title: 'Истинная красота',
  rating: 5.3,
  description: 'Старшеклассница Лим Джу-гён с комплексом по поводу своей внешности привыкла краситься и достигла в этом деле определённого мастерства. Она начинает встречаться с двумя самыми видными парнями.'
}
</script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="10">
        <CarouselNewsItemMainPage :film="film1"/>
      </div>
      <div class="carousel-item" data-interval="10">
        <CarouselNewsItemMainPage :film="film2"/>
      </div>
      <div class="carousel-item" data-interval="10">
        <CarouselNewsItemMainPage :film="film3"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.carousel-item {
  height: 550px;
}

button.active {
  background-color: #FF971D;
}

</style>