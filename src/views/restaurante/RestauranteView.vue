<template>
    <div>
        <HeaderView />
        <div class="container">
            <div class="titulo">
                <h1>Mis restaurantes</h1>
                <div class="line"></div>
            </div>
            <div class="superior">
                <router-link to="/formulario">
                    <button>Agregar restaurante</button>
                </router-link>
            </div>
            <div class="restaurant-list">
                <div v-if="restaurante.lista && restaurante.lista.length > 0">
                    <div class="restaurant-card" v-for="restaurante in restaurante.lista" :key="restaurante.id">
                        <div class="restaurant-image">
                            <img src="../../assets/img/bebidas.png" alt="Imagen del restaurante">
                        </div>
                        <div class="restaurant-info">
                            <h2>{{restaurante.nombreRestaurante}}</h2>
                            <p>{{restaurante.descripcion}}</p>
                        </div>
                        <div class="restaurant-actions">
                            <router-link to="/formulario"><i class="fa-solid fa-pen-to-square" style="color: #000000;"></i></router-link>
                            <router-link to="/dashboard"><i class="fa-solid fa-house" style="color: #000000;"></i></router-link>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>No hay restaurantes disponibles.</p>
                </div>
            </div>
        </div>
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
    data() {
        return {
            restaurante: {
                lista: [],
                form: {
                    id: null,
                    nombreRestaurante: '',
                    ubicacion: '',
                    tipoComida: '',
                    objetivos: '',
                    descripcion: ''
                }
            }
        };
    },
    created() {
        this.getRestaurantes();
    },
    methods: {
        async getRestaurantes() {
            try {
                const response = await axios.get("http://localhost:4200/restaurante");
                console.log(response.data);
                this.restaurante.lista = response.data;
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.titulo{
    position: absolute;
    top: 120px;
    margin-left: -140px;
    font-family: "Poppins", sans-serif;
}
.line{
    border: none;
    height: 2px; 
    background-color: #000;
    position: absolute;
    top: 50px; 
    width: 350%;
}
.superior {
    display: block;
    margin-top: 210px;
    margin-left: 290px;
    width: 90%;
    height: 10%;
}
.superior button {
    background-color: #FF7A00;
    border: none;
    border-radius: 20px;
    height: 30px;
    padding: 0 60px;
    margin-left: 740px;
    color: white;
    white-space: nowrap; /* Evita que el texto se divida en varias líneas */
    overflow: hidden; /* Opcional: oculta cualquier texto que se desborde */
    text-overflow: ellipsis; /* Opcional: agrega puntos suspensivos si el texto se desborda */
}
.restaurant-card {
    width: 300px;
    position: absolute;
    left: 140px;
    top: -40px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    position: relative;
}

.restaurant-image {
    position: relative;
}

.restaurant-image img {
    width: 100%;
    height: 300px;
    display: block;
}

.restaurant-info {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
}

.restaurant-info h2 {
    margin: 0;
    position: absolute;
    top: -110px;
    left: 70px;
    color: #000;
    font-size: 25px;
}

.restaurant-info p {
    margin: 0;
    position: relative; /* Cambiado de absolute a relative */
    display: block; /* Cambiado de flex a block */
    top: 0; /* Eliminado el posicionamiento de top */
    left: 0; /* Eliminado el posicionamiento de left */
    font-size: 18px;
    color: #000;
    padding: 10px; /* Agregado para dar algo de espacio alrededor del texto */
    line-height: 1.5; /* Agregado para mejorar la legibilidad del texto */
}


.restaurant-actions {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 10px;
}
.restaurant-actions i {
    font-size: 24px; /* Ajusta este valor según el tamaño que desees */
}
.restaurant-actions button {
    background-color: #FF7A00;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>