<template>
    <div class="content">
      <!-- <div class="header-container">
        <h1>Registro de Estaciones del Metro</h1>
        <div class="user-info">
          <span>Uroos Fatima</span>
          <img src="https://via.placeholder.com/40" alt="User Image">
        </div>
      </div> -->
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="header">
        <h2>Empleados</h2>
        <div class="superior">
            <button>Agregar Empleado</button>
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
  
    <style>
      .content {
        margin-left: 50px;
        padding: 20px;
        width: calc(100% - 270px);
      }
.superior {
    display: flex;
    width: 100%;
    height: 15%;
    align-items: center;
    justify-content: space-between; /* Distribuye los elementos horizontalmente */
    padding: 0 30px;
    box-sizing: border-box; /* Incluye el padding en el ancho total */
}
.superior h1{
    color: dark;
    font-weight: bold;
    font-size: 50px;
}
.superior button{
    background-color: #FF7A00;
    border: none;
    border-radius: 20px;
    height: 30px;
    padding: 0 60px;
    margin-left: auto;
    color: white;
}
    .header {
        background-color: #e0e4e8;
        padding: 20px;
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
    