<script>
import {ref, onMounted} from 'vue';

export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const imageSrc = ref('');
    const loading = ref(true);

    onMounted(() => {
      // Здесь вы можете выполнить запрос на сервер для загрузки изображения
      const imageUrl = props.image;

      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        imageSrc.value = imageUrl;
        loading.value = false;
      };
    });

    return {imageSrc, loading};
  },
};
</script>

<template>
  <div class="loader-container">
    <div v-if="loading" class="loader"></div>
    <div class="image-container" v-else>
      <img :src="imageSrc" alt="Изображение" class="img-news">
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
  overflow: hidden;
}

.img-news {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

button {
  border: none;
}

.watch {
  background-color: #FF971D;
  color: #fff;
  padding: 5px 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
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
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bookmark{
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

@keyframes loading {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
