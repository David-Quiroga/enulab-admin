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
<div class="table-container">
    <h2>Lista de Sopas</h2> <!-- Título agregado aquí -->
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Sub Categoría</th>
          <th>Porciones</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sopa in sopa.lista" :key="sopa.idSopa">
          <td>{{ sopa.nombre }}</td>
          <td>{{ sopa.descripcion }}</td>
          <td>{{ sopa.precio }}</td>
          <td>{{ sopa.subCategoria }}</td>
          <td>{{ sopa.porciones }}</td>
          <td>{{ sopa.estado }}</td>
          <td class="actions">
            <router-link :to="{ name: 'UpdateSopas', params: { idSopa: sopa.idSopa } }">
              <i class="fas fa-edit"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import HeaderView from "@/components/header/HeaderView.vue";
import axios from 'axios';

export default {
  name: "verListaSopas",
  components: {
    HeaderView,
  },
  data() {
    return {
      sopa: {
        lista: [],
        form: {
          idSopa: null,
          nombre: '',
          descripcion: '',
          precio: '',
          porciones: '',
          subCategoria: ''
        }
      }
    };
  },
  created() {
    this.getSopas();
  },
  methods: {
    async getSopas() {
      try {
        const response = await axios.get('http://localhost:4200/sopas');
        console.log(response.data);
        this.sopa.lista = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

    
<style scoped>
h2 {
    margin-top: 100px;
  color: #333; /* Color del texto del título */
  font-size: 1.5em; /* Tamaño del texto del título */
}
.table-container {
  background-color: #d6d6d659;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  border-radius: 10px;
}
th, td {
  padding: 15px;
}
th {
  background-color: #bebebe;
  color: #333;
  font-weight: bold;
  text-align: center;
}
td{
  text-align: center;
}
tr:nth-child(even) {
  background-color: #f9fafb;
}
tr:hover {
  background-color: #f1f1f1;
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