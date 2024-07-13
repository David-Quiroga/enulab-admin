<template>
      <HeaderView />
  <div id="app">
    <aside class="sidebar">
      <!-- <div class="logo">
        <h1><span class="open">Open</span><span class="blind">Blind</span></h1>
      </div> -->
      <nav>
        <ul>
          <li>
            <router-link to="/" class="active">
              <i class="fa-solid fa-chart-simple"></i> Dashboard
            </router-link>
          </li>
          <li>
            <router-link to="/menus">
              <i class="fa-solid fa-envelope"></i> Menu
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-table-cells-large"></i> Visualizar
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-person"></i> Empleados
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa-regular fa-credit-card"></i> Metodos de pago
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-user-group"></i> Proveedores
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-file-invoice-dollar"></i> Inventario
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
  <router-view/>
</template>

<script>
  import HeaderView from './components/header/HeaderView.vue';
  export default {
  name: 'App',
  components: {
    HeaderView
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  min-height: 100vh; 
  background-color: #f0f5fb;
}

.sidebar {
  flex: 0 0 215px; 
  background-color: #2C2E3A;
  padding-top: 100px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  padding: 10px;
  padding-left: 20px;
  transition: transform 0.3s ease; /* Añadir transición a los elementos del menú */
}

nav ul li a {
  text-decoration: none;
  color: #6c757d;
  display: flex;
  align-items: center;
  font-size: 16px; /* Tamaño de fuente aumentado para elementos de menú */
}

nav ul li a i {
  margin-right: 10px;
}

nav ul li:hover {
  transform: translateX(10px); /* Desplazar hacia la derecha al pasar el mouse */
}



</style>