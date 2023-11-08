<script>
import {computed, onMounted, ref} from 'vue';
import ModalPhotoFilmPage from "@/components/pages/film/ModalPhotoFilmPage.vue";


export default {
  components: {ModalPhotoFilmPage},
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
      const imageUrl = props.photo

      const img = new Image();
      img.src = imageUrl;


      img.onload = () => {
        imageSrc.value = imageUrl;
        loading.value = false;
      };
    });

    const modalOpen = ref(false);

    const openModal = () => {
      modalOpen.value = true;
    };

    const closeModal = () => {
      modalOpen.value = false;
    };


    return {
      imageSrc,
      loading,
      closeModal,
      openModal,
      modalOpen
    };
  },
};
</script>

<template>
  <div class="loader-container">
    <div v-if="loading" class="loader"></div>
    <div class="image-container" v-else>
      <img :src="imageSrc" alt="Изображение" class="img-news" @click="openModal" >
      <ModalPhotoFilmPage :photo="photo" @click="closeModal" v-if="modalOpen"/>
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

.image-container:hover {
  cursor: pointer;
}

.img-news {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #EFEFEF;
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
