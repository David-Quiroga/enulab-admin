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
    <div class="container">
        <h1>Visualización de menú</h1>
        <div class="content">

            <div class="izquierda">
                <h1>MENU</h1>
                <div class="bloque1">

                <h3>Entrantes</h3>
                <h4>Entradas frias</h4>
                <div class="entrada-seccion">
                    <div class="entrada-texto">
                        <p>Alitas BBQ <span>15.00</span></p>
                        <p>Costillas <span>15.00</span></p>
                    </div>
                    <img src="../../assets/img/entrada1.png" alt="">
                </div>

                <h4>Entradas Calientes</h4>
                <div class="entrada-seccion">
                    <div class="entrada-texto">
                        <p>Alitas BBQ <span>15.00</span></p>
                        <p>Costillas <span>15.00</span></p>
                    </div>
                    <!-- Puedes agregar una imagen aquí si lo deseas -->
                </div>

                <h4>Aperitivos</h4>
                <div class="entrada-seccion">
                    <div class="entrada-texto">
                        <p>Alitas BBQ <span>15.00</span></p>
                        <p>Costillas <span>15.00</span></p>
                    </div>
                    <img src="../../assets/img/entrada.png" alt="">
                </div>

                <h4>Snacks</h4>
                <div class="entrada-seccion">
                    <div class="entrada-texto">
                        <p>Alitas BBQ <span>15.00</span></p>
                        <p>Costillas <span>15.00</span></p>
                    </div>
                    <!-- Puedes agregar una imagen aquí si lo deseas -->
                </div>
            </div>
            </div>


            <div class="medio">
                <div class="bloque2">
                    <h3>Bebidas</h3>
                    <h4>Sin alcohol</h4>
                    <div class="bebida-seccion">
                        <div class="bebida-texto">
                            <p>Alitas BBQ <span>15.00</span></p>
                            <p>Costillas <span>15.00</span></p>
                        </div>
                        <img src="../../assets/img/bebidas.png" alt="">
                    </div>

                    <h4>Con alcohol</h4>
                    <div class="bebida-seccion">
                        <div class="bebida-texto">
                        <p>Alitas BBQ <span>15.00</span></p>
                        <p>Costillas <span>15.00</span></p>
                        <p>Costillas <span>15.00</span></p>
                        <p>Costillas <span>15.00</span></p>
                        <p>Costillas <span>15.00</span></p>
                        </div>
                    </div>
                    
                </div>

                <div class="bloque3">
                    <h3>Postres</h3>
                    <h4>Frios</h4>
                    <div class="postre-seccion">
                        <div class="postre-texto">
                            <p>Alitas BBQ <span>15.00</span></p>
                            <p>Alitas BBQ <span>15.00</span></p>
                        </div>
                    </div>

                    <h4>Calientes</h4>
                    <div class="postre-seccion">
                        <div class="postre-texto">
                            <p>Alitas BBQ <span>15.00</span></p>
                            <p>Alitas BBQ <span>15.00</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="derecha">
                <div class="bloque4">
                    <h3>Sopas</h3>
                    <h4>Mariscos</h4>
                    <div class="sopa-seccion">
                        <div class="sopa-texto">
                            <p>Alitas BBQ <span>15.00</span></p>
                            <p>Alitas BBQ <span>15.00</span></p>
                        </div>
                    </div>
                    <h4>Cremas</h4>
                    <div class="sopa-seccion">
                        <div class="sopa-texto">
                            <p>Alitas BBQ <span>15.00</span></p>
                            <p>Alitas BBQ <span>15.00</span></p>
                        </div>
                    </div>
                    <h4>Caldos</h4>
                    <div class="sopa-seccion">
                        <div class="sopa-texto">
                            <p>Alitas BBQ <span>15.00</span></p>
                        </div>
                    </div>
                </div>
                <div class="bloque5">
                    <h3>Helados</h3>
                    <h4>Naturales</h4>
                    <div class="helado-seccion">
                        <div class="helado-texto">
                            <p>Alitas BBQ <span>15.00</span></p>
                            <p>Alitas BBQ <span>15.00</span></p>
                        </div>
                    </div>
                    <h4>Especiales</h4>
                    <div class="helado-seccion">
                        <div class="helado-texto">
                            <p>Alitas BBQ <span>15.00</span></p>
                            <p>Alitas BBQ <span>15.00</span></p>
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
    name: 'MenuListView',
    components: {
        HeaderView
    }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Peralta&display=swap');

.container {
    width: 100%;
}

.container h1 {
    color: #6C6C6C;
    margin-top: 80px;
    padding-left: 50px;
}

.content {
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
}

.izquierda, .medio, .derecha {
    height: 600px; /* Ajusta esta altura según tus necesidades */
    width: 700px;
    box-sizing: border-box;
    margin-left: 10px;
}

.izquierda {
    background-color: #353535;
}
.izquierda h1{
    color: #FFFBF0;
    font-size: 120px;
    padding: 0 0 0 10px;
    margin: 0;
}

.medio {
    background-color: #353535;
}

.derecha {
    background-color: #353535;
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

    justify-content: space-between;
}
.postre-seccion {
    display: flex;
    justify-content: space-between;
}
.sopa-seccion {
    display: flex;
    justify-content: space-between;
}
.helado-seccion {
    display: flex;
    justify-content: space-between;
}
.bloque1 h3{
    text-align: center;
    color: #FFFBF0;
    font-weight: 300;
    background-color: red;
    width: 50%;
    height: 25px;
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
.bloque1 img{
    border-radius: 100%;
    width: 70px;
    height: 70px;
    border: 5px solid #FFFFFF;
}
.bloque2 img{
    border-radius: 100%;
    width: 70px;
    height: 70px;
    border: 5px solid #FFFFFF;
}
.bloque2, .bloque3, .bloque4, .bloque5{
    height: 50%;
    margin-top: -38px;
}
.bloque1 h4, .bloque2 h4,.bloque3 h4,.bloque4 h4,.bloque5 h4{
    margin-top: 35px;
    margin-left: 20px;
    font-family: "Peralta", sans-serif;
}
.bloque1 p, .bloque2 p,.bloque3 p,.bloque4 p,.bloque5 p{
    color: #FFFBF0;
    margin-left: 20px;
    margin-top: 10px;
}
.bloque1 span, .bloque2 span,.bloque3 span,.bloque4 span,.bloque5 span{
    color: #FFFBF0;
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