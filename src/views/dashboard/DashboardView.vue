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
  <div class="rectangulo1"></div>
    <div class="rec1">
      <h3>Categorias</h3>
      <div class="re2">
          <h3>Entradas</h3>
          <img src="../../assets/img/entrada.png" class="imgP">
          <button class="boton1">Ver</button>
          <div class="re3">
              <h3>Sopas</h3>
              <img src="../../assets/img/sopas1.png" class="imgSopas">
              <button class="boton2">Ver</button>
              <div class="re4">
                  <h3>Bebidas</h3>
                  <img src="../../assets/img/bebidas.png" class="imgBebidas">
                  <button class="boton3">Ver</button>
                  <div class="re5">
                      <h3>Postres</h3>
                      <img src="../../assets/img/postres.png" class="imgPostres">
                      <button class="boton4">Ver</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <!-- <h1 class="dashboard">Dashboard</h1> -->
    <div class="rect1">
      <h5>Ingresos totales</h5>
      <h3>3,291,922</h3>
    <div class="rect2">
    <button class="arrow-btn">➔</button>
    <div class="rect3">
      <h5>Pedidos de hoy</h5>
      <h3>290</h3>
    <div class="rect4">
    <button class="arrow-btn2">➔</button>
    <div class="rect5">
      <h5>Pedidos pendientes</h5>
      <h3>10</h3>
      <div class="rect6">
    <button class="arrow-btn3">➔</button>
                <div class="rect7">
                    <h5>Pedidos entregados</h5>
                    <h3>400</h3>
                <div class="rect8">
                <button class="arrow-btn4">➔</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="detail1">
<h6>View detail</h6>
</div>
<div class="detail2">
<h6>View detail</h6>
</div>
<div class="detail3">
<h6>View detail</h6>
</div>
<div class="detail4">
<h6>View detail</h6>
</div>
<div class="mesero1">
<h6>Mesero</h6>
</div>
<div class="mesero2">
<h6>Mesero</h6>
</div>
<div class="mesero3">
<h6>Mesero</h6>
</div>

<div class="dash">
<h2>Dashboard</h2>
</div>
    <div class="rectangulo2"></div>
    <div class="rec2">
      <h3>Redes Sociales</h3>
      <div class="redes">
  <div class="icon-container">
    <i class="fa-brands fa-x-twitter"></i>
    <span>Twitter</span>
  </div>
  <div class="icon-container">
    <i class="fa-brands fa-instagram"></i>
    <span>Instagram</span>
  </div>
  <div class="icon-container">
    <i class="fa-brands fa-youtube" style="color: #787d87;"></i>
    <span>YouTube</span>
  </div>
  <div class="icon-container">
    <i class="fa-brands fa-tiktok"></i>
    <span>TikTok</span>
  </div>
  <div class="icon-container">
    <i class="fa-brands fa-linkedin"></i>
    <span>LinkedIn</span>
  </div>
  <div class="icon-container">
    <i class="fa-brands fa-telegram"></i>
    <span>Telegram</span>
  </div>
</div>
    </div>
    <div class="rectangulo2"></div>

    <div class="rectangulo3"></div>
    
    <div class="rectangulo4">
      Empleados
    </div>
    <div class="emp"><i class="fa-solid fa-user"><p>Juan Perez</p></i></div>
    <div class="emp2"><i class="fa-solid fa-user"><p>Juan Perez</p></i></div>
    <div class="emp3"><i class="fa-solid fa-user"><p>Juan Perez</p></i></div>

  <div class="texto">Digital Waiter 
    es tu mejor acompanante
    a la hora de
    administar tu restaurante...</div>
    <img src="../../assets/img/entrada.png" class="imgD">

    <div class="opcion1"></div>
    <div class="opcion2"></div>
    <div class="opcion3"></div>


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
.dashboard{
position: absolute;
top: 30px;
left:80px;
}

