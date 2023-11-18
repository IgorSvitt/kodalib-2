<script setup>

</script>

<template>
  <div class="comments-container">
    <div class="comment-title">
      Комментарии
    </div>
    <div class="comments">
      Комментариев пока нет :(
    </div>
  </div>
</template>

<style scoped>
.comments-container {
  border-radius: 10px;
  background-color: var(--color-background-mute);
  padding: 15px 20px;
  display: block;
  width: 100%;
}

.comment-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text-black);
}

.comments{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
}
</style>