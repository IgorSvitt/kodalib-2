<script setup>
import {ref, onMounted, defineProps, computed} from 'vue';
import {useStore} from "vuex";

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

const store = useStore();
const activeEpisode = ref(1);

const handleChangeEpisode = async (linkToWatch, number) => {
  await store.commit("series/setEpisode", linkToWatch);
  activeEpisode.value = number;
  console.log(activeEpisode.value);
};

const isActiveEpisode = computed(() => {
  return activeEpisode.value === props.episodeInfo.number;
});

</script>

<template>
  <button class="episode" @click="handleChangeEpisode(episodeInfo.linkToWatch, episodeInfo.number)">
    <div class="episode__img">
      <div v-if="loading" class="loader"></div>
      <img :src="episodeInfo.poster" alt="episode poster" v-else/>
    </div>
    <div class="episode__info">
      <div class="episode__number" :class="{'active':isActiveEpisode}">{{ episodeInfo.number }} серия</div>
    </div>
  </button>
</template>


<style scoped>
.episode {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
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
  background-color: #ccc;
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