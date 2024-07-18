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
<div class="content">
  <div class="titulo">
    <h2>Empleados</h2>
    <div class="superior">
        <router-link to="/add">
          <button class="add">Agregar Empleado</button>
        </router-link>
    </div>
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Cedula</th>
          <th>Edad</th>
          <th>Genero</th>
          <th>Sueldo</th>
          <th>Horario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jose Perez</td>
          <td>31313131</td>
          <td>19</td>
          <td>Masculino</td>
          <td>$400</td>
          <td>Nocturno</td>
          <td class="actions">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>
        <tr>
          <td>Jose Perez</td>
          <td>31313131</td>
          <td>19</td>
          <td>Masculino</td>
          <td>$400</td>
          <td>Nocturno</td>
          <td class="actions">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>
        <tr>
          <td>Jose Perez</td>
          <td>31313131</td>
          <td>19</td>
          <td>Masculino</td>
          <td>$400</td>
          <td>Nocturno</td>
          <td class="actions">
            <i class="fas fa-edit"></i>
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

export default {
name: 'MenuListView',
components: {
HeaderView
}
};
</script>

<style>

.superior h1{
color: dark;
font-weight: bold;
font-size: 50px;
}
.superior {
top: -130px;
padding: 0 30px;
box-sizing: border-box;
position: relative; 
}

.superior button {
background-color: #FF7A00;
border: none;
border-radius: 20px;
height: 30px;
padding: 0 60px;
color: white;
position: absolute; 
top: 120px; 
left: 800px; 
z-index: 1000;
}

.titulo {
    background-color: #e0e4e8;
    height: 70px;
    width: 1200px;
    position: absolute;
    top: 120px;
    padding: 2px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  position: absolute;
  top: 220px;   
  width: 1200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th, td {
    padding: 15px;
    text-align: left;
  }

  th {
    background-color: #f0f2f5;
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
    color: #007bff;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    align-items: center;
  }

  .pagination button {
    background-color: #e0e4e8;
    border: none;
    padding: 10px 15px;
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
  }

  .pagination button.active {
    background-color: #007bff;
    color: white;
  }

  .pagination p {
    margin: 0;
    margin-right: auto;
    color: #666;
  }

  .status {
    color: #28a745;
    font-weight: bold;
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
