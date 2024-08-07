<template>
  <HeaderView/>
    <!-- Contenido principal -->
    <main>
      <div class="hero">
        <h1 class="titulo">Creacion de restaurante</h1>
      </div>

      <!-- Formulario de información del restaurante -->
      <div class="formulario">
        <div>
          <h4>Nombre del restaurante</h4>
          <input class="boton1" v-model="nombreRestaurante">
        </div>

        <div class="nombre2">
          <h4>Ubicacion del restaurante</h4>
          <input class="boton2" v-model="ubicacion">
        </div>

        <div class="nombre3">
          <h4>Tipo de comida</h4>
          <input class="boton3" id="comida-select" v-model="tipoComida">

        <div class="nombre4">
          <h4>Descripcion del negocio</h4>
          <input class="boton4" v-model="descripcion">
        </div>
      </div>
    </div>

      <!-- Botones de navegación -->
      <div class="botones">
        <router-link to="/restaurante">
          <button class="btn-back">← Atras</button>
        </router-link>
        
          <button class="btn-conf" @click="createRes">Continuar</button>
      </div>
    </main>

    <div class="izq1">
            <label class="imagen" for="imagen">Imagen del Negocio:</label>
            <input type="file" class="logo" name="imagen" @change="onImageChange">
          <h4 class="mision">Mision y Vision (opcional)</h4>
          <textarea class="iz1" v-model="objetivos"></textarea>
        </div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView.vue';
import axios from 'axios';

export default {
  name: 'createRes',
  components: {
    HeaderView
  },
  data() {
    return {
      nombreRestaurante: "",
      ubicacion: "",
      objetivos: "",
      descripcion: "",
      tipoComida: "",
      logo: null
    };
  },
  methods: {
    onImageChange(event) {
      this.logo = event.target.files[0];
    },
    async createRes() {
      try {
        // Crear una instancia de FormData
        const formData = new FormData();
        formData.append("nombreRestaurante", this.nombreRestaurante);
        formData.append("ubicacion", this.ubicacion);
        formData.append("tipoComida", this.tipoComida);
        formData.append("objetivos", this.objetivos);
        formData.append("descripcion", this.descripcion);

        if (this.logo) {
          formData.append("logo", this.logo);
        }

        // Enviar la solicitud con los datos del formulario
        await axios.post("http://localhost:4200/restaurante", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        // Limpieza de los datos del formulario
        this.nombreRestaurante = "";
        this.ubicacion = "";
        this.tipoComida = "";
        this.objetivos = "";
        this.descripcion = "";
        this.logo = null;

        this.$router.push("/restaurante");
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>
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
left: 100px;
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
.izquierda, .derecha {
    display: flex;
    flex-direction: column;
    width: 47%;
}
input{
    background-color: #d3d1d1;
    border: none;
    border-radius: 10px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 21px;
}
textarea{
  height: 150px;
}
.mision{
  margin-top: 95px;
}
.imagen{
  position: absolute;
  margin-top: 4px;
}
.logo{
  position: absolute;
  top: 30px;
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
margin-right: 10px
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
position: absolute;
margin-left: 260px;
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
.izq1 {
  width: 100px;
  height: 30px;
  margin-left: -580px; 
  margin-top: -10px;
  margin-bottom: 30px;
  text-align: left; 
  line-height: 30px; 
  position: relative;
  white-space: nowrap;
  z-index: 9999; 
}
  .izq3 {
  width: 100px;
  height: 30px;
  margin-left: -100px; 
  margin-top: 530px;
  margin-bottom: 30px;
  color: #d3d1d1;
  text-align: left; 
  line-height: 30px; 
  position: relative; 
  z-index: 9999; 
  }
  input {
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