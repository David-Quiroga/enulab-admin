<template>
  <div class="menus">
    <p class="sopas">Sopas</p>
    <MenuCategory 
      title="Sopas"
      description="Lorem ipsum dolor sit amet consectetur." 
      routePrefix="sopas" 
    />
    <img src="../../assets/img/sopas.png" class="imagen" alt="Imagen de la categoría">
    <p class="sopas">Entradas</p>
    <MenuCategory 
      title="Entradas" 
      description="Lorem ipsum dolor sit amet consectetur."  
      routePrefix="entradas" 
    />
    <img src="../../assets/img/entrada1.png" class="imagen" alt="Imagen de la categoría">
    <p class="sopas">Bebidas</p>
    <MenuCategory 
    title="Postres" 
    description="Lorem ipsum dolor sit amet consectetur."  
    routePrefix="postres" 
    />
    <img src="../../assets/img/bebidas.png" class="imagen" alt="Imagen de la categoría">
    <p class="sopas">Postres</p>
    <MenuCategory 
    title="Bebidas" 
    description="Lorem ipsum dolor sit amet consectetur."  
    routePrefix="bebidas" 
    />
    <img src="../../assets/img/postres.png" class="imagen" alt="Imagen de la categoría">
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
    border-radius: 10px;
    top: -29px;
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
  