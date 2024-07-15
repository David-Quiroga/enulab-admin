<template>
  <div class="menu-category">
    <div>
      <h1> {{title}}</h1>
    </div>
    <div class="category-description">
      <p>{{ description }}</p>
    </div>
    <div class="category-buttons">
      <router-link :to="'/crear/' + routePrefix">
        <button class="button">Agregar {{ title }}</button>
      </router-link>
      <router-link :to="'/ver/' + routePrefix">
        <button class="button-2">Ver Menú de {{ title }}</button>
        <h1>NO tenemos ninguna {{ title }} en lista</h1>
      </router-link>
    </div>
  </div>
</template>
<script src="../categoria/categoria.js"></script>
<style scoped src="../categoria/categoria.css"></style>

