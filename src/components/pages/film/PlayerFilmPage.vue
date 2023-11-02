<script setup>
import {ref} from "vue";

const props = defineProps({
  voiceover: {
    type: Array,
    required: true
  }
})
const activeVoiceover = ref(0)
</script>

<template>
  <div class="player-container">
    <div class="player">
      <iframe :src="voiceover[activeVoiceover].linkToWatch" width="610" height="370"
              frameborder="0"
              allowfullscreen allow="autoplay *; fullscreen *"></iframe>
    </div>
    <div class="voiceover">
      <button v-for="(voice,index) in voiceover" :key="index" class="voice-btn" :class="{active:(index===activeVoiceover)}" type="button" @click="activeVoiceover = index">
        <span class="voice">{{ voice.voiceover.title }}</span>
      </button>
    </div>
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
}

.voice:hover{
  border-bottom: 2px solid #FF971D;
}

.voice-btn.active{
  color: #FF971D;
}
</style>