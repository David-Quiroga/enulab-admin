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
          <div class="nombre">
            <h4>Nombre del Empleado</h4>
            <input class="boton1" placeholder="">
          </div>
  
          <div class="nombre2">
            <h4>Numero de Cedula</h4>
            <input class="boton2" placeholder="">
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
      <div class="horario">
        <h4>Horario laboral</h4>
      </div>
      <div class="hora1">
        <h3>De:</h3>
      </div>
    <div class="hora2">
      <h3>A:</h3>
    </div>
  
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
          <div class="hasta">
            <input class="text1">
          </div>
          <div class="de"> 
            <input class="text2">
          </div>
  </template>
  
  <script>
  import HeaderView from '@/components/header/HeaderView.vue';
  export default {
  name: 'App',
  components: {
    HeaderView
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
    color: #000000;
  }
  
  .continuar {
    background-color: #ff7a00;
    color: #ffffff;
}
/* Estilos para la información adicional */
.informacion-adicional {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  padding: 20px;
  color: #6c6c6c;
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
  margin-left: 70px; 
  margin-top: 330px;
  margin-bottom: 30px;
  color: #6C6C6C;
  text-align: left; 
  line-height: 30px; 
  position: relative;
  z-index: 9999; 
}
.iz1 {
  width: 500px;
  height: 30px;
  border-radius: 10px;
  top: -3px;
  margin-left: -5px;
  margin-bottom: 30px;
  background-color: #ffffff; 
  color: #000; 
  text-align: left; 
  line-height: 30px; 
  position: relative; 
  z-index: 9999; 
}
.izq2 {
  width: 200px;
  height: 30px;
  margin-left: -100px; 
  margin-top: 420px;
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
  background-color: #ffffff; 
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
  margin-top: 500px;
  margin-bottom: 30px;
  color: #6C6C6C;
  text-align: left; 
  line-height: 30px; 
  position: relative; 
  z-index: 9999; 
}
  
  
  .iz3 {
      width: 500px;
      height: 30px;
      border-radius: 10px;
      margin-top: 0px;
      margin-left: -5px;
      margin-bottom: 30px;
      background-color: #ffffff; 
      color: #000; 
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
  
  .text1{
    width: 170px;
    height: 30px;
    border-radius: 10px;
    margin-top: 50px;
    margin-left: -5px;
    margin-bottom: 30px;
    background-color: #ffffff; 
    color: #000; 
    text-align: left; 
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
  
  .text2{
    width: 170px;
    height: 30px;
    border-radius: 10px;
    margin-top: 50px;
    margin-left: -5px;
    margin-bottom: 30px;
    background-color: #ffffff; 
    color: #000; 
    text-align: left; 
    line-height: 30px; 
    position: relative;
    z-index: 9999;
  }
  
  .horario {
      position: absolute;
      top: 240px; 
      left: 860px; 
      z-index: 9999; 
      color: #6c6c6c;
  }
  
  .hora1 {
      position: absolute;
      top: 270px; 
      left: 860px; 
      z-index: 9999; 
      color: #6c6c6c;
  }
  
.hora2 {
  position: absolute;
  top: 268px; 
  left: 1150px; 
  z-index: 9999; 
  color: #6c6c6c;
}
</style>