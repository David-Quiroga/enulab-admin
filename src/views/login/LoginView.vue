<template>
    <div>
      <h1>Login</h1>
      <router-link to="/dashboard">
        <button>Iniciar Sesion (ir a dashboard)</button>
      </router-link>
      <br>
      <router-link to="/registro">
        <button>Registro</button>
      </router-link>
      <!-- Contenido del formulario de login -->
    </div>
</template>

<script>
export default {name: 'LoginView'};
</script>

<style scoped>
  /* Estilos específicos para el componente de login */
</style>
