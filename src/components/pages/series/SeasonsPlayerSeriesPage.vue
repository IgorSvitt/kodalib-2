<script setup>
import SeasonButtonPlayerSeriesPage from "@/components/pages/series/SeasonButtonPlayerSeriesPage.vue";
import {ref, watch} from "vue";
import EpisodeCarouselPlayerSeriesPage from "@/components/pages/series/EpisodeCarouselPlayerSeriesPage.vue";

const props = defineProps({
  seasons: {
    type: Array,
    required: true
  },
})

const activeSeason = ref(props.seasons[0].number);

const handleSeasonClick = (index) => {
  activeSeason.value = index;
};

watch(() => props.seasons, (newSeasons) => {
  activeSeason.value = newSeasons[0].number;
});

</script>

<template>
  <div class="season__btns">
    <div v-for="(season,index) in seasons" :key="index" class="season__btn">
      <SeasonButtonPlayerSeriesPage :seasonNumber="season.number" :isActive="activeSeason === index+1"
                                    :onSeasonClick="handleSeasonClick"/>
    </div>
  </div>
  <div class="episodes__carousel">
    <EpisodeCarouselPlayerSeriesPage :episodes="seasons[activeSeason-1].episodes"/>
  </div>
</template>

<style scoped>
.season__btns {
  display: flex;
}

.season__btn {
  margin-right: 10px;
}

.episodes__carousel{
  height: 217px;
}
</style>