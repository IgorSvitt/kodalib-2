<script setup>

import EpisodeItemNewPage from "@/components/pages/new/EpisodeItemNewPage.vue";
</script>

<template>
  <div class="new__episodes_header">
    <div class="new__episodes_header__title">
      <h3>Новые серии</h3>
    </div>
  </div>
  <div class="new__episodes">
    <div class="new__episodes__item" v-for="episode in 8" :key="episode">
      <EpisodeItemNewPage/>
    </div>
  </div>
</template>

<style scoped>
.new__episodes_header {
  margin: 20px 0;
}
.new__episodes_header__title {
  margin-bottom: 20px;
}
.new__episodes__item {
  margin-bottom: 20px;
}
.new__episodes{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>