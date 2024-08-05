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
<div class="contenedor-principal">
    <h1>{{ isEditing ? 'Editar Inventario' : 'Creación del Inventario' }}</h1>
        <div class="contenedor"> 
            <div class="izquierda">
                <div>
                    <h4>Nombre del item:</h4>
                    <input  v-model="nombreProductos">
                </div>
                <div>
                    <h4>Cantidad (gr):</h4>
                    <input  type="number" v-model="cantidad" min="0" max="9999999999">
                </div>
                <div>
                    <h4>Categoría:</h4>
                    <input v-model="categoria" pattern="producto|implemento" title="Ingrese 'producto' o 'implemento'">
                </div>
                
                <div class="boton3">
                    <h4>Estado:</h4>
                    <input v-model="estado" >
                </div>
            </div>
            <div class="derecha">
                <h4 >Descripción del item:</h4>
                <textarea  v-model="descripcion"></textarea>
            </div>
        </div>
    <!--Botones -->
        <div class="botones">
            <router-link to="/inventario">
                <button type="button" class="btn-back">Atrás</button>
            </router-link>
            <button type="button" class="btn-conf" @click="submitForm">Continuar</button>
        </div>
    </div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView.vue';
import axios from 'axios';
// import Swal from 'sweetalert2';

export default {
    name: 'MenuListView',
    components: {
        HeaderView
    },
    data() {
        return {
            nombreProductos: "",
            cantidad: "",
            categoria: "",
            estado: "",
            descripcion: "",
            isEditing: false
        };
    },
    props: ['idInventario'],
    created() {
        if (this.idInventario) {
            this.isEditing = true;
            this.loadInventario();
        }
    },
    methods: {
        async loadInventario() {
            try {
                const response = await axios.get(`http://localhost:4200/inventario/${this.idInventario}`);
                const inventario = response.data;
                this.nombreProductos = inventario.nombreProductos;
                this.cantidad = inventario.cantidad;
                this.categoria = inventario.categoria;
                this.estado = inventario.estado;
                this.descripcion = inventario.descripcion;
            } catch (error) {
                console.error('Error cargando el inventario', error);
            }
        },
        async submitForm() {
            try {
                const inventarioData = {
                    nombreProductos: this.nombreProductos,
                    cantidad: this.cantidad,
                    categoria: this.categoria,
                    estado: this.estado,
                    descripcion: this.descripcion
                };
                if (this.isEditing) {
                    await axios.put(`http://localhost:4200/inventario/${this.idInventario}`, inventarioData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                } else {
                    await axios.post('http://localhost:4200/inventario', inventarioData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                }

                this.nombreProductos = '';
                this.cantidad = '';
                this.categoria = '';
                this.estado = '';
                this.descripcion = '';

                this.$router.push('/inventario');
            } catch (error) {
                console.log('Error interno del servidor', error);
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
    padding-left: 150px;
    margin-top: 130px;
    margin-bottom: 50px;
}

label{
    color: #000000;
}

input, textarea {
    background-color: #d3d1d1;
    border: none;
    border-radius: 10px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 21px;
}

textarea {
    height: 80px; /* Ajustar altura del textarea */
}

form {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contenedor-principal{
    width: 100%;
}
.contenedor {
    display: flex;
    width: 900px; /* Ajustar al 100% del contenedor */
    justify-content: space-between; /* Espacio entre columnas */

}
.mision{
    margin-top: 2px;
    margin-left: 30px;
}
.iz1{
    margin-left: 30px;
    margin-top: 1px;
}
.izquierda, .derecha {
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    width: 47%;
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
    margin-right: 10px
}

.btn-back {
    background-color: #BBB7B7;
    position: relative;
    left: -2px;
    width: 240px;
}

.btn-conf {
    background-color: #FF7A00;
    color: #FFFFFF;
    position: relative;
    left: -640px;
    width: 240px;
}
.boton3{
    position: absolute;
    top: 350px;
    left: 830px;
}
input, textarea {
    background-color: #d3d1d1;
    border: 1px solid #000; /* Borde negro */
    border-radius: 5px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 21px;
    padding-left: 10px; /* Espacio a la izquierda del texto */
    padding-right: 10px; /* Espacio a la derecha del texto */
}
.derecha{
    margin-left: 110px;
}
</style>