.opcion1 {
width: 800px;
height: 140px;
margin-top: 68px;
background-color: #2E2C2C;
position: absolute; 
top: 60px; 
left: 295px; 
border-radius: 10px;
}

.opcion2 {
width: 800px;
height: 260px;
margin-top: 230px;
background-color: #2E2C2C;
position: absolute;
top: 60px; 
left: 295px; 
border-radius: 10px;
}

.opcion3 {
width: 800px;
height: 120px;
margin-top: 230px;
background-color: #141313; 
position: absolute;
top: 390px;
left: 295px;
border: 5px solid #BDBDBD; 
border-radius: 10px;
}


.dash {
position: fixed;
top: 90px;
left: 300px;
color: #6C6C6C;
}

.detail1 {
position: fixed;
top: 225px;
left: 390px;
color: #6C6C6C;
z-index: 9999; /* Un valor alto para asegurar que esté encima de todos los demás elementos */
}
.detail2 {
position: fixed;
top: 225px;
left: 585px;
color: #6C6C6C;
z-index: 9999; /* Un valor alto para asegurar que esté encima de todos los demás elementos */
}
.detail3 {
position: fixed;
top: 225px;
left: 780px;
color: #6C6C6C;
z-index: 9999; /* Un valor alto para asegurar que esté encima de todos los demás elementos */
}
.detail4 {
position: fixed;
top: 225px;
left: 970px;
color: #6C6C6C;
z-index: 9999; /* Un valor alto para asegurar que esté encima de todos los demás elementos */
}
.redes {
position: absolute;
top: 40px;
display: flex;
justify-content: center; 
align-items: center; 
gap: 70px; 
}

.icon-container {
display: flex;
flex-direction: column; 
align-items: center; 
text-align: center;
}

.icon-container i {
font-size: 2rem; 
margin-bottom: 5px; 
}

.icon-container span {
font-size: 1rem; 
}

.rectangulo1 {
  width: 800px; 
  height: 130px; 
  background-color: #2E2C2C; 
  margin-left: -1210px; 
  margin-top: 130px; 
  border: 2px solid #333; 
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
}
.rect1 {
    width: 170px;
    height: 90px;
    background-color: #348FE2;
    border-radius: 10px;
    position: absolute;
    left: 400px;
    top: 190px;
    transform: translate(-50%, -50%);
    padding: 20px; 
    z-index: 9999;
    white-space: nowrap;
    text-align: center;
  }

.arrow-btn {
padding: 4px 8px; 
background-color: #8C9094;
border-radius: 10px;
color: #fff; 
border: none; 
cursor: pointer; 
margin-left: 130px;
margin-top: -11px;
position: relative; 
z-index: 0; 
}
.rect2 {
width: 170px;
height: 30px;
background-color: #15395A;
position: absolute;
left: 85px;
top: 88px; 
transform: translate(-50%, -50%);
padding-top: 7px; 
padding-left: 10px;
z-index: 9999;
white-space: nowrap;
border-radius: 0 0 10px 10px;
}
  .rect3 {
    width: 170px;
    height: 90px;
    background-color: #49B6D6;
    border-radius: 10px;
    position: absolute;
    left: 280px;
    top: -28px;
    transform: translate(-50%, -50%);
    padding: 20px; 
    z-index: 9999;
    white-space: nowrap;
    text-align: center;
  }
.arrow-btn2 {
padding: 4px 8px; 
background-color: #8C9094; 
border-radius: 10px;
color: #fff; 
border: none; 
cursor: pointer; 
margin-left: 130px;
margin-top: -11px;
position: relative; 
z-index: 0; 
}
  .rect4 {
    width: 170px;
    height: 30px;
    background-color: #15395A;
    position: absolute;
    left: 85px;
    top: 88px;
    transform: translate(-50%, -50%);
    padding-top: 7px;
    padding-left: 10px;
    z-index: 9999;
    white-space: nowrap;
    border-radius: 0 0 10px 10px;
  }
  .rect5 {
    width: 170px;
    height: 90px;
    background-color: #FF5B57;
    border-radius: 10px;
    position: absolute;
    left: 280px;
    top: -28px;
    transform: translate(-50%, -50%);
    padding: 20px;
    z-index: 9999;
    white-space: nowrap;
    text-align: center;
  }
