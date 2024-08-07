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
<div class="content">
  <div class="titulo">
    <h2>Métodos de pago</h2>
    <div class="superior">
        <router-link to="/addmetodo">
          <button >Añadir Métodos</button>
        </router-link>
    </div>
  </div>
  <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th><!--Este no cuenta en el crud-->
          </tr>
        </thead>
        <tbody>
          <tr v-for="metodos in metodos.lista" :key="metodos.idMPagos">
            <td>{{ metodos.nombre }}</td>
            <td>{{ metodos.estado }}</td>
            <td class="actions">
              <router-link :to="{name: 'UpdatemPagos', params: {idMPagos: metodos.idMPagos}}">
                <i class="fas fa-edit"></i>
              </router-link>
              <i class="fas fa-trash-alt"></i>
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
name: 'MenuListView',
components: {
  HeaderView
},
data(){
  return{
    metodos: {
      lista: [],
      form: {
        idMPagos: null,
        nombre: '',
        estado: ''
      }
    }
  }
},
created(){
this.getMetodos();
},
methods: {
  async getMetodos(){
    try {
      const response = await axios.get('http://localhost:4200/metodos');
      console.log(response.data)
      this.metodos.lista = response.data
    } catch (err) {
      console.log(err)
    }
  }
}
};
</script>

<style scoped>
.content {
  margin-left: 50px;
  padding: 20px;
  width: calc(100% - 270px);
}
.superior h1{
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
  margin-left: 700px;
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
margin-top: 1px
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
</style>