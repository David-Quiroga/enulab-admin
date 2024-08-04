<template>
  <HeaderView />
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
  <!-- ! Termina el SIDEBAR -->
   
  <div class="menus">
    
    <div class="cont_menus">
      <h1>Gestion de menus</h1>
      <!-- Contenedor de Sopas -->
      <div class="category-content">
        <div class="category-image-container">
          <h2>SOPAS</h2>
          <img src="../../assets/img/sopas25.png" class="category-image" alt="Imagen de la categoría" />
        </div>
        <div class="category-container">
          <router-link to="/formSopas">
            <button class="add">Agregar</button>
          </router-link>
          <router-link to="/sopas">
            <button class="add">Ver lista de sopas</button>
          </router-link>
        </div>
      </div>


      <!-- Contenedor de Entradas -->
      <div class="category-content">
        <div class="category-image-container">
          <h2>ENTRADAS</h2>
          <img src="../../assets/img/entra.png" class="category-image" alt="Imagen de la categoría" />
        </div>
        <div class="category-container">
          
        </div>
      </div>

      <!-- Contenedor de Bebidas -->
      <div class="category-content">
        <div class="category-image-container">
          <h2>BEBIDAS</h2>
          <img src="../../assets/img/bebu.png" class="category-image" alt="Imagen de la categoría" />
        </div>
        <div class="category-container">
          
        </div>
      </div>

      <!-- Contenedor de Postres -->
      <div class="category-content">
        <div class="category-image-container">
          <h2>POSTRES</h2>
          <img src="../../assets/img/postres.png" class="category-image" alt="Imagen de la categoría" />
        </div>
        <div class="category-container">
          <router-link to="/formHelados">
            <button class="add">Agregar</button>
          </router-link>
          <router-link to="/helados">
            <button class="add">Ver lista de helados</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from "@/components/header/HeaderView.vue";
//import MenuCategory from "../../components/categoria/CategoriaView.vue";

export default {
  name: "MenuListView",
  components: {
    HeaderView,
  },
};
</script>

<style scoped>
.add{
  z-index: 1;
  position: relative;
  top: 10px;
  left: 100px;
}
.menus {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
}
.cont_menus {
  max-width: 1200px;
  width: 100%;
  margin-top: 80px;
  margin-left: 180px; /* Ajusta según la altura de tu header */
}
.category-container {
  flex: 1; /* Asegúrate de que el contenedor ocupe todo el espacio disponible */
  background-color: #656565;
  max-width: 750px;
  max-height: 150px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-right: -500px;
  transform: translateY(18px);
  margin-top: -10px;
  height:220px;
}

.category-content {
  flex: 1; /* Ocupar todo el espacio disponible */
  display: flex;
  align-items: center;
}

.category-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin-right: -50px;
  margin-left: -50px;
  z-index: 10;
  margin-top: 30px;
  height: fit-content;
  transform: translateZ(0); /* Para activar el efecto 3D */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2), 0px 0px 25px rgba(0, 0, 0, 0.2); /* Sombra para el efecto 3D */
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  border-radius: 15px;


}
.category-image-container:hover {
  transform: translateY(-10px) scale(1.05); /* Efecto de elevar y agrandar al pasar el mouse */
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.3), 0px 0px 35px rgba(0, 0, 0, 0.3); /* Sombra más pronunciada al pasar el mouse */
}

.category-image {
  width: 100%;
  
  border-radius: 15px;
  height: auto;
  
}
h1 {

  color: #6c6c6c;
  font-family: montserrat;
  margin-left: -20px;
}
.category-image-container h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 24px;
  font-family: montserrat;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
</style>