.arrow-btn3 {
padding: 4px 8px; 
background-color: #8C9094; 
border-radius: 10px;
color: #fff; 
border: none; 
cursor: pointer; 
margin-left: 130px;
margin-top: -11px;
position: relative; 
z-index: 0; 
}
  .rect6 {
    width: 170px;
    height: 30px;
    background-color: #15395A;
    position: absolute;
    left: 85px;
    top: 88px;
    transform: translate(-50%, -50%);
    padding-top: 7px; 
    padding-left: 10px; 
    z-index: 9999;
    white-space: nowrap;
    border-radius: 0 0 10px 10px;
  }
  .rect7 {
    width: 170px;
    height: 90px;
    background-color: #F59C1A;
    border-radius: 10px;
    position: absolute;
    left: 280px;
    top: -28px;
    transform: translate(-50%, -50%);
    padding: 20px; 
    z-index: 9999;
    white-space: nowrap;
    text-align: center;
  }
.arrow-btn4 {
padding: 4px 8px; 
background-color: #8C9094; 
border-radius: 10px;
color: #fff;
border: none; 
cursor: pointer; 
margin-left: 130px;
margin-top: -11px;
position: relative; 
z-index: 0; 
}
  .rect8 {
    width: 170px;
    height: 30px;
    background-color: #15395A;
    position: absolute;
    left: 85px;
    top: 88px;
    transform: translate(-50%, -50%);
    padding-top: 7px; 
    padding-left: 10px; 
    z-index: 9999;
    white-space: nowrap;
    border-radius: 0 0 10px 10px;
  }

.re2 {
  color: #000000;
  text-align: center;
  width: 170px;
  height: 200px;
  background-color: #394148;
  border-radius: 10px;
  position: absolute;
  left: 200px;
  top: 135px;
  transform: translate(-50%, -50%);
  padding: 20px; 
  z-index: 9999;
  white-space: nowrap;
}

.imgD{
position: absolute;
top: 125px;
left: 1200px;
width: 170px;
height: 200px;
z-index: -1;
}
.imgP{
position: absolute;
border-radius: 10px;
top: 0px;
left: 0px;
width: 170px;
height: 200px;
z-index: -1;
}
.imgSopas{
position: absolute;
border-radius: 10px;
top: 0px;
left: 0px;
width: 170px;
height: 200px;
z-index: -1;
}
.imgBebidas{
position: absolute;
border-radius: 10px;
top: 0px;
left: 0px;
width: 170px;
height: 200px;
z-index: -1;
}
.imgPostres{
position: absolute;
border-radius: 10px;
top: 0px;
left: 0px;
width: 170px;
height: 200px;
z-index: -1;
}
.boton1 {
padding: 5px 15px; 
background-color: #0085FF; 
border-radius: 10px;
color: #fff; 
border: none; 
cursor: pointer; 
margin-left: 1px;
margin-top: 110px;
position: relative; 
z-index: 0; 
}
.re3 {
    color:#000;
    text-align: center;
    width: 170px;
    height: 200px;
    background-color: #394148;
    border-radius: 10px;
    position: absolute;
    left: 270px;
    top: 100px;
    transform: translate(-50%, -50%);
    padding: 20px; 
    z-index: 9999;
    white-space: nowrap;
    text-align: center;
  }
