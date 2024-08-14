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
    <!-- Contenido principal -->
    <main>
      <div class="hero">
        <h1 class="titulo">Creacion de Métodos de pago</h1>
      </div>
  
      <!-- Formulario de información del restaurante -->
      <div class="formulario">
        <div>
          <h4>Nombre del metodo</h4>
          <input  placeholder="" v-model="nombre" required>
        </div>
  
        
      </div>
  
      <!-- Botones de navegación -->
      <div class="botones">
        <router-link to="/Pagos">
            <button class="btn-back">← Atras</button>
        </router-link>
        <button class="btn-conf" @click="createMetodo">Continuar</button>
      </div>
    </main>
  
    <!-- Información adicional -->
    <div class="izq1">
      <h4>Estado</h4>
      <select v-model="estado" required>
        <option value="" disabled>Seleccione un estado</option>
        <option value="activo">activo</option>
        <option value="inactivo">inactivo</option>
      </select>
    </div>
  </template>
  
  
  <script>
  import HeaderView from '@/components/header/HeaderView.vue';
  import axios from 'axios';
    import Swal from 'sweetalert2';
  
  export default {
    name: 'MenuListView',
    components: {
      HeaderView
    },
    data() {
      return {
        nombre: "",
        estado: ""
      };
    },
    methods: {
       validateForm() {
         if (!this.nombre ) {
           return 'Todos los campos son obligatorios';
         }  
         return null; // Indica que no hay errores
       },
       async createMetodo() {
         const validationError = this.validateForm();
         if (validationError) {
           Swal.fire({
             title: 'Error',
             text: validationError,
             icon: 'info',
             confirmButtonText: 'Aceptar'
           });
           return;
         }
  
         try {
           const MetodoData = {
             nombre: this.nombre,
             estado: this.estado.toLowerCase()
           };
  
           await axios.post("http://localhost:4200/metodos", MetodoData, {
             headers: {
               "Content-Type": "application/json"
            }
           });
  
           // Mostrar alerta de éxito
            Swal.fire({
              title: 'Éxito',
              text: 'Metodo creado correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
  
           // Limpiar los campos
          this.nombre = "";
           this.estado = "";
  
           // Redirigir a la página de empleados
           this.$router.push("/pagos");
         } catch (err) {
           console.log(err);
         }
       }
     }
  }
  </script>
  
  
  <style>
  /* Estilos generales */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #141313;
  }
  /* Estilos para el contenido principal */
  .main {
    padding: 20px;
  }
  
  .hero {
    margin-top: 240px;
  }
  .titulo{
  background-color: #00000000;
  width: 350px;
  box-shadow: none;
  position: absolute;
  left: 300px;
  top: 140px;
  white-space: nowrap;
  }
  h4{
  color: #000;
  }
  .formulario {
    margin-top: 50px;
    margin-left: 80px;
    color: #6c6c6c;
  }
  .izq1{
    position: absolute;
    top: -5px;
  }
  input, textarea {
  background-color: #d3d1d1;
  border: none;
  border-radius: 10px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 21px;
  padding-left: 10px; /* Espacio a la izquierda del texto */
  padding-top: 10px; /* Espacio en la parte superior del texto */
  padding-right: 10px; /* Espacio a la derecha del texto */
  padding-bottom: 10px; /* Espacio en la parte inferior del texto */
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
  .botones {
    flex-direction: column;
    margin-left: 0;
    align-items: center;
  }
  .btn-back, .btn-conf {
    margin-top: 60px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .btn-back{
    position: relative;
    width: 80%;
    left: -80px;
    width: 200px !important;
  }
  .btn-conf{
    position: relative;
    width: 80%;
    left:  180px;
    width: 200px !important;
  }
  input, select {
    width: 80%;
    height: 30px !important; /* Forzar el estilo si es necesario */
    border-radius: 5px;
    border-color: #000;
  }
  .izq1 {
    position: relative;
    top: 125px !important;
    margin-left: -680px;
    width: 100%;
  }
  .formulario {
    position: relative;
    top: -80px;
  }
}
</style>