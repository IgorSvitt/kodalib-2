<script setup>
import {ref} from "vue";

const props = defineProps({
  seasonNumber: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  onSeasonClick: {
    type: Function,
    required: true
  }
})

const handleClick = () => {
  props.onSeasonClick(props.seasonNumber)
};

</script>

<template>
  <button class="season-btn" type="button" :class="{'active':isActive}" @click="handleClick">
    <span class="voice">{{ seasonNumber }} Сезон</span>
  </button>
</template>

<style scoped>
.season-btn {
  height: 50px;

  border-radius: 10px;
  background-color: #efefef;
  color: #1e1e1e;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 50px;
  text-align: left;
  transition: all 0.3s ease;
}

.season-btn:hover {
  background-color: #FF971D;
}

.season-btn.active {
  background-color: #FF971D;
  color: #efefef;
}
</style>