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
import Error  from "@/views/error/error.vue";

function isAuthenticated() {
  return !!localStorage.getItem('token'); // Verifica si el token existe en localStorage
}

const routes = [
    { path: "/", name: "login", component: LoginView, props: true },
    { path: "/registro", name: "registro", component: RegistroView, props: true,  },
    { path: "/dashboard", name: "dashboard", component: DashboardView, meta: { requiresAuth: true } },
    { path: '/menus', name: "menus", component: Menus , meta: { requiresAuth: true }},
    { path: "/inventario", name: "Inventory", component: InventarioView, meta: { requiresAuth: true } },
    { path: "/empleados", name: "empleados", component: EmpleadosView, meta: { requiresAuth: true } },
    { path: "/updateEmployee/:idEmpleado?", name: "updateEmployee", component: UpdateEmpleado, meta: { requiresAuth: true }, props: true },
    { path: "/proveedores", name: "proveedores", component: ProveedoresView, meta: { requiresAuth: true } },
    { path: '/agregar', component: AgregarInventario, meta: { requiresAuth: true }, props: true },
    { path: '/add', component: AgregarEmpleado, meta: { requiresAuth: true }, props: true },
    { path: "/create", component: AgregarProveedor, meta: { requiresAuth: true } },
    { path: '/pagos', component: MetodosPago, meta: { requiresAuth: true } },
    { path: '/visualizar', component: VisualizarMenu, meta: { requiresAuth: true } },
    { path: '/restaurante', component: RestaunranteView, meta: { requiresAuth: true }, props: true },
    { path: '/update/:id?', name: "update", component: RestauranteUpdate, meta: { requiresAuth: true }, props: true },
    { path: "/formulario", component: FormularioView, meta: { requiresAuth: true }, props: true },
    { path: "/addmetodo", component: MPagosAgregarView, meta: { requiresAuth: true }, props: true },
    { path: "/helados", component: HeladosView, props: true, meta: { requiresAuth: true } },
    { path: "/formHelados", component: formHeladosView, meta: { requiresAuth: true }, props: true },
    { path: "/UpdateHelados/:idHelado?", name: "UpdateHelados", component: UpdateHeladosView, meta: { requiresAuth: true }, props: true },
    { path: "/sopas", component: SopasView, meta: { requiresAuth: true }, props: true },
    { path: "/UpdateSopas/:idSopa?", name: "UpdateSopas", component: UpdateSopasView, meta: { requiresAuth: true }, props: true },
    { path: "/formSopas", component: formSopasView, meta: { requiresAuth: true }, props: true },
    { path: '/UpdateProveedores/:idProveedores?', name:"UpdateProveedores", component: updateProveedorView, meta: { requiresAuth: true }, props: true},
    { path: '/UpdateInventario/:idInventario?', name:"UpdateInventario", component: updateInventario, meta: { requiresAuth: true }, props: true},
    { path: '/UpdateMPagos/:idMPagos?', name:"UpdatemPagos", component: updateMPagos, meta: { requiresAuth: true }, props: true},
    { path: '/formEntradas', component: FormEntradasView, meta: { requiresAuth: true }, props: true},
    { path: '/entradas', component: EntradasView, meta: { requiresAuth: true }},
    { path: '/UpdateEntrada/:idEntrada?', name: 'UpdateEntrada', component: UpdateEntrada, meta: { requiresAuth: true }, props: true},
    { path: '/formBebidas', component: FormBebidasView, meta: { requiresAuth: true }, props: true},
    { path: '/bebidas', component: BebidasView, meta: { requiresAuth: true } },
    { path: '/UpdateBebida/:idBebida?', name: 'UpdateBebida', component: UpdateBebidas, meta: { requiresAuth: true }, props: true},
    { path: '/access-denied', name: 'error', component: Error}
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isAuthenticated()) {
        next({ path: '/access-denied', query: { redirect: to.fullPath } });
      } else {
        next();
      }
    } else {
      next();
    }
  });
export default router;