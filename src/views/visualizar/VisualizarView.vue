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
<!-- ! Termina el SIDEBAR -->
<div class="container">
        <h1>Visualización de menú</h1>
        <div class="content">

            <div class="izquierda">
                <h1>MENU</h1>
                <div class="bloque1">

                <h3>Entrantes</h3>
                <h4>Entradas Calientes</h4>
                <div class="entrada-seccion" v-for="entrada in entradas.lista" :key="entrada.idEntrada">
                    <div class="entrada-texto">
                        <p>{{entrada.nombre}} <span>{{ entrada.precio }}</span></p>
                    </div>
                </div>
                <img src="../../assets/img/ceviche.jpg" alt="" class="imagen1">

                <h4>Aperitivos</h4>
                <div class="entrada-seccion">
                    <div class="entrada-texto">
                    </div>
                </div>

                <h4>Snacks</h4>
                <div class="entrada-seccion">
                    <div class="entrada-texto">

                    </div>
                </div>
            </div>
            </div>


            <div class="medio">
                <div class="bloque2">
                    <h3>Bebidas</h3>
                    <h4>Con alcohol</h4>
                    <div class="bebida-seccion" v-for="bebida in bebidas.lista" :key="bebida.idBebida">
                        <div class="bebida-texto">
                            <p>{{bebida.nombre}} <span>{{ bebida.precio }}</span></p>
                        </div>
                    </div>

                        <img src="../../assets/img/trago.jpg" alt="" class="imagen3">
                    
                </div>

                <div class="bloque3">
                    <h3>Postres</h3>
                    <h4>Frios</h4>
                    <div class="postre-seccion" v-for="helado in helado.lista" :key="helado.idHelado">
                        <div class="postre-texto">
                            <p>{{helado.nombre}} <span>{{ helado.precio }}</span></p>
                        </div>
                    </div>
                    <img src="../../assets/img/brownie.jpg" alt="" class="imagen4">
                </div>
            </div>

            <div class="derecha">
                <div class="bloque4">
                    <h3>Sopas</h3>
                    <img src="../../assets/img/entrada1.png" alt="" class="imagen5">
                    <h4>Cremas</h4>
                    <div class="sopa-seccion" v-for="sopa in sopa.lista" :key="sopa.idSopa">
                        <div class="sopa-texto">
                            <p>{{sopa.nombre}} <span>{{ sopa.precio }}</span></p>
                        </div>
                        <!-- <img src="../../assets/img/sopas.png" alt="" > -->
                    </div>
                    <h4>Caldos</h4>
                    <div class="sopa-seccion">
                        <div class="sopa-texto">
                        
                        </div>
                        <!-- <img src="../../assets/img/sopas1.png" alt="" > -->
                    </div>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView.vue';
import axios from 'axios';

