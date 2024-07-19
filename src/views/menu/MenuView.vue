<template>
    <HeaderView/>
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
      <h1>GESTION DE MENUS</h1>
  <!-- Contenedor de Sopas -->
    <div class="category-container">
      <div class="category-content">
        <div class="category-image-container">
          <img src="../../assets/img/ceviche.jpg" class="category-image" alt="Imagen de la categoría">
        </div>
        <MenuCategory
          title="Sopas"
          description="
            Las sopas son platos líquidos o semi-líquidos, 
            calientes o fríos, cocinados en caldo con ingredientes variados. 
            Se sirven como entrante y son nutritivas. Ejemplos: sopa de pollo, de tomate y gazpacho.."
          routePrefix="Sopas"
        />
      </div>
    </div>

  <!-- Contenedor de Entradas -->
    <div class="category-container">
      <div class="category-content">
        <div class="category-image-container">
          <img src="../../assets/img/entrada1.png" class="category-image" alt="Imagen de la categoría">
        </div>
        <MenuCategory
          title="Entradas"
          description="Las entradas son pequeños platos servidos antes del plato principal para abrir el apetito.
          Pueden ser frías o calientes y varían en ingredientes y preparación. 
          Ejemplos: ensalada César, bruschettas y croquetas."
          routePrefix="Entradas"
        />
      </div>
    </div>

  <!-- Contenedor de Bebidas -->
    <div class="category-container">
      <div class="category-content">
        <div class="category-image-container">
          <img src="../../assets/img/bebidas.png" class="category-image" alt="Imagen de la categoría">
        </div>
        <MenuCategory
          title="Bebidas"
          description="Las bebidas son líquidos que acompañan comidas o se disfrutan solos. 
          Pueden ser alcohólicas o no alcohólicas, como refrescos, jugos, vinos y cócteles. 
          Ejemplos: agua, refrescos, vinos, cervezas, jugos, margaritas y mojitos."
          routePrefix="Bebidas"
        />
      </div>
    </div>

  <!-- Contenedor de Postres -->
    <div class="category-container">
      <div class="category-content">
        <div class="category-image-container">
          <img src="../../assets/img/postres.png" class="category-image" alt="Imagen de la categoría">
        </div>
        <MenuCategory
          title="Postres"
          description="Los helados son postres congelados hechos con crema, leche y azúcar, con sabores y ingredientes adicionales como frutas y chocolate. 
          Son populares en climas cálidos por su textura cremosa y dulzura refrescante. Ejemplos: helado de vainilla, de chocolate y sorbetes de frutas."
          routePrefix="postres"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView.vue';
import MenuCategory from '../../components/categoria/CategoriaView.vue';

export default {
  name: 'MenuListView',
  components: {
    HeaderView,
    MenuCategory
  }
};
</script>

<style scoped>
.menus {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.cont_menus  {
  max-width: 1200px;
  width: 100%;
  margin-top: 80px;
  margin-left: 180px; /* Ajusta según la altura de tu header */
}
.category-container {
  margin-bottom: 150px;
  background-color: #e6e6e6;
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  display: flex;
  justify-content: flex-start; /* Alinear contenido hacia la izquierda */
/* Alinear contenido hacia la derecha */
}

.category-content {
  flex: 1; /* Ocupar todo el espacio disponible */
  display: flex;
  align-items: center;
}

.category-image-container {
  flex: 0 0 30%; /* Ancho fijo para la imagen */
  margin-right: 20px;
  left: 20 px;
  
}

.category-image {
  width: 100%;
  border-radius: 8px;
  height: 150px;
  margin-top: -60px;
}
h1  {
  color: #000;
}

</style>
