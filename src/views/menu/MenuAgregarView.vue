<template>
    <div class="create-menu">
      <h2>Crear {{ category }}</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Nombre del Plato:</label>
          <input type="text" v-model="name" id="name" required>
        </div>
        <div>
          <label for="description">Descripción:</label>
          <textarea v-model="description" id="description" required></textarea>
        </div>
        <div>
          <label for="price">Precio:</label>
          <input type="number" v-model="price" id="price" required>
        </div>
        <div>
          <label for="status">Estado:</label>
          <select v-model="status" id="status" required>
            <option value="disponible">Disponible</option>
            <option value="no-disponible">No Disponible</option>
          </select>
        </div>
        <div>
          <label for="image">Imagen del Plato:</label>
          <input type="file" @change="handleImageUpload" id="image" accept="image/*" required>
        </div>
        <button type="submit">Crear</button>
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
  .create-menu {
    max-width: 600px;
    position: absolute;
    top: 150px;
    left: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  .create-menu h2 {
    text-align: center;
  }
  .create-menu form div {
    margin-bottom: 15px;
  }
  .create-menu form label {
    display: block;
    margin-bottom: 5px;
  }
  .create-menu form input,
  .create-menu form textarea,
  .create-menu form select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  .create-menu form button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .create-menu form button:hover {
    background-color: #0056b3;
  }
  </style>
  