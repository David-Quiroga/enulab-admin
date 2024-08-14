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
      <div class="contenedor-principal">
    <h1>Creación de Proveedores</h1>
    <div class="contenedor">
  <div class="izquierda">
    <label>Nombre del proveedor:</label>
    <input class="input" type="text" v-model="nombreProveedor">
    
    <label>Número de contacto:</label>
    <input class="input" v-model.number="numContacto">
    
    <label>Email de contacto:</label>
    <input class="input" type="text" v-model="emailContacto">
    
    <label>Producto a Proveer:</label>
    <input class="input" type="text" v-model="tipoProducto">
  </div>

  <div class="derecha">
    <label>Dirección</label>
    <input class="input" type="text" v-model="direccion">
    
    <label>Ciudad</label>
    <input class="input" type="text" v-model="ciudad">
    
    <label>Estado</label>
    <select class="input" v-model="estado">
      <option value="" disabled>Seleccione un estado</option>
      <option value="activo">Activo</option>
      <option value="inactivo">Inactivo</option>
    </select>
  </div>
</div>
    <div class="botones">
      <router-link to="/proveedores">
        <button class="btn-back">Atrás</button>
      </router-link>
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
    provincia: '',  // Si estás utilizando 'provincia' en lugar de 'estado' en otro lugar
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
          estado: this.estado,        // "estado" antes de "tipoProducto"
          tipoProducto: this.tipoProducto
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
        this.estado = '';
        this.tipoProducto = '';

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
  .hero {
    position: relative;
    top: -280px;
    left: -220px;
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
    top: 110px;
    width: 80%;
    left: -140px;
    width: 200px !important;
  }
  .btn-conf{
    position: relative;
    width: 80%;
    left:  160px;
    width: 200px !important;
  }
  h1{
    position: relative;
    white-space: nowrap;
    font-size: 32px;
    left: -80px;
    top: -45px;
  }
  input, textarea, select {
    width: 80%;
    height: 30px !important; /* Forzar el estilo si es necesario */
    border-radius: 5px;
  }
  .izquierda{
    margin-top: -101px;
    margin-left: 70px;
  }
  .izquierda .input {
    margin-bottom: 0; /* Espacio entre cada input */
  }
  .izquierda .input:last-child {
    margin-bottom: 0; /* Elimina el margen inferior del último input */
  }
  .derecha{
    position: absolute;
    top: 390px;
    left: 1px;
  }
  .derecha .input{
    margin-bottom: 0; /* Espacio entre cada input */
  }
  .derecha .input:last-child {
    margin-bottom: 0; /* Elimina el margen inferior del último input */
  }
}
</style>