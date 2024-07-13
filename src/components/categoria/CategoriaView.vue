<template>
  <div class="menu-category">
    <p>{{ description }}</p>
    <router-link :to="'/crear/' + routePrefix">
      <button>Agregar {{ title }}</button>
    </router-link>
    <router-link :to="'/ver/' + routePrefix">
      <button>Ver Menú de {{ title }}</button>
    </router-link>
  </div>
</template>
<script src="../categoria/categoria.js"></script>
<style scoped src="../categoria/categoria.css"></style>

