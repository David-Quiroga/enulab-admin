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
  <h1>Creación de Entradas</h1>
  <div>
    <div class="contenedor">
      <div class="izquierda">
        <h4>Nombre de la entrada</h4>
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
        <input v-model="precio"  />

        <h4>Porciones</h4>
        <input v-model="porciones" placeholder="Unidad por persona" />

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
          text: 'Entrada creada correctamente',
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
padding-left: 90px;
margin-top: 130px;
margin-bottom: 50px;
}

input{
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