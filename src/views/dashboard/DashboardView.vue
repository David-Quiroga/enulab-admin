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
  <div class="container">
    <h1>Dashboard</h1>

    <div class="tarjetas">
      <div class="tarjeta1">
        <h3>Ingresos Totales</h3>
        <p>3,291,922</p>
        <img src="" alt="">
        <button>View Detail →</button>
      </div>
      <div class="tarjeta2">
        <h3>Pedidos de hoy</h3>
        <p>290</p>
        <img src="" alt="">
        <button>View Detail →</button>
      </div>
      <div class="tarjeta3">
        <h3>Pedidos Pendientes</h3>
        <p>10</p>
        <img src="" alt="">
        <button>View Detail →</button>
      </div>
      <div class="tarjeta4">
        <h3>Pedidos Entregados</h3>
        <p>400</p>
        <img src="" alt="">
        <button>View Detail →</button>
      </div>
    </div>

    <div class="seccion-media">

      <div class="izquierda">
        <div class="categorias">
          <h3>Categorias</h3>
            <div class="tarjetas-container">
              <div class="entradas">
                <h3>Entradas</h3>
                <button>Ver</button>
              </div>
              <div class="sopas">
                <h3>Sopas</h3>
                <button>Ver</button>
              </div>
              <div class="bebidas">
                <h3>Bebidas</h3>
                <button>Ver</button>
              </div>
              <div class="postres">
                <h3>Postres</h3>
                <button>Ver</button>
              </div>
            </div>
        </div>
        <div class="redes">
          <h3>Redes Sociales</h3>
          <i class="fa-brands fa-youtube" style="color: #000;"></i>
          <i class="fa-brands fa-tiktok" style="color: #000;"></i>
          <i class="fa-brands fa-telegram" style="color: #000;"></i>
          <i class="fa-brands fa-linkedin" style="color: #000;"></i>
          <i class="fa-brands fa-instagram" style="color: #000;"></i>
          <i class="fa-brands fa-x-twitter" style="color: #000;"></i>
        </div>
      </div>

      <div class="derecha">
        <div class="anuncio">
          <h2>Digital Waiter <br>tu mejor compañero<br>a la hora de <br>administar tu restaurante...</h2>
        </div>
        <div class="empleados">
          <h3>Empleados</h3>
          <div class="empleado1">
              <i class="fa-solid fa-user"></i>
              <div class="empleado-info">
                <h5>Juan Perez</h5>
                <p>Mesero</p>
              </div>
          </div>
          <div class="empleado2">
            <i class="fa-solid fa-user"></i>
            <div class="empleado-info">
                <h5>Juan Perez</h5>
                <p>Mesero</p>
              </div>
          </div>
          <div class="empleado3">
            <i class="fa-solid fa-user"></i>
            <div class="empleado-info">
                <h5>Juan Perez</h5>
                <p>Mesero</p>
              </div>
          </div>
          <div class="empleado4">
            <i class="fa-solid fa-user"></i>
            <div class="empleado-info">
                <h5>Juan Perez</h5>
                <p>Mesero</p>
              </div>
          </div>
        </div>
      </div>
    </div>
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