export default {
  name: 'CombinedView',
  components: {
    HeaderView
  },
  data() {
    return {
      helado: {
        lista: [],
        form: {
          idHelado: null,
          nombre: '',
          descripcion: '',
          precio: null,
          porciones: '',
          subCategoria: ''
        }
      },
      bebidas: {
        lista: [],
        form: {
          idBebida: null,
          nombre: '',
          descripcion: '',
          precio: null,
          subCategoria: '',
          estado: ''
        }
      },
      entradas: {
        lista: [],
        form: {
          idEntrada: null,
          nombre: '',
          descripcion: '',
          precio: null,
          porciones: '',
          subCategoria: ''
        }
      },
      sopa: {
        lista: [],
        form: {
          idSopa: null,
          nombre: '',
          descripcion: '',
          precio: '',
          porciones: '',
          subCategoria: ''
        }
      }
    };
  },
  created() {
    this.getHelados();
    this.getBebidas();
    this.getEntradas();
    this.getSopas();
  },
  methods: {
    async getHelados() {
      try {
        const response = await axios.get('http://localhost:4200/helados');
        console.log(response.data);
        this.helado.lista = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getBebidas() {
      try {
        const response = await axios.get('http://localhost:4200/bebidas');
        console.log(response.data);
        this.bebidas.lista = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getEntradas() {
      try {
        const response = await axios.get('http://localhost:4200/entrada');
        console.log(response.data);
        this.entradas.lista = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getSopas() {
      try {
        const response = await axios.get('http://localhost:4200/sopas');
        console.log(response.data);
        this.sopa.lista = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Peralta&display=swap');

.container {
    width: 85%;
}

.container h1 {
    color: #000000;
    margin-top: 90px;
    padding-left: 60px;
}

.content {
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    margin: auto;
    width: 95%;
}

.izquierda, .medio, .derecha {
    height: 600px; /* Ajusta esta altura según tus necesidades */
    width: 700px;
    margin-left: 10px;
}

.izquierda {
    background-color: #353535;
}
.izquierda h1{
    color: #FFFBF0;
    font-size: 110px;
    padding: 0 0 0 10px;
    margin: 0;
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: black;
}
.medio {
    background-color: #353535;
    width: 700px;
}

.derecha {
    background-color: #353535;
    width: 700px;
}

.bloque1{
    height: 70%;
}

.entrada-seccion {
    display: flex;
    height: 70px;
    margin-bottom: -30px;
    justify-content: space-between;
}
.bebida-seccion {
    display: flex;
    height: 70px;
    margin-bottom: -30px;

    /* justify-content: space-between; */
}
.postre-seccion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: -10px;
    /* justify-content: space-between; */
}
.sopa-seccion {
    display: flex;
    height: 70px;
    margin-bottom: -38px;
    justify-content: space-between;
}
.helado-seccion {
    display: flex;
    margin-bottom: -35px;
    /* justify-content: space-between; */
}
.bloque1 h3{
    text-align: center;
    color: #FFFBF0;
    font-weight: 300;
    background-color: red;
    width: 50%;
    height: 25px;
    position: relative;
    left: -77px;
    margin: auto;
    margin-bottom: -25px;

}
.bloque2 h3,.bloque3 h3,.bloque4 h3,.bloque5 h3{
    color: #FFFBF0;
    font-weight: 300;
    margin: 0;
    margin-top: 60px;
    margin-left: 20px;
    margin-bottom: -25px;
    background-color: red;
    width: 50%;
    text-align: center;
    font-size: 20px;
}
.imagen1{
    position: absolute;
    left: 550px;
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin: auto;
    border: 5px solid #FFFFFF;
    filter: brightness(0.8);
}
.imagen2{
    border-radius: 100%;
    margin: auto;
    border: 5px solid #FFFFFF;
    filter: brightness(0.8);
    margin-left: 90px;

    width: 110px;
    height: 110px;
}

.imagen3{
    border-radius: 100%;
    width: 110px;
    height: 110px;
    margin-left: 180px;
    border: 5px solid #FFFFFF;
    filter: brightness(0.8);    
}
.imagen4{
    position: absolute;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    top: 570px;
    left: 940px;
    border: 5px solid #FFFFFF;
    filter: brightness(0.8);    
}
.imagen5{
    position: absolute;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    top: 250px;
    left: 1230px;
    border: 5px solid #FFFFFF;
    filter: brightness(0.8);    
}
.imagen6{
    position: absolute;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    top: 590px;
    left: 1230px;
    border: 5px solid #FFFFFF;
    filter: brightness(0.8);    
}
.bloque4 img, .bloque5 img{
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-left: 100px;
    border: 5px solid #FFFFFF;
    filter: brightness(0.8);
}

.bloque2, .bloque3, .bloque4, .bloque5{
    height: 50%;
    margin-top: -38px;
}
.bloque1 h4, .bloque2 h4,.bloque3 h4,.bloque4 h4,.bloque5 h4{
    margin-top: 35px;
    margin-left: 20px;
    text-decoration: underline #FFFFFF;
    text-underline-offset: 6px; /* Ajusta el valor según sea necesario */
    font-family: "Peralta", sans-serif;
}
.bloque1 p, .bloque2 p,.bloque3 p,.bloque4 p,.bloque5 p{
    color: #FFFBF0;
    margin-left: 20px;
    margin-top: 10px;
}
.bloque1 span, .bloque2 span,.bloque3 span,.bloque4 span,.bloque5 span{
    color: #FFFBF0;
    margin-left: 25px;
    font-weight: bold;
}
.bloque1 h4{
    color: #FFBB00;
    
}
.bloque2 h4{
    color: #FA00FF;
    
}
.bloque3 h4{
    color: #55D25A;
    
}
.bloque4 h4{
    color: #0094FF;
    
}
.bloque5 h4{
    color: #FFF500;
    
}
</style>
