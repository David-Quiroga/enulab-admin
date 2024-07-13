<template>
  <div class="menus">
    <p class="sopas">Sopas</p>
    <MenuCategory 
      description="Lorem ipsum dolor sit amet consectetur." 
      routePrefix="sopas" 
    />
    <img src="../../assets/img/sopas.png" class="imagen" alt="Imagen de la categoría">
    <p class="sopas">Sopas</p>
    <MenuCategory 
      title="Entradas" 
      description="Lorem ipsum dolor sit amet consectetur."  
      routePrefix="entradas" 
      image="@/assets/entradas.jpg" 
    />
    <img src="../../assets/img/sopas.png" class="imagen" alt="Imagen de la categoría">
    <p class="sopas">Sopas</p>
    <MenuCategory 
      title="Postres" 
      description="Lorem ipsum dolor sit amet consectetur."  
      routePrefix="postres" 
      image="@/assets/postres.jpg" 
    />
    <img src="../../assets/img/sopas.png" class="imagen" alt="Imagen de la categoría">
    <p class="sopas">Sopas</p>
    <MenuCategory 
      title="Bebidas" 
      description="Lorem ipsum dolor sit amet consectetur."  
      routePrefix="bebidas" 
      image="@/assets/bebidas.jpg" 
    />
    <img src="../../assets/img/sopas.png" class="imagen" alt="Imagen de la categoría">
  </div>
</template>
  
  <script>
  import MenuCategory from '../../components/categoria/CategoriaView.vue';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Menus',
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
  .imagen{
    position: relative;
    top: -10px;
    left: 30px;
    width: 40%;
  }
  .sopas{
    position: relative;
    top:  10%;
    color: white;
    z-index: 1;
    left: 15px;
    font-family: 'Georgia, serif';
    font-size: 25px;
  }
  </style>
  