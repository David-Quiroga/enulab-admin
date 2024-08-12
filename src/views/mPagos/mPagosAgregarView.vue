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
              <i class="fa-regular fa-credit-card"></i> Métodos de pago
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
</style>