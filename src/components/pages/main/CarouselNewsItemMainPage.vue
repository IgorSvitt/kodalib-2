<template>
  <div class="loader-container">
    <div v-if="loading" class="loader"></div>
    <div class="image-container" v-else>
      <img :src="imageSrc" alt="Изображение" class="img-news">
    </div>
    <div class="movie-info">
      <div class="gradient-overlay">
        <div class="movie-details">
          <div class="title">{{ title }}<span :style="{ background: ratingColor}" class="rating-num"> {{
              rating
            }}</span></div>
          <p class="description">{{ description }}</p>
          <div class="buttons">
            <button class="watch" type="button">
              <img src="@/assets/icons/play.svg" alt="play" class="play">
              Смотреть
            </button>
            <button class="like" type="button">
              <img src="@/assets/icons/bookmark.svg" alt="play" class="bookmark">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from 'vue';

// Создание пользоватского хука для цветного рейтинга
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
    film: {
      imageLink: String,
      title: String,
      rating: Number,
      description: String,
      required: true,
    },
  },
  setup(props) {
    const imageSrc = ref('');
    const loading = ref(true);

    onMounted(() => {
      const imageUrl = props.film.imageLink;

      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        imageSrc.value = imageUrl;
        loading.value = false;
      };
    });

    // Используйте пользоватский хук для определения цвета рейтинга
    const ratingColor = useColorRating(props.film.rating);

    return {
      imageSrc,
      loading,
      title: props.film.title,
      rating: props.film.rating.toFixed(1),
      description: props.film.description,
      ratingColor,
    };
  },
};
</script>

<style scoped>
.loader-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.img-news {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.buttons {
  display: flex;
  margin: 20px 0;
}

button {
  border: none;
}

.watch {
  background: linear-gradient(135deg, #f50 69.93%, #d6bb00);
  color: #fff;
  padding: 5px 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.play {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

.like {
  margin-left: 18px;
  background-color: #fff;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bookmark {
  width: 20px;
  height: 20px;
}

.loader {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite; /* Увеличили продолжительность до 4 секунд */
}

.movie-info {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%; /* Ширина прямоугольника слева */
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 60%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
}

.title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: left;
}

.description {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: left;
  color: #fff
}

.rating-num {
  display: inline-block;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-left: 15px;
  width: 50px;
  border-radius: 10px;
}

.movie-details {
  padding: 10px;
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