<style scoped>
body{
  padding: 0;
  margin: 0
}
.container{
  width: 100%;
}
.container h1{
  color: #000000;
  margin-left: 30px; 
  margin-top: 90px
}
.tarjetas{
  background-color: #bebcbc;
  display: flex;
  width: 95%;
  height: 20%;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
}
.tarjeta1, .tarjeta2, .tarjeta3, .tarjeta4{
  margin: auto;
  width: 250px;
  height: 120px;
}
.tarjeta1{
  background-color: #348FE2;
}
.tarjeta2{
  background-color: #49B6D6;
}
.tarjeta3{
  background-color: #FF5B57;
}
.tarjeta4{
  background-color: #F59C1A;
}
.tarjeta1 h3, .tarjeta2 h3, .tarjeta3 h3, .tarjeta4 h3{
  color: #FFFFFF;
  margin-left: 20px;
  margin-top: 7px;
  font-weight: 400;
  font-size: 15px;
}
.tarjeta1 p, .tarjeta2 p, .tarjeta3 p, .tarjeta4 p{
  color: #FFFFFF;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 30px;
}
.tarjeta1 button, .tarjeta2 button, .tarjeta3 button, .tarjeta4 button{
  height: 30px;
  border: none;
  margin-top: 8px;
  color: #8C9094;
  text-align: right;
  cursor: pointer;
  padding-right: 10px;
}
.tarjeta1 button{
  background-color: #15395A;
}
.tarjeta2 button{
  background-color: #2C6D80;
} 
.tarjeta3 button {
  background-color: #993734;
}
.tarjeta4 button{
  background-color: #623E0A;
}
.tarjeta1 button, .tarjeta2 button, .tarjeta3 button, .tarjeta4 button{
  width: 100%;
}

.seccion-media{
  display: flex;
  height: 61%;
  width: 95%; 
  margin: auto
}
.izquierda{
  width: 75%;
}
.categorias{
  background-color: #bebcbc;
  border-radius: 10px;
  width: 96%;
  height: 55%;
  margin: auto;
  margin-left: 3px;
  margin-top: 20px;
}
.categorias h3{
  color: #000;
  padding: 5px 10px;
}
.tarjetas-container{
  display: flex;
}
.entradas, .sopas, .bebidas, .postres{
  margin: auto;
  height: 220px;
  width: 190px;
  border-radius: 10px;

}
.entradas{
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url("../../assets/img/entrada.png") no-repeat center / cover;
}
.sopas{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/img/sopas.png") no-repeat center / cover;
}

.bebidas{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/img/bebidas.png") no-repeat center / cover;
}

.postres{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/img/postres.png") no-repeat center / cover;
}
.entradas h3, .sopas h3, .bebidas h3, .postres h3{
  color: #CCCCCC;
  font-size: 25px;
  font-weight: 400;
  margin-top: 15px;
  margin-left: 15px;
}
.entradas button, .sopas button, .bebidas button, .postres button{
  color: #FFFFFF;
  font-size: 20px;
  background-color: #0085FF;
  border: none;
  width: 60%;
  height: 30px;
  margin-top: 100px;
  margin-left: 40px;
  border-radius: 10px;
  cursor: pointer;
}
.redes{
  width: 96%;
  margin: auto;
  margin-top: 20px;
  margin-left: 3px;
  height: 30%;
  border: 4px solid #000000;
  border-radius: 10px;
}
.redes h3{
  color: #000000;
  padding: 5px 10px;
}
.redes i{
  font-size: 40px;
  margin: auto;
  margin-left: 40px;
  margin-top: 10px;
  padding: 0 30px;
  cursor: pointer;
  color: #000000;
}
.derecha{
  width: 25%;
}
.anuncio{
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/img/restaurante.png") no-repeat center / cover;
  width: 310px;
  height: 200px;
  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
  margin-left: 1px;
}
.anuncio h2{
  color: #A7A7A7;
  padding: 20px;
}
.empleados{
  background-color: #bebcbc;
  margin-top: 11px;
  height: 48%;
  border-radius: 10px;
}
.empleados h3{
  color: #000;
  padding: 10px 10px;
}

.empleado1, .empleado2, .empleado3, .empleado4{
  background-color: #D9D9D9;
  width: 88%;
  height: 40px;
  margin: auto;
  margin-bottom: 5px;
  border: 1px solid black;
  font-size: 20px;
  display: flex;
}
.empleado1 i, .empleado2 i, .empleado3 i, .empleado4 i {
  margin: auto;
  margin-left: 20px;
}
.empleado-info{
  display: flex;
}
.empleado-info h5 {
  margin: auto;
  margin-right: 40px;
  font-size: 16px;
}

.empleado-info p {
  margin: auto;
  font-size: 13px;
  margin-right: 15px;
  color: #666;
  font-weight: bold
}

</style>