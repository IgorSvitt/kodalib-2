<script setup>

import FiltersCatalogPage from "@/components/pages/catalog/FiltersCatalogPage.vue";
import NewsCatalogPage from "@/components/pages/catalog/NewsCatalogPage.vue";
</script>

<template>
  <div class="header__catalog">
    <div class="header__catalog__container">
      <NewsCatalogPage />
      <FiltersCatalogPage />
    </div>
  </div>
</template>

<style scoped>

.header__catalog__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 290px;
}

.header__catalog{
  height: 100%;
}
</style>