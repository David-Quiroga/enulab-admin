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
  <div class="contenedor-principal">
    <h1>{{ isEditing ? 'Editar Postre' : 'Creación de Postre' }}</h1>
    <div>
      <div class="contenedor">
        <div class="izquierda">
          <h4>Nombre del postre</h4>
          <input v-model="nombre" />

          <h4>Descripción</h4>
          <input v-model="descripcion" />

          <h4>Estado</h4>
        <select v-model="estado">
          <option value="activo" >Activo</option>
          <option value="inactivo">Inactivo</option>
          <option value="agotado">Agotado</option>
          <option value="fuera de temporada">Fuera de temporada</option>
        </select>
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
        <router-link to="/helados">
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
  name: "verListaHelados",
  components: {
    HeaderView,
  },
  data() {
    return {
      nombre: "",
      descripcion: "",
      precio: null,
      estado: "",
      porciones: "", // Añadido porciones
      subCategoria: "", // Añadida subCategoría
      isEditing: false
    };
  },
  props: ['idHelado'],
  created() {
    if (this.idHelado) {
      this.isEditing = true;
      this.loadHelado();
    }
  },
  methods: {
    validateForm() {
      if (!this.nombre || !this.descripcion || !this.precio || !this.estado || !this.porciones || !this.subCategoria) {
        return 'Todos los campos son obligatorios';
      }
      return null; // Indica que no hay errores
    },
    async loadHelado() {
      try {
        const response = await axios.get(`http://localhost:4200/helados/${this.idHelado}`);
        const helado = response.data;
        this.nombre = helado.nombre;
        this.descripcion = helado.descripcion;
        this.precio = helado.precio;
        this.estado = helado.estado;
        this.porciones = helado.porciones; // Cargar porciones
        this.subCategoria = helado.subCategoria; // Cargar subCategoría
      } catch (error) {
        console.error('Error cargando el helado:', error);
      }
    },
    async submitForm() {
      const validationError = this.validateForm();
      if (validationError) {
        Swal.fire({
          title: 'Error',
          text: validationError,
          icon: 'info',
          confirmButtonText: 'Aceptar'
        });
        return; // Detener la ejecución si falta algún campo
      }

      try {
        const heladoData = {
          nombre: this.nombre,
          descripcion: this.descripcion,
          precio: this.precio,
          estado: this.estado,
          porciones: this.porciones, // Incluir porciones
          subCategoria: this.subCategoria // Incluir subCategoría
        };

        if (this.isEditing) {
          await axios.put(`http://localhost:4200/helados/${this.idHelado}`, heladoData, {
            headers: {
              "Content-Type": "application/json"
            }
          });
        } else {
          await axios.post("http://localhost:4200/helados", heladoData, {
            headers: {
              "Content-Type": "application/json"
            }
          });
        }

        // Mostrar alerta de éxito
        Swal.fire({
          title: 'Éxito',
          text: this.isEditing ? 'Helado actualizado correctamente' : 'Helado creado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

        // Limpiar los campos
        this.nombre = "";
        this.descripcion = "";
        this.precio = null;
        this.estado = "";
        this.porciones = ""; // Limpiar porciones
        this.subCategoria = ""; // Limpiar subCategoría

        // Redirigir a la página de helados
        this.$router.push("/helados");
      } catch (err) {
        console.error('Error al enviar el formulario:', err);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al procesar la solicitud. Inténtalo de nuevo.',
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
