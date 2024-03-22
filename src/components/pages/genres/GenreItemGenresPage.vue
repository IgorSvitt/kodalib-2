<script setup>
const props = defineProps({
  genre: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="item__genre">
<!--    <img :src="genre.img" alt="genre" class="item__genre__img">-->
    <p class="item__genre__title">
      {{ genre.name }}
    </p>
  </div>
</template>

<style scoped>
.item__genre {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 173px;
  border-radius: 10px;
  background-color: #EFEFEF;
}
</style>