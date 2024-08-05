import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../views/dashboard/DashboardView.vue"
import Menus from '../views/menu/MenuView.vue';
import InventarioView from "../views/inventario/InventarioView.vue"
import EmpleadosView from "../views/empleados/EmpleadosView.vue";
import ProveedoresView from "../views/proveedores/ProveedoresView.vue"
import AgregarInventario from '../views/inventario/InventarioAgregarView.vue'
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
import SopasView from "@/views/sopas/sopasView.vue";
import UpdateSopasView from "@/views/sopas/UpdateSopasView.vue";
import formHeladosView from "@/views/helados/formHeladosView.vue";
import HeladosView from "@/views/helados/HeladosView.vue";
import UpdateHeladosView from "@/views/helados/UpdateHeladosView.vue";
import updateProveedorView from '@/views/proveedores/UpdateProveedoresView.vue'
import updateInventario from '@/views/inventario/inventarioUpdateView.vue'
import updateMPagos from '@/views/mPagos/mPagosUpdateView.vue'
import FormEntradasView from '@/views/entradas/formEntradasView.vue'
import EntradasView from "@/views/entradas/EntradasView.vue";
import UpdateEntrada from "@/views/entradas/UpdateEntradasView.vue";
import FormBebidasView from "@/views/bebidas/formBebidasView.vue";
import BebidasView from "@/views/bebidas/BebidasView.vue";
import UpdateBebidas from '@/views/bebidas/UpdateBebidasView.vue'

const routes = [
    { path: "/", name: "login", component: LoginView, props: true },
    { path: "/registro", name: "registro", component: RegistroView, props: true,  },
    { path: "/dashboard", name: "dashboard", component: DashboardView },
    { path: '/menus', name: "menus", component: Menus },
    { path: "/inventario", name: "Inventory", component: InventarioView },
    { path: "/empleados", name: "empleados", component: EmpleadosView },
    { path: "/updateEmployee/:idEmpleado?", name: "updateEmployee", component: UpdateEmpleado, props: true },
    { path: "/proveedores", name: "proveedores", component: ProveedoresView },
    { path: '/agregar', component: AgregarInventario, props: true },
    { path: '/add', component: AgregarEmpleado, props: true },
    { path: "/create", component: AgregarProveedor },
    { path: '/pagos', component: MetodosPago },
    { path: '/visualizar', component: VisualizarMenu },
    { path: '/restaurante', component: RestaunranteView, props: true },
    { path: '/update/:id?', name: "update", component: RestauranteUpdate, props: true },
    { path: "/formulario", component: FormularioView, props: true },
    { path: "/addmetodo", component: MPagosAgregarView, props: true },
    { path: "/helados", component: HeladosView, props: true, meta: { requiresAuth: true } },
    { path: "/formHelados", component: formHeladosView, props: true },
    { path: "/UpdateHelados/:idHelado?", name: "UpdateHelados", component: UpdateHeladosView, props: true },
    { path: "/sopas", component: SopasView, props: true },
    { path: "/UpdateSopas/:idSopa?", name: "UpdateSopas", component: UpdateSopasView, props: true },
    { path: "/formSopas", component: formSopasView, props: true },
    { path: '/UpdateProveedores/:idProveedores?', name:"UpdateProveedores", component: updateProveedorView, props: true},
    { path: '/UpdateInventario/:idInventario?', name:"UpdateInventario", component: updateInventario, props: true},
    { path: '/UpdateMPagos/:idMPagos?', name:"UpdatemPagos", component: updateMPagos, props: true},
    { path: '/formEntradas', component: FormEntradasView, props: true},
    { path: '/entradas', component: EntradasView},
    { path: '/UpdateEntrada/:idEntrada?', name: 'UpdateEntrada', component: UpdateEntrada, props: true},
    { path: '/formBebidas', component: FormBebidasView, props: true},
    { path: '/bebidas', component: BebidasView},
    { path: '/UpdateBebida/:idBebida?', name: 'UpdateBebida', component: UpdateBebidas, props: true}
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;