<script setup>
import LoadingBase from "@/components/UI/LoadingBase.vue";
</script>

<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="text-center">
      <h1 class="display-1 fw-bold">404</h1>
      <p class="fs-3"> <span>Оййй!</span> Страница не найдена.</p>
      <p class="lead">
        Этой страницы не существует.
      </p>
      <a href="/" class="btn"><span class="to-home">На главную</span></a>
    </div>
  </div>
</template>

<style scoped>
.btn{
  background: linear-gradient(135deg, #f50 69.93%, #d6bb00);
  border: none;
}
span{
  color: var(--color-kodalib);
}


.to-home:hover, .to-home{
  color: #fff;
}
</style>