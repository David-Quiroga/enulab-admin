<template>
  <router-view></router-view>
</template>
<!-- <HeaderView />
<div id="app">
<aside class="sidebar">
  <nav>
    <ul>
      <li>
        <router-link to="/dashboard" class="active">
          <i class="fa-solid fa-chart-simple"></i> Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/menus">
          <i class="fa-solid fa-envelope"></i> Menu
        </router-link>
      </li>
      <li>
        <router-link to="/visualizar">
          <i class="fa-solid fa-table-cells-large"></i> Visualizar
        </router-link>
      </li>
      <li>
        <router-link to="/empleados">
          <i class="fa-solid fa-person"></i> Empleados
        </router-link>
      </li>
      <li>
        <router-link to="/pagos">
          <i class="fa-regular fa-credit-card"></i> Metodos de pago
        </router-link>
      </li>
      <li>
        <router-link to="/proveedores">
          <i class="fa-solid fa-user-group"></i> Proveedores
        </router-link>
      </li>
      <li>
        <router-link to="/inventario">
          <i class="fa-solid fa-file-invoice-dollar"></i> Inventario
        </router-link>
      </li>
    </ul>
  </nav>
</aside>
</div>
<router-view/>


<script>
  import HeaderView from './components/header/HeaderView.vue';
  export default {
  name: 'App',
  components: {
    HeaderView
  }
}
</script> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
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
background-color: #ffffff;
}

.sidebar {
flex: 0 0 215px;
background-color: #2C2E3A;
padding-top: 100px;
}

.main-content {
flex: 1; /* Ocupa todo el espacio disponible */
padding: 500px; /* Ajusta el espaciado según sea necesario */
margin-left: 500px; /* Asegura que el contenido no se solape con el sidebar */
}

nav ul {
list-style: none;
padding: 0;
}

nav ul li {
padding: 10px;
padding-left: 20px;
transition: transform 0.3s ease;
}

nav ul li a {
text-decoration: none;
color: #ffffff;
display: flex;
align-items: center;
font-size: 16px;
}

nav ul li a i {
margin-right: 10px;
}

nav ul li:hover {
transform: translateX(10px);
background-color: #505053;
width: 205px;
border-radius: 10px;
}
</style>