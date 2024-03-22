<script setup>
import {onMounted, ref, watch} from "vue";
import SeasonsPlayerSeriesPage from "@/components/pages/series/SeasonsPlayerSeriesPage.vue";
import {useStore} from "vuex";

const props = defineProps({
  voiceover: {
    type: Array,
    required: true
  }
})

const activeVoiceover = ref(0)
const activeEpisode = ref(props.voiceover[activeVoiceover.value].seasons[0].episodes[0].linkToWatch)
const store = useStore()

watch(() => store.state.series.episode, (newEpisode) => {
  activeEpisode.value = newEpisode;
  console.log(newEpisode)
})


const handleChangeVoiceover = (index) => {
  activeVoiceover.value = index;
};


</script>

<template>
  <div class="player-container">
    <div class="player">
      <iframe :src="activeEpisode" width="610" height="370"
              allowfullscreen allow="autoplay *; fullscreen *"></iframe>
    </div>
    <div class="voiceover">
      <button v-for="(voice,index) in voiceover" :key="index" class="voice-btn" :class="{active:(index===activeVoiceover)}" type="button" @click="handleChangeVoiceover(index)">
        <span class="voice">{{ voice.voiceover.name }}</span>
      </button>
    </div>
  </div>
  <div class="seasons">
    <SeasonsPlayerSeriesPage :seasons="voiceover[activeVoiceover].seasons" />
  </div>
</template>

<style scoped>
.player-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

}
.player{
  width: 885px;
  height: 500px;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #EFEFEF;
}

.player iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.voiceover{
  background-color: #1e1e1e;
  width: 235px;
  height: 500px;
  border-radius: 10px;
  color: #EFEFEF;
  padding: 20px;
  font-size: 24px;
  font-family: 'Ubuntu', sans-serif;
}


.voice-btn{
  background-color: transparent;
  border: none;
  color: #EFEFEF;
  font-size: 24px;
  font-family: 'Ubuntu', sans-serif;
  cursor: pointer;
  outline: none;
  text-align: left;
}

.voice:hover{
  border-bottom: 2px solid #FF971D;
}

.voice-btn.active{
  color: #FF971D;
}

.seasons{
  margin-top: 50px;
}
</style>