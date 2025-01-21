<template>
  <HeaderView />
  <div class="main-content">
    <!-- Lista de Comentarios -->
    <div class="comentarios-list">
      <h2>Comentarios</h2>
      <div class="comentarios-container">
        <div
          class="comentario-box"
          v-for="comentario in comentarios"
          :key="comentario.idValoracion"
          @click="openPopup(comentario)"
        >
          <p><strong>Estrellas:</strong> {{ comentario.estrellas }} ★</p>
          <p><strong>Comentario:</strong> {{ comentario.comentario }}</p>
          <p><strong>Fecha:</strong> {{ formatDate(comentario.fechaValoracion) }}</p>
        </div>
      </div>
    </div>

    <!-- Popup de Comentario -->
    <div v-if="isPopupVisible" class="popup" @click="closePopup">
      <div class="popup-content" @click.stop>
        <h3>Comentario Detallado</h3>
        <p><strong>Estrellas:</strong> {{ selectedComentario.estrellas }} ★</p>
        <p><strong>Comentario:</strong> {{ selectedComentario.comentario }}</p>
        <p><strong>Fecha:</strong> {{ formatDate(selectedComentario.fechaValoracion) }}</p>
        <!-- Más campos adicionales -->
        <p><strong>¿Porque fue al restaurante?</strong> Desayuno{{ selectedComentario.autor }}</p>
        <p><strong>Producto:</strong> {{ selectedComentario.producto }}</p>
        <p><strong>Tipo de comentario:</strong> {{ selectedComentario.tipoComentario }}</p>
        
        <!-- Opcional: Otros campos -->
        <p><strong>Recomendación:</strong> {{ selectedComentario.recomendacion }}</p>
        
        <button @click="closePopup">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderView from '@/components/header/HeaderView.vue';

export default {
  name: "ComentarioView",
  components: {
    HeaderView
  },
  data() {
    return {
      comentarios: [], // Lista de comentarios
      isPopupVisible: false, // Controlar visibilidad del popup
      selectedComentario: null, // Comentario seleccionado para mostrar en el popup
    };
  },
  methods: {
    async loadComentarios() {
      try {
        const response = await axios.get("http://localhost:4200/comentario");
        this.comentarios = response.data;
      } catch (error) {
        console.error("Error cargando los comentarios", error);
      }
    },
    openPopup(comentario) {
      this.selectedComentario = comentario;
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
      this.selectedComentario = null;
    },
    formatDate(date) {
      const newDate = new Date(date);
      return newDate.toISOString().split('T')[0]; // Devuelve solo la parte de la fecha (YYYY-MM-DD)
    }
  },
  async mounted() {
    await this.loadComentarios(); // Cargar comentarios al montar el componente
  },
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}

/* Estilos de la lista de comentarios */
.comentarios-list {
  margin-top: 40px;
}
.comentarios-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.comentario-box {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: calc(33.33% - 20px); /* Tres comentarios por fila */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.comentario-box p {
  margin: 5px 0;
}

/* Estilos del popup */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-width: 80%;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
