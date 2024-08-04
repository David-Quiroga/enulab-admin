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
    <h1>{{ isEditing ? 'Editar Sopa' : 'Creación de la Sopa' }}</h1>
    <div>
        <div class="contenedor" > 
            <div class="izquierda">
                <h4>Nombre de la sopa</h4>
                <input v-model="nombre">
                
                <h4>Descripcion</h4>
                <input v-model="descripcion">
                
                <h4>Estado</h4>
                <input class="iz1" placeholder="Activo o Inactivo" v-model="estado" required >
            </div>
    
            <div class="derecha">
                <h4>Precio</h4>
                <input v-model="precio">
                <h4>Porciones</h4>
                <textarea id="descripcion" name="descripcion"></textarea>
                <h4>Sub Categoria</h4>
                <textarea id="descripcion" name="descripcion"></textarea>
            </div>
        </div>

        <div class="botones">
            <router-link to="/sopas">
                <button class="btn-back">Atrás</button>
            </router-link>
                <button class="btn-conf" @click="submitForm">Continuar</button>

        </div>
    </div>
  </div>
  </template>

<script>
    import HeaderView from "@/components/header/HeaderView.vue";
    import axios from 'axios';
    
    export default {
        name: "verListaplatos",
        components: {
        HeaderView,
        },
        data() {
        return {
            nombre: "",
            descripcion: "",
            estado: "",
            precio: "",
            isEditing: false
        }
        },
        props: ['idSopa'],
        created() {
            if (this.idSopa) {
                this.isEditing = true;
                this.loadSopa();
            }
        },
        methods: {
        async loadSopa() {
            try {
                const response = await axios.get(`http://localhost:4200/sopas/${this.idSopa}`);
                const sopa = response.data;
                this.nombre = sopa.nombre;
                this.descripcion = sopa.descripcion;
                this.estado = sopa.estado; 
                this.precio = sopa.precio; 
            } catch (error) {
                console.error('Error cargando la sopa:', error);
            }
        },
        async submitForm() {
            try {
                const sopaData = {
                    nombre: this.nombre,
                    descripcion: this.descripcion,
                    estado: this.estado,
                    precio: this.precio
                };
                
                if (this.isEditing) {
                    await axios.put(`http://localhost:4200/sopas/${this.idSopa}`, sopaData, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                } else {
                    await axios.post("http://localhost:4200/sopas", sopaData, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                }
            // Limpiar los campos
            this.nombre = "";
            this.descripcion = "";
            this.estado = "";
            this.precio = "";
            

            // Redirigir a la página de empleados
            this.$router.push("/sopas");
            } catch (err) {
                console.log('Error al enviar el formulario:', err);
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

.izquierda, .derecha {
display: flex;
flex-direction: column;
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
margin-top: -90px;
}

.btn-back {
background-color: #BBB7B7;
width: 180px;
position: absolute;
left: 400px;
}

.btn-conf {
background-color: #FF7A00;
color: #FFFFFF;
width: 250px;
position: absolute;
left: 600px;
}
</style>
