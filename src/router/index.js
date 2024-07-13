import { createRouter, createWebHistory } from "vue-router";


import DashboardView from "../views/dashboard/DashboardView.vue"
import Menus from '../views/menu/MenuView.vue';

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: DashboardView
    },
    { path: '/menus', name: "menus", component: Menus },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;