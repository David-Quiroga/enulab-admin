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
    <h2>Lista de las Bebidas</h2> <!-- Título actualizado aquí -->
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Sub Categoría</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bebida in bebidas.lista" :key="bebida.idBebida">
          <td>{{ bebida.nombre }}</td>
          <td>{{ bebida.descripcion }}</td>
          <td>{{ bebida.precio }}</td>
          <td>{{ bebida.subCategoria }}</td>
          <td>{{ bebida.estado }}</td>
          <td class="actions">
            <router-link :to="{ name: 'UpdateBebida', params: { idBebida: bebida.idBebida } }">
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
  name: "verListaBebidas",
  components: {
    HeaderView,
  },
  data() {
    return {
      bebidas: {
        lista: [],
        form: {
          idBebida: null,
          nombre: '',
          descripcion: '',
          precio: null,
          subCategoria: '',
          estado: ''
        }
      }
    };
  },
  created() {
    this.getBebidas();
  },
  methods: {
    async getBebidas() {
      try {
        const response = await axios.get('http://localhost:4200/bebidas');
        console.log(response.data);
        this.bebidas.lista = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  },
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
  text-align: left;
}
th {
  background-color: #bebebe;
  color: #333;
  font-weight: bold;
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