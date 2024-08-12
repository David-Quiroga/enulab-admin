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
<div class="contenedor-principal">
    <h1>Creación de inventarios</h1>
    <form action="">
        <div class="contenedor"> 
            <div class="izquierda">
                <div>
                    <h4>Nombre del item:</h4>
                    <input  v-model="nombreProductos">
                </div>

                <div>
                    <h4>Cantidad (gr):</h4>
                    <input  v-model="cantidad" min="0" max="9999999999">
                </div>

                <div>
                    <h4>Categoría:</h4>
                    <input  v-model="categoria" pattern="producto|implemento" title="Ingrese 'producto' o 'implemento'">
                </div>
                <div class="boton3">
                    <h4>Estado:</h4>
                    <select v-model="estado">
                        <option value="" disabled selected>Selecciona un estado</option>
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
            </div>
    
            <div class="derecha">
                
                <h4 class="mision">Descripción del item:</h4>
                <textarea class="iz1" v-model="descripcion"></textarea>
            </div>
        </div>
    <!--Botones -->
        <div class="botones">
            <router-link to="/inventario">
                <button type="button" class="btn-back">Atrás</button>
            </router-link>
            <button type="button" class="btn-conf" @click="createItem">Continuar</button>
        </div>
    </form>
</div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

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
        descripcion: ""
    };
  },
  methods: {
    validateForm() {
         if (!this.nombreProductos || !this.cantidad === null || !this.categoria === null || !this.cantidad === null) {
           return 'Todos los campos son obligatorios';
         }
  
         const validClasificacion = ["producto", "implemento"];
         if (!validClasificacion.includes(this.categoria.toLowerCase())) {
           return 'La clasificacion debe ser "Producto" o "Implemento"';
         }
  
         return null; // Indica que no hay errores
    },
        async createItem() {
            const validationError = this.validateForm();
            if (validationError) {
            Swal.fire({
            title: 'Error',
            text: validationError,
            icon: 'info',
            confirmButtonText: 'Aceptar'
            });
            return;
            }

            try {
                const inventarioData = {
                    nombreProductos: this.nombreProductos,
                    cantidad: this.cantidad,
                    categoria: this.categoria,
                    estado: this.estado,
                    logo: this.logo ? this.logo.name : null,
                    descripcion: this.descripcion
                };

                await axios.post("http://localhost:4200/inventario", inventarioData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                // Mostrar alerta de éxito
                Swal.fire({
                title: 'Éxito',
                text: 'Empleado creado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
                });


                // Limpieza de los datos del formulario
                this.nombreProductos = null;
                this.cantidad = null;
                this.categoria = null;
                this.estado = null;
                this.descripcion = null;
                this.logo = null;

                this.$router.push("/inventario");
            } catch (err) {
                console.log(err);
            }
        },
        onImageChange(event) {
            this.logo = event.target.files[0];
        }
  },
};
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
    padding-left: 130px;
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
    height: 60px; /* Ajustar altura del textarea */
    z-index: 1;
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
}
.izquierda, .derecha {
    display: flex;
    flex-direction: column;
    margin-left: -90px;
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
    left: -110px;
    width: 200px;
}

.btn-conf {
    background-color: #FF7A00;
    color: #FFFFFF;
    position: relative;
    left: -530px;
    width: 200px;
}
.boton3{
    position: absolute;
    top: 350px;
    left: 910px;
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
</style>
