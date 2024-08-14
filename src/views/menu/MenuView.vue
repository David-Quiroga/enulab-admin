<template>
  <HeaderView />
  <aside class="sidebar">
    <nav>
      <ul>
        <li>
          <router-link to="/dashboard" class="active sidebar-link">
            <i class="fa-solid fa-chart-simple"></i> <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/menus" class="active sidebar-link">
            <i class="fa-solid fa-envelope"></i> <span>Menu</span>
          </router-link>
        </li>
        <li>
          <router-link to="/visualizar" class="active sidebar-link">
            <i class="fa-solid fa-table-cells-large"></i> <span>Visualizar</span>
          </router-link>
        </li>
        <li>
          <router-link to="/empleados" class="active sidebar-link">
            <i class="fa-solid fa-person"></i> <span>Empleados</span>
          </router-link>
        </li>
        <li>
          <router-link to="/pagos" class="active sidebar-link">
            <i class="fa-regular fa-credit-card"></i> <span>Metodos de pago</span>
          </router-link>
        </li>
        <li>
          <router-link to="/proveedores" class="active sidebar-link">
            <i class="fa-solid fa-user-group"></i> <span>Proveedores</span>
          </router-link>
        </li>
        <li>
          <router-link to="/inventario" class="active sidebar-link">
            <i class="fa-solid fa-file-invoice-dollar"></i> <span>Inventario</span>
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
          <div class="desc">
            <p>Las sopas son platos líquidos, servidos calientes o fríos, 
              que pueden ser ligeros o sustanciosos. Se elaboran con una base de caldo, 
              vegetales, carne o pescado, y pueden incluir ingredientes adicionales como pasta o legumbres.</p>
          </div>

          <div class="botons">
            <router-link to="/formSopas">
              <button class="add">Agregar</button>
            </router-link>
            <router-link to="/sopas">
              <button class="ver-btn">Ver lista de Sopas</button>
            </router-link>
          </div>
        </div>
      </div>


      <!-- Contenedor de Entradas -->
      <div class="category-content">
        <div class="category-image-container">
          <h2>ENTRADAS</h2>
          <img src="../../assets/img/entra.png" class="category-image" alt="Imagen de la categoría" />
        </div>
        <div class="category-container">
          <div  class="desc">
            <p>Nuestras sopas están hechas con ingredientes frescos y naturales, 
              cocinadas a fuego lento para ofrecerte un sabor reconfortante y nutritivo.</p>
          </div>
          <div class="botons">
            <router-link to="/formEntradas">
              <button class="add">Agregar</button>
            </router-link>
            <router-link to="/entradas">
              <button class="ver-btn">Ver lista de Entradas</button>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Contenedor de Bebidas -->
      <div class="category-content">
        <div class="category-image-container">
          <h2>BEBIDAS</h2>
          <img src="../../assets/img/bebu.png" class="category-image" alt="Imagen de la categoría" />
        </div>
        <div class="category-container">
          <div  class="desc">
            <p>Acompaña tu comida con nuestras bebidas cuidadosamente seleccionadas, 
              desde refrescantes jugos naturales hasta cócteles y vinos de excelente calidad.</p>
          </div>
          <div class="botons">
            <router-link to="/formBebidas">
              <button class="add">Agregar</button>
            </router-link>
            <router-link to="/bebidas">
              <button class="ver-btn">Ver lista de Bebidas</button>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Contenedor de Postres -->
      <div class="category-content">

        <div class="category-image-container">
          <h2>POSTRES</h2>
          <img src="../../assets/img/postres.png" class="category-image" alt="Imagen de la categoría" />
        </div>

        <div class="category-container">
          <div  class="desc">
            <p>Nuestros postres son el final perfecto para tu comida, 
              elaborados con ingredientes de primera calidad para brindar una experiencia dulce y memorable.</p>
          </div>
          <div class="botons">
            <router-link to="/formHelados">
              <button class="add">Agregar</button>
            </router-link>
            <router-link to="/helados">
              <button class="ver-btn">Ver lista de Postres</button>
            </router-link>
          </div>
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
  background-color: rgba(255, 122, 0, 0.8);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  width: 150px;
  height: 35px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
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
  background-color: #848484;
  max-width: 850px;
  max-height: 150px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-right: -500px;
  transform: translateY(18px);
  margin-top: -10px;
  height:220px;
  display: flex;
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
.ver-btn{
  background-color: rgba(0, 148, 255, 0.8);
  border: none;
  border-radius: 5px;
  color: #ffffff;
  width: 150px;
  height: 40px;
  font-weight: 600;
  cursor: pointer;
  
}
.desc{
  color: #ffffff;
  font-weight: 300;
  width: 800px;
  margin-left: 50px;
}
.botons{
  margin-left: 30px;
}
@media (max-width: 720px) {
  .sidebar {
    max-width: 70px;
  }

  .sidebar-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }

  .sidebar-link span {
    display: none;
  }

  .sidebar-link i {
    font-size: 1.5em;
  }

  h1{
    margin-top: 20px;
    margin-left: -70px;
  }
  .menus{
    max-width: 720px;
    margin: 0;
    padding: 0;
  }
  .category-content{
    margin: 20px 0 0 -30px;
    padding: 0;
    width: 80%;
  }
  .category-image-container{
    width: 200px;
    margin-left: 0;
    margin-top: 0;
  }
  .category-image{
    width: 200px;
  }
  .category-container{
    max-width: 350px;
    height: 110px;
    margin-top: -30px;
  }
  .desc{
    display: none;
  }
  .botons{
    width: 200px;
    margin: auto;
    margin-right: -5px;
    margin-top: -13px;
  }
  .add{
    height: 30px;
  }
}


</style>