<script async setup>
import {computed, onMounted, ref} from 'vue';


const props = defineProps({
  film: {
    type: Object,
    required: true,
  },
  filmType: {
    type: String,
    required: true,
  },
});

const useColorRating = (rating) => computed(() => {
  if (rating > 7.0) {
    return '#3bb33b';
  } else if (rating < 6.0) {
    return '#ff0000';
  } else {
    return '#777777';
  }
});

const imageSrc = ref('');
const isLoaded = ref(false);

onMounted(() => {
  const imageUrl = props.film.posterLink;
  const img = new Image();
  img.src = imageUrl;
  img.onload = () => {
    imageSrc.value = imageUrl;
    isLoaded.value = true;
  };
});

const ratingColor = useColorRating(props.film.ratingKoda);
const rating = computed(() => props.film.ratingKoda);
const title = computed(() => props.film.title);
const id = computed(() => props.film.id);

</script>

<template>
  <div class="loader__container">
    <div v-if="!isLoaded" class="loader"></div>
    <div class="image__container" v-else>
      <button class="series__item" type="button" @click="$router.push(`/${filmType}/${id}`)">
        <img :src="imageSrc" :alt="title" class="img__news">
      </button>
      <div class="buttons">
        <button class="like" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="17" height="17">
            <path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z" fill="#1e1e1e"/>
          </svg>
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
.loader__container {
  position: relative;
  width: 270px;
  height: 390px;
}

.image__container {
  width: 270px;
  height: 390px;
  transition: all 0.3s ease;
}

.img__news {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: all 0.3s ease;
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
  transition: transform 0.3s ease
}

.like:hover {
  transform: scale(1.04);
}

.like:hover svg path {
  fill: #f50;
  transition: fill 0.3s ease;
}

.like svg path {
  transition: fill 0.3s ease;
}


.loader {
  position: absolute;
  border-radius: 10px;
  width: 270px;
  height: 390px;
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
  text-align: center;
}

.title{
  font-size: 18px;
  color: #1e1e1e;
  font-weight: 600;
  width: 100%;
  margin-top: 5px;
  text-align: left;
  margin-left: 5px;
  transition: all 0.3s ease;
}

.image__container:hover .title{
  color: var(--color-kodalib);
  transition: all 0.3s ease;
}

.image__container:hover .img__news{
  opacity: 0.5;
  transition: all 0.3s ease;
}

.series__item{
  border: none;
  background: none;
  width: 100%;
  height: 100%;
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
