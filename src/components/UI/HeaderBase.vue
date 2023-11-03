<script setup>

</script>

<template>
  <nav>
    <div class="row">
      <a class="name-button col-2 title" href="/">
        K오DALIB
      </a>
      <div class="col-9 name-button main">
        <a href="/catalog">
          Каталог
        </a>
        <a href="/genres">
          Жанры
        </a>
        <a href="/new">
          Новое
        </a>
        <a href="/top">
          ТОП - 200
        </a>
        <a href="/films">
          Фильмы
        </a>
      </div>
      <div class="name-button col-1 search">
        <img src="../../assets/icons/search.svg" class="icon-img" alt="search">
      </div>
      <div class="name-button col-1 user">
        <img src="../../assets/icons/user.svg" class="icon-img" alt="user">
      </div>
    </div>

  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

.name-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-nav-button);
  margin: 0 10px;
  height: 60px;
  font-size: 20px;
  flex-wrap: nowrap;
}

a{
  color: var(--color-text);
}

.title {
  max-width: 173px;
  color: var(--color-kodalib);
  font-size: 24px;
  font-family: 'Black Han Sans', sans-serif;
  padding: 0;
  margin: 0 auto;
}

.main {
  max-width: 754px;
  display: flex;
  justify-content: space-around;
  padding: 0 90px;
  width: 100%;
}

.user, .search {
  max-width: 76px;
}

.icon-img{
  width: 20px;
  height: 20px;
}
</style>