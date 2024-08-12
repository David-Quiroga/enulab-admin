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
    <!-- Contenido principal -->
    <main>
        <div class="hero">
            <h1 class="titulo">{{ isEditing ? 'Editar Métodos de pago': 'Creacion de Métodos de pago' }}</h1>
        </div>

        <!-- Formulario de información del restaurante -->
        <div class="formulario">
            <div>
                <h4>Nombre del metodo</h4>
                <input placeholder="" v-model="nombre" required>
            </div>
        </div>
        <!-- Botones de navegación -->
        <div class="botones">
        <router-link to="/pagos">
            <button class="btn-back">← Atras</button>
        </router-link>
            <button class="btn-conf" @click="submitForm">Continuar</button>
        </div>
    </main>

    <!-- Información adicional -->
    <div class="izq1">
      <h4>Estado</h4>
      <select v-model="estado" required>
        <option value="" disabled>Seleccione un estado</option>
        <option value="activo">activo</option>
        <option value="inactivo">inactivo</option>
      </select>
    </div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView.vue';
import axios from 'axios';

export default {
    name: 'mPagosUpdateView',
    components: {
        HeaderView
    },
    data(){
        return {
            nombre: '',
            estado: '',
            isEditing: false
        }
    },
    props: ['idMPagos'],
    created(){
        if (this.idMPagos){
            this.isEditing = true
            this.loadMetodo()
        }
    },
    methods: {
        async loadMetodo(){
            try{
                const response = await axios.get(`http://localhost:4200/metodos/${this.idMPagos}`)
                const metodo = response.data
                this.nombre = metodo.nombre
                this.estado = metodo.estado
            } catch (err){
                console.error('Error cargando el metodo', err)
            }
        },
        async submitForm(){
            try {
                const metodosData = {
                    nombre: this.nombre,
                    estado: this.estado
                }
                if(this.isEditing){
                    await axios.put(`http://localhost:4200/metodos/${this.idMPagos}`, metodosData, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                } else {
                    await axios.post('http://localhost:4200/metodos', metodosData, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                }

                this.nombre = '';
                this.estado = '';

                this.$router.push('/pagos')
            } catch (error) {
                console.log('Error al enviar el metodo', error)
            }
        }
    }
};
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
    input, textarea {
        background-color: #d3d1d1;
        border: 1px solid #000; /* Borde negro */
        border-radius: 10px;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 21px;
        padding-left: 10px; /* Espacio a la izquierda del texto */
        padding-right: 10px; /* Espacio a la derecha del texto */
    }
    .izq1{
        position: absolute;
        top: 239px;
        left: 830px;
    }
</style>