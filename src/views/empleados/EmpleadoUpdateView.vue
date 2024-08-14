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
    <!-- Contenido principal -->
    <main>
      <div class="hero">
        <h1 class="titulo">{{ isEditing ? 'Editar Empleado' : 'Creacion de Empleado'}}</h1>
      </div>

      <!-- Formulario de información del restaurante -->
      <div class="formulario">
        <div>
          <h4>Nombre del Empleado</h4>
          <input  placeholder="" v-model="nombreCompleto" required>
        </div>

        <div class="nombre2">
          <h4>Numero de Cedula</h4>
          <input  type="text" placeholder="Ingrese la cedula" pattern="\d{1,10}" 
          title="Debe ingresar entre 1 y 10 dígitos" v-model.number="cedula" required maxlength="10">
        </div>

        <div class="nombre3">
          <h4>Edad</h4>
          <input id="comida-select"  v-model="edadEmpleado" min="18" maxlength="2" required>
      </div>
    </div>

      <!-- Botones de navegación -->
      <div class="botones">
        <router-link to="/empleados">
          <button class="btn-back">↩ Atras</button>
        </router-link>
        <button class="btn-conf" @click="submitForm">Continuar</button>
      </div>
    </main>

    <!-- Información adicional -->
    <div class="izq1">
      <h4>Género</h4>
      <select v-model="genero" required>
        <option value="" disabled>Seleccione un género</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
    </div>
        <div class="izq2">
          <h4>Sueldo</h4>
          <input placeholder="" v-model.number="sueldo" required min="450" maxlength="3">
        </div>
        <div class="izq3">
          <h4>N° de contacto </h4>
          <input  placeholder="" v-model.number="numeroContacto" maxlength="10" >
        </div>

</template>


<script>
import HeaderView from '@/components/header/HeaderView.vue';
import axios from 'axios';

export default {
  name: 'updateEmployee',
  components: {
    HeaderView
  },
  data() {
    return {
      nombreCompleto: "",
      cedula: null,
      genero: "",
      sueldo: null,
      edadEmpleado: null,
      numeroContacto: null,
      isEditing: false
  }
  },
  props: ['idEmpleado'],
  created() {
      if (this.idEmpleado) {
          this.isEditing = true;
          this.loadEmployee();
      }
  },
  methods: {
  async loadEmployee() {
      try {
          const response = await axios.get(`http://localhost:4200/empleado/${this.idEmpleado}`);
          const empleado = response.data;
          this.nombreCompleto = empleado.nombreCompleto;
          this.cedula = empleado.cedula;
          this.genero = empleado.genero;
          this.sueldo = empleado.sueldo;
          this.edadEmpleado = empleado.edadEmpleado;
          this.numeroContacto = empleado.numeroContacto;
      } catch (error) {
          console.error('Error cargando el empleado:', error);
      }
  },
  async submitForm() {
      try {
          const empleadoData = {
              nombreCompleto: this.nombreCompleto,
              cedula: this.cedula,
              genero: this.genero,
              sueldo: this.sueldo,
              edadEmpleado: this.edadEmpleado,
              numeroContacto: this.numeroContacto
          };
          
          if (this.isEditing) {
              await axios.put(`http://localhost:4200/empleado/${this.idEmpleado}`, empleadoData, {
                  headers: {
                      "Content-Type": "application/json"
                  }
              });
          } else {
              await axios.post("http://localhost:4200/empleado", empleadoData, {
                  headers: {
                      "Content-Type": "application/json"
                  }
              });
          }
      // Limpiar los campos
      this.nombreCompleto = "";
      this.cedula = null;
      this.edadEmpleado = null;
      this.genero = "";
      this.sueldo = null;
      this.numeroContacto = null;

      // Redirigir a la página de empleados
      this.$router.push("/empleados");
      } catch (err) {
          console.log('Error al enviar el formulario:', err);
      }
  }
  }
}
</script>



<style >
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input, textarea {
background-color: #d3d1d1;
border: none;
border-radius: 10px;
height: 40px;
margin-top: 10px;
margin-bottom: 21px;
width: 500px;
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
.btn-back, .btn-conf {
height: 40px;
border: none;
border-radius: 10px;
cursor: pointer;
margin-right: 10px
}

.btn-back {
background-color: #BBB7B7;
width: 240px;
margin-left: -20px;
}

.btn-conf {
background-color: #FF7A00;
color: #FFFFFF;
width: 240px;
position: absolute;
margin-left: 240px;
}
select{
    background-color: #d3d1d1;
    margin-top: 10px; 
    border-radius: 10px;
    height: 40px;
    width: 500px;
}
</style>