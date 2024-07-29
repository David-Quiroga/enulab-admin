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
    <!-- Contenido principal -->
    <main>
      <div class="hero">
        <h1 class="titulo">Creacion de Empleado</h1>
      </div>

      <!-- Formulario de información del restaurante -->
      <div class="formulario">
        <div>
          <h4>Nombre del Empleado</h4>
          <input class="boton1" placeholder="" v-model="nombreCompleto">
        </div>

        <div class="nombre2">
          <h4>Numero de Cedula</h4>
          <input class="boton2" placeholder="" >
        </div>

        <div class="nombre3">
          <h4>Genero</h4>
          <input class="boton3" id="comida-select">

        <div class="nombre4">
          <h4>Cargo</h4>
          <input class="boton4" placeholder="">
        </div>
      </div>
    </div>

      <!-- Botones de navegación -->
      <div class="botones">
        <button class="atras1">← Atras</button>
        <button class="continuar">Continuar</button>
      </div>
    </main>

    <!-- Información adicional -->



    <div class="izq1">
          <h4>Sueldo</h4>
          <input class="iz1" placeholder="">
        </div>
        <div class="izq2">
          <h4>Numero de Telefono</h4>
          <input class="iz2" placeholder="">
        </div>
        <div class="izq3">
          <h4>Edad</h4>
          <input class="iz3" placeholder="">
        </div>
        <div class="izq4">
          <h4>Jornada laboral</h4>
          <input class="iz3" placeholder="">
        </div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView.vue';
import axios from 'axios';
export default {
name: 'App',
components: {
  HeaderView
  },
  data(){
    return {
      nombreCompleto: "",
      cedula: "",
      edadEmpleado: "",
      genero: "",
      sueldo: "",
      numeroContacto: ""
    }
  },
  methods: {
    async createEmploye(){
      try{
        const EmployeData = {
          nombreCompleto: this.nombreCompleto,
          cedula: this.cedula,
          edadEmpleado: this.edadEmpleado,
          genero: this.genero,
          sueldo: this.sueldo,
          numeroContacto: this.numeroContacto
        };
        await axios.post("http://localhost:4200/empleados", EmployeData, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        this.nombreCompleto = null,
        this.cedula = null,
        this.edadEmpleado = null,
        this.genero = null,
        this.sueldo = null,
        this.numeroContacto = null

        this.$router.push("/empleados")
      } catch(err) {
        console.log(err)
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


.boton1,
.boton2,
.boton3,
.boton4 {
  width: 500px;
  height: 30px;
  border: none;
  background-color: #d3d1d1;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.botones {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 100px;
}

.atras1,
.continuar {
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 12px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  height: 50px;
}

.atras1 {
  background-color: #BBB7B7;
  border: none;
  color: #000000;
}

.continuar {
  background-color: #ff7a00;
  border: none;
  color: #000;
}
/* Estilos para la información adicional */
.informacion-adicional {
position: absolute;
top: 0;
right: 0;
width: 300px;
padding: 20px;
font-family: 'Montserrat', sans-serif;
line-height: 1.5;
}
.boton4 {
width: 500px;
height: 30px;
border-radius: 10px;
margin-top: 10px;
margin-bottom: 30px;
}
.izq1 {
width: 100px;
height: 30px;
margin-left: 40px; 
margin-top: 240px;
margin-bottom: 30px;
text-align: left; 
line-height: 30px; 
position: relative;
z-index: 9999; 
}
.iz1 {
width: 500px;
height: 30px;
border-radius: 10px;
top: 7px;
margin-left: -5px;
margin-bottom: 30px;
background-color: #d3d1d1;
border: none;
text-align: left; 
line-height: 30px; 
position: relative; 
z-index: 9999; 
}
.izq2 {
width: 200px;
height: 30px;
margin-left: -100px; 
margin-top: 340px;
margin-bottom: 30px;
color: #6C6C6C;
text-align: left;
line-height: 30px; 
position: relative; 
z-index: 9999; 
}
.iz2 {
width: 500px;
height: 30px;
border-radius: 10px;
margin-top: 0px;
margin-left: -5px;
margin-bottom: 30px;
background-color: #d3d1d1; 
border: none;
color: #000; 
text-align: left;
line-height: 30px; 
position: relative; 
z-index: 9999;
}
.izq3 {
width: 100px;
height: 30px;
margin-left: -200px; 
margin-top: 430px;
margin-bottom: 30px;
color: #d3d1d1;
text-align: left; 
line-height: 30px; 
position: relative; 
z-index: 9999; 
}
.izq4 {
width: 100px;
height: 30px;
margin-left: -100px; 
margin-top: 500px;
margin-bottom: 30px;
color: #d3d1d1;
text-align: left; 
line-height: 30px; 
position: relative; 
z-index: 9999; 
}


.iz3 {
    width: 500px;
    height: 35px;
    border: none;
    background-color: #d3d1d1;
    border-radius: 10px;
    margin-top: 0px;
    margin-left: -5px;
    margin-bottom: 30px;
    text-align: left; 
    line-height: 30px; 
    position: relative;
    z-index: 9999;
}
.hasta {
  width: 100px;
    height: 30px;
    margin-left: 230px; 
    margin-top: 214px;
    margin-bottom: 30px;
    color: #6C6C6C;
    text-align: center; 
    line-height: 30px; 
    position: relative; 
    z-index: 9999; 
}

.de {
  width: 100px;
  height: 30px;
  margin-left: -390px; 
  margin-top: 213px;
  margin-bottom: 30px;
  color: #6C6C6C;
  text-align: left; 
  line-height: 30px; 
  position: relative; 
  z-index: 9999; 
}
.horario {
position: absolute;
display: flex;
align-items: center;
}

.dropdown {
  position: absolute;
  top: 550px;
  right: 430px;
  z-index: 1000;
}

.dropdown-toggle {
  display: none; /* Oculta el checkbox */
}

.dropbtn {
 width: 260px;
  background-color: #c8c6c6;
  color: rgb(0, 0, 0);
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  display: inline-block; /* Asegúrate de que el botón se alinee con el contenido del dropdown */
  border-radius: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 260px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: 100%;
  left: 0;
}

.dropdown-content a {
  color: black;
  padding: 8px 12px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown-toggle:checked + .dropbtn + .dropdown-content {
  display: block;
}


.laboral {
  position: relative;
  top: 520px; 
  left: 120px;   
  z-index: 1000; 
}



</style>