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
    <!-- Contenido principal -->
    <main>
      <div class="hero">
        <h1 class="titulo">Creacion de Metodos de pago</h1>
      </div>
  
      <!-- Formulario de información del restaurante -->
      <div class="formulario">
        <div>
          <h4>Nombre del metodo</h4>
          <input class="boton1" placeholder="" v-model="nombre" required>
        </div>
  
        
      </div>
  
      <!-- Botones de navegación -->
      <div class="botones">
        <router-link to="/Pagos">
            <button class="atras1">← Atras</button>
        </router-link>
        <button class="continuar" @click="createMetodo">Continuar</button>
      </div>
    </main>
  
    <!-- Información adicional -->
    <div class="izq1">
      <h4>Estado</h4>
      <input class="iz1" placeholder="Activo o Inactivo" v-model="estado" required >
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
         if (!this.nombre || !this.estado) {
           return 'Todos los campos son obligatorios';
         }
  
         const validEstados = ["activo", "inactivo"];
         if (!validEstados.includes(this.estado.toLowerCase())) {
           return 'El estado debe ser "Activo" o "Inactivo"';
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
    font-family: 'Montserrat', sans-serif;
  }
  
  
  .boton1,
  .boton2,
  .boton3,
  .boton4 {
    width: 500px;
    height: 30px;
    border: none;
    background-color: #d3d1d1;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  
  .botones {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-left: 100px;
  }
  
  .atras1,
  .continuar {
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 12px;
    width: 200px;
    text-align: center;
    cursor: pointer;
    height: 50px;
  }
  
  .atras1 {
    background-color: #BBB7B7;
    border: none;
    color: #000000;
  }
  
  .continuar {
    background-color: #ff7a00;
    border: none;
    color: #000;
  }
  /* Estilos para la información adicional */
  .informacion-adicional {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  }
  .boton4 {
  width: 500px;
  height: 30px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  }
  .izq1 {
  width: 100px;
  height: 30px;
  margin-left: 40px; 
  margin-top: 240px;
  margin-bottom: 30px;
  text-align: left; 
  line-height: 30px; 
  position: relative;
  z-index: 1; 
  }
  .iz1 {
  width: 500px;
  height: 30px;
  border-radius: 10px;
  top: 7px;
  margin-left: -5px;
  margin-bottom: 30px;
  background-color: #d3d1d1;
  border: none;
  text-align: left; 
  line-height: 30px; 
  position: relative; 
  z-index: 1; 
  }
  .izq2 {
  width: 200px;
  height: 30px;
  margin-left: -100px; 
  margin-top: 340px;
  margin-bottom: 30px;
  color: #6C6C6C;
  text-align: left;
  line-height: 30px; 
  position: relative; 
  z-index: 1; 
  }
  .iz2 {
  width: 500px;
  height: 30px;
  border-radius: 10px;
  margin-top: 0px;
  margin-left: -5px;
  margin-bottom: 30px;
  background-color: #d3d1d1; 
  border: none;
  color: #000; 
  text-align: left;
  line-height: 30px; 
  position: relative; 
  z-index: 1;
  }
  .izq3 {
      width: 100px;
      height: 30px;
      margin-left: -200px; 
      margin-top: 430px;
      margin-bottom: 30px;
      color: #d3d1d1;
      text-align: left; 
      line-height: 30px; 
      position: relative; 
      display: block;
      z-index: 1; 
      white-space: nowrap; /* Asegura que el texto no se envuelva */
  }
  .izq4 {
  width: 100px;
  height: 30px;
  margin-left: -100px; 
  margin-top: 500px;
  margin-bottom: 30px;
  color: #d3d1d1;
  text-align: left; 
  line-height: 30px; 
  position: relative; 
  z-index: 9999; 
  }
  
  
  .iz3 {
      width: 500px;
      height: 35px;
      border: none;
      background-color: #d3d1d1;
      border-radius: 10px;
      margin-top: 0px;
      margin-left: -5px;
      margin-bottom: 30px;
      text-align: left; 
      line-height: 30px; 
      position: relative;
      z-index: 9999;
  }
  .hasta {
    width: 100px;
      height: 30px;
      margin-left: 230px; 
      margin-top: 214px;
      margin-bottom: 30px;
      color: #6C6C6C;
      text-align: center; 
      line-height: 30px; 
      position: relative; 
      z-index: 9999; 
  }
  
  .de {
    width: 100px;
    height: 30px;
    margin-left: -390px; 
    margin-top: 213px;
    margin-bottom: 30px;
    color: #6C6C6C;
    text-align: left; 
    line-height: 30px; 
    position: relative; 
    z-index: 9999; 
  }
  .horario {
  position: absolute;
  display: flex;
  align-items: center;
  }
  
  .dropdown {
    position: absolute;
    top: 550px;
    right: 430px;
    z-index: 1000;
  }
  
  .dropdown-toggle {
    display: none; /* Oculta el checkbox */
  }
  
  .dropbtn {
   width: 260px;
    background-color: #c8c6c6;
    color: rgb(0, 0, 0);
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    display: inline-block; /* Asegúrate de que el botón se alinee con el contenido del dropdown */
    border-radius: 10px;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 260px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    top: 100%;
    left: 0;
  }
  
  .dropdown-content a {
    color: black;
    padding: 8px 12px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  
  .dropdown-toggle:checked + .dropbtn + .dropdown-content {
    display: block;
  }
  
  
  .laboral {
    position: relative;
    top: 520px; 
    left: 120px;   
    z-index: 1000; 
  }
  
  
  
  </style>