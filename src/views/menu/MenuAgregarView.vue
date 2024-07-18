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
    <h1>Crear Plato</h1>
    <form @submit.prevent="handleSubmit">
      <!-- Nombre del Plato -->
      <div class="form-row">
        <label for="name">Nombre del Plato:</label>
        <input type="text" v-model="name" id="name" required>
      </div>

      <!-- Descripción -->
      <div class="form-row">
        <label for="description">Descripción:</label>
        <textarea v-model="description" id="description" required></textarea>
      </div>

      <!-- Precio y Estado -->
      <div class="form-row">
        <div class="form-column">
          <label for="price">Precio:</label>
          <input type="number" v-model="price" id="price" required>
        </div>
        <div class="form-column">
          <label for="status">Estado:</label>
          <select v-model="status" id="status" required>
            <option value="disponible">Disponible</option>
            <option value="no-disponible">No Disponible</option>
          </select>
        </div>
      </div>

      <!-- Imagen -->
      <div class="form-row">
        <label for="image">Imagen del Plato:</label>
        <input type="file" @change="handleImageUpload" id="image" accept="image/*" required>
      </div>

      <!-- Botón de Crear -->
      <div class="form-row">
        <button type="submit">Crear</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      price: null,
      status: 'disponible',
      image: null,
      category: this.$route.params.category
    };
  },
  methods: {
    handleImageUpload(event) {
      this.image = event.target.files[0];
    },
    handleSubmit() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('price', this.price);
      formData.append('status', this.status);
      formData.append('image', this.image);
      // Aquí puedes enviar formData a tu backend usando una petición HTTP
      console.log('Form data ready to be sent:', formData);
    }
  }
};
</script>

<style scoped>
h1 {
  color: #fffffffb;
}

.create-menu {
  background-image: url('../../assets/img/formulario.png');
  width: 800px;
  position: absolute;
  top: 100px;
  left: 350px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.create-menu form {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.form-row label {
  color: #ddd;
  flex: 0 0 150px; /* Ancho fijo para etiquetas */
}

.form-column {
  flex: 1; /* Ocupa todo el espacio restante */
  margin-left: 20px; /* Espacio entre los campos */
}

.create-menu form input,
.create-menu form textarea,
.create-menu form select {
  width: 100%; /* Ancho completo del input, textarea o select */
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ddd; /* Añadir borde para inputs, textarea y select */
}

.create-menu form input:focus,
.create-menu form textarea:focus,
.create-menu form select:focus {
  border: 3px solid #FF7A00; /* Cambia el borde al enfocar */
  background-color: #ffffff; /* Cambia el fondo al enfocar */
}

.create-menu form button {
  width: 100%; /* Ancho completo del botón */
  padding: 10px;
  background-color: #FF7A00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.create-menu form button:hover {
  background-color: #0056b3;
}

/* Estilos específicos para el submenú de estado */
.form-column select:focus {
  border: 2px solid #FF7A00; /* Cambia el borde al enfocar */
  background-color: #f0f0f0; /* Cambia el fondo al enfocar */
}


</style>
