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
        <h1 class="titulo">Creacion de Empleado</h1>
      </div>

      <!-- Formulario de información del restaurante -->
      <div class="formulario">
        <div>
          <h4>Nombre del Empleado</h4>
          <input  placeholder="" v-model="nombreCompleto" required>
        </div>

        <div class="nombre2">
          <h4>Numero de Cedula</h4>
          <input type="text" placeholder="Ingrese la cedula" pattern="\d{1,10}" 
          title="Debe ingresar entre 1 y 10 dígitos" v-model.number="cedula" required maxlength="10">
        </div>

        <div class="nombre3">
          <h4>Edad</h4>
          <input v-model="edadEmpleado" min="18" maxlength="2" required>
      </div>
    </div>

      <!-- Botones de navegación -->
      <div class="botones">
        <router-link to="/empleados">
          <button class="btn-back">← Atras</button>
        </router-link>
        <button class="btn-conf" @click="createEmploye">Continuar</button>
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
      <input  placeholder="" v-model.number="sueldo" required min="450" maxlength="3">
    </div>
    <div class="izq3">
      <h4>N° de contacto </h4>
      <input  placeholder="" v-model.number="numeroContacto" maxlength="10" >
    </div>
</template>


<script>
import HeaderView from '@/components/header/HeaderView.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'createEmploye',
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
      numeroContacto: null
    }
  },
  methods: {
    validateForm() {
      if (!this.nombreCompleto || this.cedula === null || this.edadEmpleado === null || !this.genero || this.sueldo === null || this.numeroContacto === null) {
        return 'Todos los campos son obligatorios';
      }

      if (!Number.isInteger(this.cedula) || this.cedula.toString().length > 10) {
        return 'La cédula debe ser un número válido con máximo 10 dígitos';
      }

      if (this.edadEmpleado < 18 || this.edadEmpleado > 99) {
        return 'La edad debe ser un número entre 18 y 99';
      }

      const validGeneros = ['masculino', 'femenino'];
      if (!validGeneros.includes(this.genero.toLowerCase())) {
        return 'El género debe ser "masculino" o "femenino"';
      }

      if (this.sueldo < 450) {
        return 'El sueldo debe ser un número mayor o igual a 450';
      }

      if (!Number.isInteger(this.numeroContacto) || this.numeroContacto.toString().length > 10) {
        return 'El número de contacto debe ser un número válido con máximo 10 dígitos';
      }

      return null; // Indica que no hay errores
    },
    
    async createEmploye() {
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
        const EmployeData = {
          nombreCompleto: this.nombreCompleto,
          cedula: this.cedula,
          edadEmpleado: this.edadEmpleado,
          genero: this.genero,
          sueldo: this.sueldo,
          numeroContacto: this.numeroContacto
        };

        await axios.post("http://localhost:4200/empleado", EmployeData, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        // Mostrar alerta de éxito
        Swal.fire({
          title: 'Éxito',
          text: 'Empleado creado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

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
.main {
  padding: 20px;
}
.hero {
  margin-top: 240px;
}
input, textarea, select {
  background-color: #d3d1d1;
  border: none;
  border-radius: 10px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 21px;
  width: 500px;
}
h4 {
  color: #000;
}
.botones {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 100px;
}
.btn-back, .btn-conf {
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
}
.btn-back {
  background-color: #BBB7B7;
  width: 250px;
  margin-left: -18px;
}
.btn-conf {
  background-color: #FF7A00;
  color: #FFFFFF;
  width: 250px;
  position: relative;
  margin-left: 260px;
}
.izq2{
  position: absolute;
  top: 336px;
  left: 830px;
}
.izq3{
  position: absolute;
  top: 434px;
  left: 830px;
}
select{
    background-color: #d3d1d1;
    margin-top: 10px; 
    border-radius: 10px;
    height: 40px;
    width: 500px;
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
    width: 80%;
    left: -80px;
    width: 200px !important;
  }
  .btn-conf{
    position: relative;
    width: 80%;
    left:  180px;
    width: 200px !important;
  }
  input, textarea, select {
    width: 80%;
    height: 30px !important; /* Forzar el estilo si es necesario */
    border-radius: 5px;
  }

  .formulario {
    position: relative;
    top: -80px;
  }
  .izq1 {
    margin-top: 125px;
    margin-left: -680px;
    width: 100%;
  }
  .izq2{
    margin-top: 99px;
    margin-left: -680px;
    width: 100%;
  }
  .izq3{
    margin-top: 70px;
    margin-left: -680px;
    width: 100%;
  }
  .nombre2{
    position: relative;
    top: -23px;
  }
  .nombre3{
    position: relative;
    top: -40px;
  }
}
</style>