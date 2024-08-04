import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../views/dashboard/DashboardView.vue"
import Menus from '../views/menu/MenuView.vue';
import InventarioView from "../views/inventario/InventarioView.vue"
import EmpleadosView from "../views/empleados/EmpleadosView.vue";
import ProveedoresView from "../views/proveedores/ProveedoresView.vue"
import CreateMenu from '../views/menu/MenuAgregarView.vue';
import AgregarInventario from '../views/inventario/InventarioAgregarView.vue'
import ListarMenu from '@/views/menu/ListarMenuView.vue'
import AgregarEmpleado from "../views/empleados/EmpleadosAgregarView.vue"
import MetodosPago from "../views/mPagos/mPagosView.vue"
import VisualizarMenu from "../views/visualizar/VisualizarView.vue"
import LoginView from "../views/login/LoginView.vue";
import RegistroView from "@/views/login/RegistroView.vue";
import RestaunranteView from "@/views/restaurante/RestauranteView.vue"
import FormularioView from "@/views/restaurante/RestaraunteFromView.vue"
import AgregarProveedor from "@/views/proveedores/ProveedoresFormView.vue"
import RestauranteUpdate from "@/views/restaurante/UpdateRestView.vue"
import MPagosAgregarView from "@/views/mPagos/mPagosAgregarView.vue";
import formSopasView from "@/views/sopas/formSopasView.vue";
import UpdateEmpleado from "@/views/empleados/EmpleadoUpdateView.vue"


const routes = [
    {
        path: "/", name: "login", component: LoginView, props: true
    },
    {
        path: "/registro", name: "registro", component: RegistroView, props: true
    },
    {
        path: "/dashboard", name: "dashboard", component: DashboardView
    },
    {
        path: '/menus', name: "menus", component: Menus 
    },
    {
        path: "/inventario", name: "Inventory", component: InventarioView
    },
    {
        path: "/empleados", name: "empleados", component: EmpleadosView
    },
    {
        path: "/updateEmployee/:idEmpleado?", name: "updateEmployee", component: UpdateEmpleado, props: true
    },
    {
        path: "/proveedores", name: "proveedores", component: ProveedoresView
    },
    {   
        path: '/crear/:categoria', component: CreateMenu, props: true 
    },
    {   
        path: '/ver/:categoria', component: ListarMenu, props: true 
    },
    {
        path: '/agregar', component: AgregarInventario, props: true
    },
    {
        path: '/add', component: AgregarEmpleado, props: true
    },
    {
        path: "/create", component: AgregarProveedor
    },
    {
        path: '/pagos', component: MetodosPago,
    },
    {
        path: '/visualizar', component: VisualizarMenu,
    },
    {
        path: '/restaurante', component: RestaunranteView, props: true
    },
    {
        path: '/update/:id?', name: "update", component: RestauranteUpdate, props: true
    },
    {
        path: "/formulario", component: FormularioView, props:true
    },
    {
        path: "/addmetodo", component: MPagosAgregarView, props: true
    },
    {
        path: "/formSopas", component: formSopasView, props: true
    },
    {
        path: '/proveedores/edit/:id', name: 'EditProveedor',
        component: () => import('../views/proveedores/ProveedoresFormView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;