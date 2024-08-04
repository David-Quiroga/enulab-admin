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
        <h1>{{ isEditing ? 'Editar Proveedor' : 'Creación de Proveedores' }}</h1>
        <form >
            <div class="contenedor">
                <div class="izquierda">
            <label for="nombreProveedor">Nombre del proveedor:</label>
            <input type="text" id="nombreProveedor" v-model="nombreProveedor">
            
            <label for="cItem">Numero de contacto:</label>
            <input type="number" id="numContacto" v-model="numContacto">
            
            <label for="emailContacto">Email de contacto:</label>
            <input type="text" id="emailContacto" v-model="emailContacto">
            
            <label for="tipoProducto">Producto a Proveer:</label>
            <input type="text" id="tipoProducto" v-model="tipoProducto">
          </div>
    
          <div class="derecha">
            <label for="direccion">Direccion</label>
            <input type="text" id="direccion" v-model="direccion">
            
            <label for="ciudad">Ciudad</label>
            <input type="text" id="ciudad" v-model="ciudad">
            
            <label for="provincia">Estado</label>
            <input type="text" id="provincia" v-model="estado">
          </div>
        </div>
        <div class="botones">
          <button class="btn-back" >Atrás</button>
          <button class="btn-conf" @click="createProveedor">Continuar</button>
        </div>
        </form>
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
        nombreProveedor: "",
        numContacto: "",
        emailContacto: "",
        direccion: "",
        ciudad: "",
        estado: "",
        tipoProducto: "",
        isEditing: false,
        proveedorId: null
      };
    },
    created() {
      const id = this.$route.params.id;
      if (id) {
        this.isEditing = true;
        this.proveedorId = id;
        this.getProveedor(id);
      }
    },
    methods: {
      validateForm() {
        if (!this.nombreProveedor || !this.numContacto || !this.emailContacto || !this.direccion || !this.ciudad || !this.estado || !this.tipoProducto) {
          return 'Todos los campos son obligatorios';
        }
  
        if (!Number.isInteger(this.numContacto) || this.numContacto.toString().length > 10) {
          return 'El número de contacto debe ser un número válido con máximo 10 dígitos';
        }
  
        if (!this.emailContacto.includes('@') || !this.emailContacto.includes('.')) {
          return 'El email debe ser válido';
        }
  
        return null;
      },
      async createProveedor() {
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
  
        const proveedorData = {
          nombreProveedor: this.nombreProveedor,
          numContacto: this.numContacto,
          emailContacto: this.emailContacto,
          direccion: this.direccion,
          ciudad: this.ciudad,
          estado: this.estado,
          tipoProducto: this.tipoProducto
        };
  
        try {
          if (this.isEditing) {
            await axios.put(`http://localhost:4200/proveedores/${this.proveedorId}`, proveedorData, {
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
            await axios.post("http://localhost:4200/proveedores", proveedorData, {
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
  
          if (!this.isEditing) {
            this.nombreProveedor = "";
            this.numContacto = "";
            this.emailContacto = "";
            this.direccion = "";
            this.ciudad = "";
            this.estado = "";
            this.tipoProducto = "";
          }
  
          this.$router.push("/proveedores");
        } catch (err) {
          console.log(err);
          Swal.fire({
            title: 'Error',
            text: `Hubo un error al ${this.isEditing ? 'actualizar' : 'crear'} el proveedor`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      async getProveedor(id) {
        try {
          const response = await axios.get(`http://localhost:4200/proveedores/${id}`);
          const proveedor = response.data;
          this.nombreProveedor = proveedor.nombreProveedor || '';
          this.numContacto = proveedor.numContacto || '';
          this.emailContacto = proveedor.emailContacto || '';
          this.direccion = proveedor.direccion || '';
          this.ciudad = proveedor.ciudad || '';
          this.estado = proveedor.estado || '';
          this.tipoProducto = proveedor.tipoProducto || '';
        } catch (err) {
          console.log(err);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error al obtener los datos del proveedor',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      volver() {
        this.$router.go(-1);
      }
    }
  };
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
width: 180px;
}

.btn-conf {
background-color: #FF7A00;
color: #FFFFFF;
width: 250px;
}
</style>