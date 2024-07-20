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
        <div class="create-menu">
        <div class="img">
            <p class="titulo1">Nombre:</p>
            <br />
            <p class="bold">Ceviche</p>
            <br />
            <p class="desc">Descripción</p>
            <p class="plato">Rico rico</p>
            <p class="price">Precio</p>
            <p class="number">20.00</p>
            <div class="button-group">
            <button class="submit">Editar Plato</button>
            <button class="delete" @click="showDeleteModal = true">Eliminar</button>
            </div>
        </div>
        </div>
        <div v-if="showDeleteModal" class="modal-overlay">
        <div class="modal">
            <p>¿Realmente deseas eliminar este plato?</p>
            <div class="modal-buttons">
            <button @click="confirmDelete" class="submit">Confirmar</button>
            <button @click="showDeleteModal = false" class="submit">Cancelar</button>
            </div>
        </div>
        </div>
</template>

<script>
    import HeaderView from "@/components/header/HeaderView.vue";
    
    export default {
        name: "verListaplatos",
        components: {
        HeaderView,
        },
        data() {
        return {
            name: "",
            description: "",
            price: null,
            status: "disponible",
            image: null,
            category: this.$route.params.category,
            showDeleteModal: false,
        };
        },
        methods: {
        handleImageUpload(event) {
            this.image = event.target.files[0];
        },
        handleSubmit() {
            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("description", this.description);
            formData.append("price", this.price);
            formData.append("status", this.status);
            formData.append("image", this.image);
            // Aquí puedes enviar formData a tu backend usando una petición HTTP
            console.log("Form data ready to be sent:", formData);
        },
        confirmDelete() {
            // Aquí agrega la lógica para eliminar el plato
            console.log("Plato eliminado");
            this.showDeleteModal = false;
        },
        },
    };
</script>
    
    <style scoped>
    .create-menu {
        background-color: #2C2E3A;
        color: white;
        padding: 15px; /* Reducido el padding para hacerlo más compacto */
        border-radius: 2px; /* Reducido el radio del borde para suavizar los bordes */
        width: 250px; /* Reducido el ancho para hacerlo más pequeño */
        height: 300px;
        margin-left: 50px; /* Ajustado el margen izquierdo */
        margin-top: 100px; /* Añadido un margen superior para separarlo */
        text-align: center;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2); /* Ligera sombra para destacarlo */
    }
    
    .create-menu h1 {
        font-size: 20px; /* Tamaño de la fuente del título reducido */
        margin-bottom: 15px; /* Espaciado inferior del título reducido */
    }
    
    .img {
        background-image: url('../../assets/img/entrada.png');
        opacity: 0.6;
        background-position: center;
        background-repeat: no-repeat;
        height: 260px;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2); /* Sombra más suave para la imagen */
    }
    
    .img p {
        margin: 8px 0; /* Espaciado interno ajustado para los párrafos */
    }
    .titulo1{
        position: absolute;
        font-weight: bold;
        top: 130px;
        left: 355px;;
    }
    .bold{
        position: absolute;
        top: 150px;
        left: 355px;
    }
    .desc{
        position: absolute;
        font-weight: bold;
        top: 190px;
        left: 350px;
    }
    .plato{
        position: absolute;
        top: 210px;
        left: 357px;
    }
    .price{
        position: absolute;
        font-weight: bold;
        top: 230px;
        left: 370px;
    }
    .number{
        position: absolute;
        top: 260px;
        left: 370px;
    }
    .button-group {
        display: flex;
        gap: 10px; /* Espacio entre los botones */
        justify-content: center;
        position: absolute;
        margin-top: 130px; /* Centra los botones */
        margin-left: 10px
    }
    
    .submit {
        background-color: #210dd1;
        color: white;
        border: none;
        padding: 8px 12px; /* Padding del botón reducido */
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .delete {
        background-color: #d40707;
        color: white;
        border: none;
        padding: 8px 12px; /* Padding del botón reducido */
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .submit:hover, .delete:hover {
        background-color: #d35400;
    }
    
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    
    .modal {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2);
        text-align: center;
        width: 300px;
        height: 100px;
        
    }
    
    .modal-buttons {
        display: flex;
        justify-content: space-between;
    /* Añade este espacio entre los botones */
    }
    
    .confirm-button, .cancel-button {
        background-color: #e67e22;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .confirm-button:hover, .cancel-button:hover {
        background-color: #d35400;
    }
</style>