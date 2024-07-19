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
        <div class="top">
            <h2>Proveedores</h2>
        <div class="superior">
            <router-link to="/create">
                <button>Agregar Proveedor</button>
            </router-link>
        </div>
    </div>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombres</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Proveedor de</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="../../assets/img/perfil.png" class="imgP"></td>
                    <td>San Tómas</td>
                    <td>st.carne@gmail.com</td>
                    <td>099876439</td>
                    <td>Proveedor de carne</td>
                    <td class="actions">
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash-alt"></i>
                    </td>
                </tr>
                <tr>
                    <td><img src="../../assets/img/perfil.png" class="imgP"></td>
                    <td>Julio Alberto</td>
                    <td>st.vegetales@hotmail.com</td>
                    <td>099868687</td>
                    <td>Proveedor de vegetales</td>
                    <td class="actions">
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash-alt"></i>
                    </td>
                </tr>
                <tr>
                    <td><img src="../../assets/img/perfil.png" class="imgP"></td>
                    <td>San Tómas</td>
                    <td>st.carne@gmail.com</td>
                    <td>099876439</td>
                    <td>Proveedor de carne</td>
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
<style scoped>
.imgP{
    width: 50px;
}
.content {
    margin-left: 50px;
    padding: 20px;
    width: calc(100% - 270px);
}
.superior {
    display: flex;
    margin-top: 10px;
    width: 90%;
    height: 10%;
    align-items: center;
    justify-content: space-between; /* Distribuye los elementos horizontalmente */
    padding: 0 30px;
    box-sizing: border-box; /* Incluye el padding en el ancho total */
}
.superior h1{
    font-weight: bold;
    font-size: 50px;
}
.superior button{
    background-color: #FF7A00;
    border: none;
    border-radius: 20px;
    height: 30px;
    padding: 0 60px;
    margin-left: 740px;
    color: white;
    white-space: nowrap;
}
.top { 
    background-color: #75787b;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    margin-top: 100px;
    width: 1200px;
    height: 80px;
    justify-content: space-between;
}
.header h2 {
    font-size: 20px;
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
