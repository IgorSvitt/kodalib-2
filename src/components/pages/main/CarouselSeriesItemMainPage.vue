<script>
import {computed, onMounted, ref} from 'vue';


function useColorRating(rating) {
  return computed(() => {
    if (rating > 7.0) {
      return '#3bb33b';
    } else if (rating < 6.0) {
      return '#ff0000';
    } else {
      return '#777777';
    }
  });
}
export default {
  props: {
    filmInfo: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const imageSrc = ref('');
    const loading = ref(true);

    onMounted(() => {
      // Здесь вы можете выполнить запрос на сервер для загрузки изображения
      const imageUrl = props.filmInfo.poster;

      const img = new Image();
      img.src = imageUrl;


      img.onload = () => {
        imageSrc.value = imageUrl;
        loading.value = false;
      };
    });

    const ratingColor = useColorRating(props.filmInfo.ratingKoda);

    return {
      imageSrc,
      loading,
      title: props.filmInfo.title,
      id: props.filmInfo.id,
      rating: props.filmInfo.ratingKoda.toFixed(1),
      ratingColor,
    };
  },
};
</script>

<template>
  <div class="loader-container">
    <div v-if="loading" class="loader"></div>
    <div class="image-container" v-else>
        <button class="series-item" type="button" @click="$router.push('/series/' + id)">
          <img :src="imageSrc" alt="Изображение" class="img-news">
        </button>
      <div class="buttons">
        <button class="like" type="button">
          <img src="@/assets/icons/bookmark.svg" alt="play" class="bookmark">
        </button>
      </div>
      <div class="rating" :style="{ background: ratingColor}">
        {{rating}}
      </div>
      <div class="title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-container {
  width: 100%;
  height: 100%;
}

.img-news {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.buttons{
  position: absolute;
  top: 10px;
  right: 10px;
}

button {
  border: none;
}

.like {
  background-color: #fff;
  border-radius: 10px;
  width: 43px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bookmark{
  width: 17px;
  height: 17px;
}

.loader {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 394px;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
}

.rating{
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  width: 43px;
  height: 35px;
  border-radius: 10px;
}

.title{
  font-size: 18px;
  color: #1e1e1e;
  font-weight: 600;
  width: 100%;
  margin-top: 5px;
  text-align: left;
}

.series-item{
  border: none;
  background: none;
  width: 100%;
  height: 394px;
}

@keyframes loading {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
