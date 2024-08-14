<template>
  <HeaderView/>
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
  <h1>Creación de Bebidas</h1>
  <div>
    <div class="contenedor">
      <div class="izquierda">
        <h4>Nombre de la Bebida</h4>
        <input v-model="nombre" />

        <h4>Descripción</h4>
        <input v-model="descripcion" />

        <h4>Estado</h4>
          <select v-model="estado">
            <option value="" disabled>Selecciona un estado</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
            <option value="agotado">Agotado</option>
            <option value="fuera de temporada">Fuera de temporada</option>
          </select>
      </div>

      <div class="derecha">
        <h4>Precio</h4>
        <input v-model="precio" />

        <h4>Sub Categoría</h4>
        <input v-model="subCategoria" />
      </div>
    </div>

    <div class="botones">
      <router-link to="/menus">
        <button class="btn-back">Atrás</button>
      </router-link>
      <button class="btn-conf" @click="submitForm">Continuar</button>
    </div>
  </div>
</div>
</template>
  
  <script>
  import HeaderView from '@/components/header/HeaderView.vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: "MenuListView",
    components: {
      HeaderView,
    },
    data() {
      return {
        nombre: "",
        descripcion: "",
        precio: null,
        estado: "",
        subCategoria: "",
        isEditing: false
      };
    },
    created() {
      console.log('ID de bebida:', this.idBebida); // Verifica que el ID se recibe
      if (this.idBebida) {
        this.isEditing = true;
        this.loadBebida();
      }
    },
    methods: {
      validateForm() {
        if (!this.nombre || !this.descripcion || this.precio === null || !this.estado || !this.subCategoria) {
          return 'Todos los campos son obligatorios y el precio no puede ser nulo';
        }
        return null; // Indica que no hay errores
      },
      async loadBebida() {
        try {
          const response = await axios.get(`http://localhost:4200/bebidas/${this.idBebida}`);
          const bebida = response.data;
          this.nombre = bebida.nombre;
          this.descripcion = bebida.descripcion;
          this.precio = bebida.precio;
          this.estado = bebida.estado;
          this.subCategoria = bebida.subCategoria;
        } catch (error) {
          console.error('Error cargando la bebida:', error);
        }
      },
      async submitForm() {
        const validationError = this.validateForm();
        if (validationError) {
          Swal.fire({
            title: 'Error',
            text: validationError,
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
          return; // Detener la ejecución si hay errores
        }
  
        const bebidaData = {
          nombre: this.nombre,
          descripcion: this.descripcion,
          precio: this.precio,
          estado: this.estado,
          subCategoria: this.subCategoria
        };
  
        try {
          if (this.isEditing) {
            await axios.put(`http://localhost:4200/bebidas/${this.idBebida}`, bebidaData, {
              headers: {
                "Content-Type": "application/json"
              }
            });
            Swal.fire({
              title: 'Actualización exitosa',
              text: 'Bebida actualizada correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          } else {
            await axios.post("http://localhost:4200/bebidas", bebidaData, {
              headers: {
                "Content-Type": "application/json"
              }
            });
            Swal.fire({
              title: 'Creación exitosa',
              text: 'Bebida creada correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          }
          
          // Limpiar los campos
          this.nombre = "";
          this.descripcion = "";
          this.precio = null;
          this.estado = "";
          this.subCategoria = "";
  
          // Redirigir a la página de bebidas
          this.$router.push("/bebidas");
        } catch (err) {
          console.error('Error al enviar el formulario:', err);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
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
padding-left: 90px;
margin-top: 130px;
margin-bottom: 50px;
}

input, textarea {
background-color: #d3d1d1;
border: none;
border-radius: 10px;
height: 40px;
margin-top: 10px;
margin-bottom: 21px;
}

select{
  background-color: #d3d1d1;
  margin-top: 10px; 
  border-radius: 10px;
  height: 40px;
  width: 500px;
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

.contenedor-principal{
  max-width: 720px;
}
.contenedor-principal > h1{
  font-size: 2.3em;
  margin-left: -50px;
  margin-top: 90px;
  margin-bottom: -20px;
}
.contenedor{
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin-top: 20px;
}
.izquierda, .derecha{
  margin: auto;
}

input,select{
  width: 300px;
  height: 30px;
}
.btn-back{
  margin-top: -40px;
  margin-left: -150px;
  width: 200px;
}
.btn-conf{
  margin-top: -40px;
  margin-left: 70px;
  width: 200px;
}
}
</style>