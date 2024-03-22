<script setup>

import EpisodesNewPage from "@/components/pages/new/EpisodesNewPage.vue";
import FilmsNewPage from "@/components/pages/new/FilmsNewPage.vue";
import LoadingBase from "@/components/UI/LoadingBase.vue";
</script>

<template>
  <LoadingBase/>
  <div class="new__page">
    <div class="new__page__item">
      <EpisodesNewPage/>
    </div>
    <div class="new__page__item">
      <FilmsNewPage :title="'дорамы'" :filmType="'series'"/>
    </div>
    <div class="new__page__item">
      <FilmsNewPage :title="'фильмы'" :filmType="'film'"/>
    </div>
  </div>
</template>

<style scoped>
.new__page {
  margin: 50px 0;
}
</style>