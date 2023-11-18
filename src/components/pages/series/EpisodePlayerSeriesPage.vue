<script setup>
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps({
  episodeInfo: {
    type: Object,
    required: true
  }
});

const loading = ref(true);

onMounted(() => {
  const img = new Image();
  img.src = props.episodeInfo.poster;

  img.onload = () => {
    loading.value = false;
  };
});
</script>

<template>
  <div class="episode">
    <div class="episode__img" >
      <div v-if="loading" class="loader"></div>
      <img :src="episodeInfo.poster" alt="episode poster" v-else>
    </div>
    <div class="episode__info">
      <div v-if="loading" class="loader"></div>
      <div class="episode__number" v-else>{{ episodeInfo.number }} серия</div>
    </div>
  </div>
</template>


<style scoped>
.episode {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.episode__img {
  width: 270px;
  height: 177px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.episode__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.episode__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
}

.episode__number {
  font-size: 20px;
  font-weight: 500;
  color: #1e1e1e;
}

.loader {
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