.boton2 {
padding: 5px 15px; 
background-color: #0085FF; 
border-radius: 10px;
color: #fff; 
border: none;
cursor: pointer; 
margin-left: 1px;
margin-top: 110px;
position: relative; 
z-index: 0; 
}
.re4 {
    color:#000;
    text-align: center;
    width: 170px;
    height: 200px;
    background-color: #394148;
    border-radius: 10px;
    position: absolute;
    left: 270px;
    top: 100px;
    transform: translate(-50%, -50%);
    padding: 20px; 
    z-index: 9999;
    white-space: nowrap;
    text-align: center;
  }

.boton3 {
padding: 5px 15px; 
background-color: #0085FF; 
border-radius: 10px;
color: #fff; 
border: none; 
cursor: pointer; 
margin-left: 1px;
margin-top: 110px;
position: relative; 
z-index: 0; 
}

.re5 {
    color:#000;
    text-align: center;
    width: 170px;
    height: 200px;
    background-color: #394148;
    border-radius: 10px;
    position: absolute;
    left: 270px;
    top: 100px;
    transform: translate(-50%, -50%);
    padding: 20px; 
    z-index: 9999;
    white-space: nowrap;
    text-align: center;
  }

.boton4 {
padding: 5px 15px; 
background-color: #0085FF; 
border-radius: 10px;
color: #fff; 
border: none; 
cursor: pointer; 
margin-left: 1px;
margin-top: 110px;
position: relative; 
z-index: 0; 
}

.rectangulo4 {
    width: 380px;
    height: 250px;
    background-color: #2E2C2C;
    position: absolute;
    left: 1140px; 
    top: 430px; 
    border: 2px solid #333;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #979797;
    font-family: 'Montserrat', sans-serif;
    padding-left: 10px;
    padding-top: 10px;
  }

  .empleado {
  color: #979797;
  margin-left: 850px;
  margin-top: -145px;
    width: 200px;
    height: 30px;
    position: absolute; 
    left: 22%; 
    top: 81%; 
    transform: translate(-50%, -50%); 
    padding-top: 7px;
    padding-left: 100px;
    z-index: 9999; 
    white-space: nowrap;
  }

  .emp {
  position: absolute;
  top: 470px;
  left: 1150px;
  width: 360px;
  height: 50px;
  background-color: #D9D9D9;
  z-index: 9999; 
}
.emp2 {
  position: absolute;
  top: 540px;
  left: 1150px;
  width: 360px;
  height: 50px;
  background-color: #D9D9D9;
  z-index: 9999; 
}
.emp3 {
  position: absolute;
  top: 610px;
  left: 1150px;
  width: 360px;
  height: 50px;
  background-color: #D9D9D9;
  z-index: 9999; 
}
.texto {
  width: 380px; 
  height: 250px; 
  background-image:url('../../assets/img/restaurante.png');
  margin-left:1370px; 
  margin-top: 125px; 
  border: 2px solid #333; 
  border-radius: 5px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  color: #ffffff;
  font-family: 'montserrat', sans-serif;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 35px; 
}
.rec1 {
  color: #979797;
    width: 200px;
    height: 30px;
    position: absolute; 
    left: 20%; 
    top: 41%; 
    transform: translate(-50%, -50%); 
    padding-top: 7px;
    padding-left: 100px;
    z-index: 9999; 
  }
.rec2 {
color: #979797;
width: 200px;
height: 30px;
position: absolute; 
left: 22%; 
top: 81%; 
transform: translate(-50%, -50%); 
padding-top: 7px;
padding-left: 100px;
z-index: 9999; 
white-space: nowrap;
}
.mesero1 {
  position: fixed;
  top: 490px;
  left: 1350px;
  color: #6C6C6C;
  z-index: 99999; 
}

.mesero2 {
  position: fixed;
  top: 560px;
  left: 1350px;
  color: #6C6C6C;
  z-index: 99999; 
}

.mesero3 {
  position: fixed;
  top: 630px;
  left: 1350px;
  color: #6C6C6C;
  z-index: 99999; 
}


</style>