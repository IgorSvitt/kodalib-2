<script setup>

</script>

<template>
  <nav>
    <div class="row">
      <a class="name-button col-2 title" href="/public">
        Kodalib
      </a>
      <div class="col-9 name-button main">
        <a href="/catalog">
          Каталог
        </a>
        <a href="genres">
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
        <img src="../assets/icons/search.svg" class="icon-img" alt="search">
      </div>
      <div class="name-button col-1 user">
        <img src="../assets/icons/user.svg" class="icon-img" alt="user">
      </div>
    </div>

  </nav>
</template>

<style scoped>
.name-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-nav-button);
  margin: 0 10px;
  height: 70px;
  font-size: 20px;
}

a{
  color: var(--color-text);
}

.title {
  max-width: 173px;
  color: var(--color-kodalib);
}

.main {
  max-width: 754px;
  display: flex;
  justify-content: space-around;
  padding: 0 90px;
}

.user, .search {
  max-width: 76px;
}

.icon-img{
  width: 30px;
  height: 30px;
}
</style>