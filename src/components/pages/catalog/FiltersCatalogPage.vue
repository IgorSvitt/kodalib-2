<script setup>

</script>

<template>
  <div class="filters__catalog">
    <div class="filters__catalog-container">
      <div class="filters__catalog-title">
      </div>
      <div class="filters__inputs">
        <div class="input__filter">
          <input type="text" placeholder="Поиск по каталогу" class="search"/>
        </div>
        <div class="input__filter year">
          <input type="text" placeholder="Год c ..." class="year"/>
          <input type="text" placeholder="Год по ..." class="year"/>
        </div>
        <div class="input__filter">
          <input type="text" placeholder="Жанр" class="genre"/>
        </div>
        <div class="input__filter">
          <input type="text" placeholder="Страна" class="country"/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.filters__catalog {
  background: #efefef;
  height: 100%;
  border-radius: 10px;
  width: 367px;
}

.filters__inputs {
  display: block;
}

.input__filter {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: right;
  padding-right: 20px;
}

.input__filter.year {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: right;
  padding-right: 20px;
}

.input__filter input {
  height: 40px;
  width: 173px;
  border-radius: 10px;
  border: none;
  padding-right: 20px;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  text-align: right;
  background-color: #d3d3d3;
}

input::placeholder {
  color: #000;
  text-align: right;
  font-size: 14px;
  line-height: 17px;
}

.input__filter input.year{
  width: 100px;
  margin-left: 20px;
}

.input__filter input.search {
  width: 80%;
}

input:focus {
  outline: none;
}

</style>