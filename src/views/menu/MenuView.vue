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
           description="Las sopas son platos líquidos o semi-líquidos que se preparan mediante la cocción de diversos ingredientes en un caldo. Pueden ser calientes o frías y se sirven típicamente como entrante o primer plato. Las sopas pueden contener carnes, verduras, legumbres, y granos, y son muy apreciadas por su sabor reconfortante y nutritivo. Ejemplos incluyen sopa de pollo, sopa de tomate y gazpacho."
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
           description="Las entradas son pequeños platos que se sirven antes del plato principal para abrir el apetito. Pueden ser frías o calientes y varían ampliamente en cuanto a ingredientes y preparación. Las entradas pueden incluir ensaladas, aperitivos, tapas y pequeños bocados. Ejemplos comunes son ensalada César, bruschettas, y croquetas."
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
          description="Las bebidas son líquidos que se sirven para acompañar las comidas o simplemente para disfrutar. Pueden ser alcohólicas o no alcohólicas y varían desde refrescos y jugos hasta vinos y cócteles. Las bebidas se eligen a menudo para complementar el sabor de la comida. Ejemplos incluyen agua, refrescos, vinos, cervezas, jugos naturales y cócteles como margaritas o mojitos."
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
          description="Los helados son postres congelados hechos principalmente a base de crema, leche y azúcar, a los que se les añaden diferentes sabores y a menudo ingredientes adicionales como frutas, chocolate, nueces, y otros. Son una opción popular especialmente en climas cálidos y se disfrutan por su textura cremosa y su dulzura refrescante. Ejemplos incluyen helado de vainilla, helado de chocolate y sorbetes de frutas."
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
