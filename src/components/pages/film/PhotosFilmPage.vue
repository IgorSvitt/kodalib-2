<script>
import {computed, onMounted, ref} from 'vue';


export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const imageSrc = ref('');
    const loading = ref(true);

    onMounted(() => {
      // Здесь вы можете выполнить запрос на сервер для загрузки изображения
      const imageUrl = props.photo

      const img = new Image();
      img.src = imageUrl;


      img.onload = () => {
        imageSrc.value = imageUrl;
        loading.value = false;
      };
    });


    return {
      imageSrc,
      loading,
    };
  },
};
</script>

<template>
  <div class="loader-container">
    <div v-if="loading" class="loader"></div>
    <div class="image-container" v-else>
      <img :src="imageSrc" alt="Изображение" class="img-news">
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

button {
  border: none;
}

.loader {
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ccc 25%, #ddd 50%, #ccc 75%);
  background-size: 200% 100%;
  animation: loading 4s infinite;
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
