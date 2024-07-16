import { createRouter, createWebHistory } from "vue-router";


import DashboardView from "../views/dashboard/DashboardView.vue"
import Menus from '../views/menu/MenuView.vue';
import InventarioView from "../views/inventario/InventarioView.vue"
import EmpleadosView from "../views/empleados/EmpleadosView.vue";
import ProveedoresView from "../views/proveedores/ProveedoresView.vue"
import CreateMenu from '../views/menu/MenuAgregarView.vue';
import AgregarInventario from '../views/inventario/InventarioAgregarView.vue'
import ListarMenu from '../views/menu/ListarMenuView.vue'
import AgregarEmpleado from "../views/empleados/EmpleadosAgregarView.vue"
import MetodosPago from "../views/mPagos/mPagosView.vue"
import VisualizarMenu from "../views/visualizar/VisualizarView.vue"

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardView
    },
    { path: '/menus', 
        name: "menus", 
        component: Menus 
    },
    {
        path: "/inventario",
        name: "Inventory",
        component: InventarioView
    },
    {
        path: "/empleados",
        name: "empleados",
        component: EmpleadosView
    },
    {
        path: "/proveedores",
        name: "proveedores",
        component: ProveedoresView
    },
    {   path: '/crear/:categoria', 
        component: CreateMenu, 
        props: true 
    },
    {   path: '/ver/:categoria', 
        component: ListarMenu, 
        props: true 
    },
    {
        path: '/agregar',
        component: AgregarInventario,
        props: true
    },
    {
        path: '/añadir',
        component: AgregarEmpleado,
    },
    {
        path: '/pagos',
        component: MetodosPago,
    },
    {
        path: '/visualizar',
        component: VisualizarMenu,
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;