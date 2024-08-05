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


      <div class="contenedor-principal">
        <h1>Creación de Proveedores</h1>
            <div class="contenedor">
                <div class="izquierda">
            <label >Nombre del proveedor:</label>
            <input class="input" type="text"  v-model="nombreProveedor">
            
            <label >Numero de contacto:</label>
            <input class="input" type="number" v-model="numContacto">
            
            <label >Email de contacto:</label>
            <input class="input" type="text" v-model="emailContacto">
            
            <label >Producto a Proveer:</label>
            <input class="input" type="text" v-model="tipoProducto">
          </div>
    
          <div class="derecha">
            <label >Direccion</label>
            <input class="input" type="text" v-model="direccion">
            
            <label >Ciudad</label>
            <input class="input" type="text" v-model="ciudad">
            
            <label >Estado</label>
            <input class="input" type="text" v-model="estado">
          </div>
        </div>
        <div class="botones">
          <button class="btn-back" >Atrás</button>
          <button class="btn-conf" @click="createProveedor">Continuar</button>
        </div>
      </div>
  </template>
  
  <script>
  import HeaderView from '@/components/header/HeaderView.vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'AgregarProveedor',
    components: {
      HeaderView
    },
    data() {
      return {
        nombreProveedor: '',
        numContacto: '',
        emailContacto: '',
        direccion: '',
        ciudad: '',
        provincia: '',
        tipoProducto: '',
        estado: '',
        isEditing: false
      };
    },
    methods: {
      async createProveedor() {
        try {
          const proveedorData = {
            nombreProveedor: this.nombreProveedor,
            numContacto: this.numContacto,
            emailContacto: this.emailContacto,
            direccion: this.direccion,
            ciudad: this.ciudad,
            provincia: this.provincia,
            tipoProducto: this.tipoProducto,
            estado: this.estado
          };
  
          if (this.isEditing) {
            await axios.put(`http://localhost:4200/proveedores/${this.idProveedores}`, proveedorData, {
              headers: {
                "Content-Type": "application/json"
              }
            });
            Swal.fire({
              title: 'Éxito',
              text: 'Proveedor actualizado correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          } else {
            await axios.post('http://localhost:4200/proveedores', proveedorData, {
              headers: {
                "Content-Type": "application/json"
              }
            });
            Swal.fire({
              title: 'Éxito',
              text: 'Proveedor creado correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          }
  
          // Limpiar el formulario
          this.nombreProveedor = '';
          this.numContacto = '';
          this.emailContacto = '';
          this.direccion = '';
          this.ciudad = '';
          this.provincia = '';
          this.tipoProducto = '';
          this.estado = '';
  
          // Redirigir a la lista de proveedores
          this.$router.push('/proveedores');
        } catch (error) {
          console.error('Error al enviar el formulario', error);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al crear o actualizar el proveedor',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      goBack() {
        this.$router.push('/proveedores');
      }
    }
  };
  </script>

<style scoped>
body {
padding: 0;
margin: 0;
height: 100vh; /* Asegura que el body ocupe toda la altura de la ventana */
}

h1{
color: #000000;
font-size: 50px;
padding-left: 150px;
margin-top: 130px;
margin-bottom: 50px;
}
.input{
  width: 500px;
}
label{
color: #000000;
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
margin-left: 140px;
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
margin-right: 10px
}

.btn-back {
background-color: #BBB7B7;
width: 250px;
margin-left: 40px;
}

.btn-conf {
background-color: #FF7A00;
color: #FFFFFF;
width: 250px;
position: absolute;
margin-left: 300px;
}
</style>