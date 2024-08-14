<template>
  <HeaderView />
  <aside class="sidebar">
    <nav>
      <ul>
        <li>
          <router-link to="/dashboard" class="active sidebar-link">
            <i class="fa-solid fa-chart-simple"></i> <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/menus" class="active sidebar-link">
            <i class="fa-solid fa-envelope"></i> <span>Menu</span>
          </router-link>
        </li>
        <li>
          <router-link to="/visualizar" class="active sidebar-link">
            <i class="fa-solid fa-table-cells-large"></i> <span>Visualizar</span>
          </router-link>
        </li>
        <li>
          <router-link to="/empleados" class="active sidebar-link">
            <i class="fa-solid fa-person"></i> <span>Empleados</span>
          </router-link>
        </li>
        <li>
          <router-link to="/pagos" class="active sidebar-link">
            <i class="fa-regular fa-credit-card"></i> <span>Metodos de pago</span>
          </router-link>
        </li>
        <li>
          <router-link to="/proveedores" class="active sidebar-link">
            <i class="fa-solid fa-user-group"></i> <span>Proveedores</span>
          </router-link>
        </li>
        <li>
          <router-link to="/inventario" class="active sidebar-link">
            <i class="fa-solid fa-file-invoice-dollar"></i> <span>Inventario</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
  <!-- ! Termina el SIDEBAR -->
  <div class="content">
    <div class="titulo">
      <h2>Empleados</h2>
      <div class="superior">
        <router-link to="/add">
          <button>Añadir Empleado</button>
        </router-link>
      </div>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Nombres</th>
            <th class="hide-mobile">Cédula</th>
            <th>Edad</th>
            <th class="hide-mobile">Género</th>
            <th>Sueldo</th>
            <th class="hide-mobile">N° Contacto</th>
            <th>Acciones</th><!-- Este no cuenta en el CRUD -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="empleado in empleado.lista" :key="empleado.idEmpleado">
            <td>{{ empleado.nombreCompleto }}</td>
            <td class="hide-mobile">{{ empleado.cedula }}</td>
            <td>{{ empleado.edadEmpleado }}</td>
            <td class="hide-mobile">{{ empleado.genero }}</td>
            <td>{{ empleado.sueldo }}</td>
            <td class="hide-mobile">{{ empleado.numeroContacto }}</td>
            <td class="actions">
              <router-link :to="{ name: 'updateEmployee', params: { idEmpleado: empleado.idEmpleado } }">
                <i class="fas fa-edit"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
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
      empleado: {
        lista: [],
        form: {
          idEmpleado: null,
          nombreCompleto: '',
          cedula: '',
          edadEmpleado: '',
          genero: '',
          sueldo: '',
          numeroContacto: ''
        }
      }
    };
  },
  created() {
    this.getEmpleados();
  },
  methods: {
    async getEmpleados() {
      try {
        const response = await axios.get('http://localhost:4200/empleado');
        // console.log(response.data);
        this.empleado.lista = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  }
};
</script>

<style scoped>
.content {
  margin-left: 50px;
  padding: 20px;
  width: calc(100% - 270px);
}

.superior h1 {
  font-weight: bold;
  font-size: 50px;
}

.superior {
  display: flex;
  width: 100%;
  height: 15%;
  padding: 0 30px;
}

.superior button {
  background-color: #FF7A00;
  border: none;
  border-radius: 20px;
  height: 39px;
  padding: 0 60px;
  margin-left: 740px;
  color: white;
  white-space: nowrap;
}

.titulo {
  background-color: #75787b;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 1200px;
  justify-content: space-between;
  margin-top: 1px;
}

.header h2 {
  margin: 0;
  font-size: 24px;
}

.search-box {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.search-box input {
  border: none;
  outline: none;
  margin-left: 5px;
}

.table-container {
  background-color: #d6d6d659;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 200px;
  border-radius: 10px;
}

th, td {
  padding: 15px;
}

td {
  text-align: center;
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

.actions i {
  margin-right: 10px;
  cursor: pointer;
}

.actions i:hover {
  color: #FF0000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d1d8dd;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container h1 {
  margin: 0;
  font-size: 24px;
}

@media (max-width: 720px) {
  .sidebar {
  max-width: 70px;
}

.sidebar-link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.sidebar-link span {
  display: none;
}

.sidebar-link i {
  font-size: 1.5em;
}
  .content {
    margin-left: 0;
    padding: 10px;
    width: 150%;
  }

  .superior h1 {
    font-size: 24px;
  }

  .superior button {
    margin-left: auto;
    padding: 0 20px;
    font-size: 12px;
  }

  .titulo {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .header h2 {
    font-size: 18px;
  }

  .search-box {
    width: 100%;
    margin-top: 10px;
  }

  .table-container {
    padding: 10px;
    overflow-x: auto;
  }

  table {
    margin-top: 130px;
    width: 100%;
    margin-left: 1px;
  }

  th, td {
    padding: 10px;
    font-size: 12px;
  }

  .header-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .header-container h1 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .titulo {
    width: 96%;
    height: 10%;
    position: relative;
    left: 10px;
    border-radius: 5px;
  }

  .superior button {
    border-radius: 5px;
    position: relative;
    top: -35px;
    left: 350px;
  }
}
</style>
