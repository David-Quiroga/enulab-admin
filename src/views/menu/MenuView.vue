<template>
  <div class="menus">
   <div class="cont_menus">
    <h1>GESTION DE MENUS</h1>
    <!-- Contenedor de Sopas -->
     <div class="category-container">
       <div class="category-content">
         <div class="category-image-container">
           
           <img src="../../assets/img/sopas.png" class="category-image" alt="Imagen de la categoría">
         </div>
         <MenuCategory
           title="Sopas"
           description="Lorem ipsum dolor sit amet consectetur."
           routePrefix="sopas"
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
           description="Lorem ipsum dolor sit amet consectetur."
           routePrefix="entradas"
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
          description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  "
          routePrefix="bebidas"
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
          description="Lorem ipsum dolor sit amet consectetur."
          routePrefix="postres"
         />
       </div>
     </div>
   </div>
   </div>
</template>

<script>
import MenuCategory from '../../components/categoria/CategoriaView.vue';

export default {
  name: 'MenuListView',
  components: {
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
  background-color: #FFFFFF;
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
  height: auto;
}
h1  {
  color: #6C6C6C;
  font-family: montserrat; 
}

</style>
