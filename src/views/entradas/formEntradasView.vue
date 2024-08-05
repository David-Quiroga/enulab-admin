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
  <div class="contenedor-principal">
    <h1>Creación de Entradas</h1>
    <div>
      <div class="contenedor">
        <div class="izquierda">
          <h4>Nombre de la entrada</h4>
          <input v-model="nombre" />
  
          <h4>Descripción</h4>
          <input v-model="descripcion" />
  
          <h4>Estado</h4>
          <input class="iz1" placeholder="Activo o Inactivo" v-model="estado" required />
        </div>
  
        <div class="derecha">
          <h4>Precio</h4>
          <input v-model="precio" />
  
          <h4>Porciones</h4>
          <input v-model="porciones" />
  
          <h4>Sub Categoría</h4>
          <input v-model="subCategoria" />
        </div>
      </div>
  
      <div class="botones">
        <router-link to="/menus">
          <button class="btn-back">Atrás</button>
        </router-link>
        <button class="btn-conf" @click="createEntrada">Continuar</button>
      </div>
    </div>
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
        descripcion: "",
        precio: '',
        estado: "",
        porciones: '',
        subCategoria: ''
      };
    },
    methods: {
      validateForm() {
        if (!this.nombre || !this.descripcion || !this.precio || !this.estado || !this.porciones || !this.subCategoria) {
          return 'Todos los campos son obligatorios';
        }
        return null; // Indica que no hay errores
      },
      async createEntrada() {
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
          const EntradaData = {
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
            estado: this.estado,
            porciones: this.porciones,
            subCategoria: this.subCategoria
          };
  
          await axios.post("http://localhost:4200/entrada", EntradaData, {
            headers: {
              "Content-Type": "application/json"
            }
          });
  
          // Mostrar alerta de éxito
          Swal.fire({
            title: 'Éxito',
            text: 'Helado creado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
  
          // Limpiar los campos
          this.nombre = "";
          this.descripcion = "";
          this.precio = '';
          this.estado = "";
          this.porciones = '';
          this.subCategoria = '';
  
          // Redirigir a la página de helados
          this.$router.push("/entradas");
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  </script>
  
    
  <style scoped>
  body {
  padding: 0;
  margin: 0;
  background-color: #141313;
  height: 100vh; /* Asegura que el body ocupe toda la altura de la ventana */
  }
  
  h1{
  color: #000000;
  font-size: 50px;
  padding-left: 150px;
  margin-top: 130px;
  margin-bottom: 50px;
  }
  
  label{
  color: #000000;
  }
  
  input, textarea {
  background-color: #d3d1d1;
  border: none;
  border-radius: 10px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 21px;
  }
  
  textarea {
  height: 80px; /* Ajustar altura del textarea */
  }
  
  form {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  .contenedor-principal{
  width: 100%;
  }
  .contenedor {
  display: flex;
  width: 900px; /* Ajustar al 100% del contenedor */
  justify-content: space-between; /* Espacio entre columnas */
  
  }
  
  .izquierda, .derecha {
  display: flex;
  flex-direction: column;
  width: 47%;
  margin-left: 100px
  }
  
  .botones {
  display: flex;
  width: 85%;
  margin-top: 50px;
  }
  
  .btn-back, .btn-conf {
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: -30px;
  }
  
  .btn-back {
  background-color: #BBB7B7;
  width: 240px;
  position: absolute;
  left: 335px;
  }
  
  .btn-conf {
  background-color: #FF7A00;
  color: #FFFFFF;
  width: 240px;
  position: absolute;
  left: 330px;
  }
  input, textarea {
  background-color: #d3d1d1;
  border: 1px solid #000; /* Borde negro */
  border-radius: 10px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 21px;
  padding-left: 10px; /* Espacio a la izquierda del texto */
  padding-right: 10px; /* Espacio a la derecha del texto */
  }
  </style>