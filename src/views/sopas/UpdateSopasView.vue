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
    <h1>{{ isEditing ? 'Editar Sopa' : 'Creacion de Sopa'}}</h1>
    <div>
      <div class="contenedor">
        <div class="izquierda">
          <h4>Nombre de la sopa</h4>
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
        <button class="btn-conf" @click="submitForm">Continuar</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from "@/components/header/HeaderView.vue";
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: "verListaSopas",
  components: {
    HeaderView,
  },
  props: ['idSopa'],
  data() {
    return {
      nombre: "",
      descripcion: "",
      estado: "",
      precio: "",
      porciones: "",
      subCategoria: "",
      isEditing: false,
    };
  },
  created() {
    if (this.idSopa) {
      this.isEditing = true;
      this.loadSopa();
    }
  },
  methods: {
    async loadSopa() {
      try {
        const response = await axios.get(`http://localhost:4200/sopas/${this.idSopa}`);
        const sopa = response.data;
        this.nombre = sopa.nombre;
        this.descripcion = sopa.descripcion;
        this.estado = sopa.estado;
        this.precio = sopa.precio;
        this.porciones = sopa.porciones;
        this.subCategoria = sopa.subCategoria;
      } catch (error) {
        console.error('Error cargando la sopa:', error);
      }
    },
    async submitForm() {
      // Validación de campos obligatorios
      if (!this.nombre || !this.descripcion || !this.estado || !this.precio || !this.porciones || !this.subCategoria) {
        Swal.fire({
          icon: 'warning',
          title: 'Campos obligatorios',
          text: 'Por favor, completa todos los campos antes de enviar.',
          confirmButtonText: 'Entendido'
        });
        return; // Detener la ejecución si falta algún campo
      }

      const sopaData = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        estado: this.estado,
        precio: this.precio,
        porciones: this.porciones,
        subCategoria: this.subCategoria,
      };

      try {
        if (this.isEditing) {
          await axios.put(`http://localhost:4200/sopas/${this.idSopa}`, sopaData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          // Mostrar alerta de éxito para actualización
          Swal.fire({
            title: 'Actualización exitosa',
            text: 'Sopa actualizada correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        } else {
          await axios.post("http://localhost:4200/sopas", sopaData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          // Mostrar alerta de éxito para creación
          Swal.fire({
            title: 'Creación exitosa',
            text: 'Sopa creada correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        }

        // Limpiar los campos
        this.resetForm();

        // Redirigir a la página de sopas
        this.$router.push("/sopas");
      } catch (err) {
        console.log('Error al enviar el formulario:', err);

        // Mostrar alerta de error
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    },
    resetForm() {
      this.nombre = "";
      this.descripcion = "";
      this.estado = "";
      this.precio = "";
      this.porciones = "";
      this.subCategoria = "";
      this.isEditing = false;
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
