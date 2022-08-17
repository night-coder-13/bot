import { createRouter,createWebHistory } from "vue-router";

import Home from "./components/bot.vue";


const routes=[
    {path : '/' , component : Home , name : 'Home'},
]
const router = createRouter({
    history : createWebHistory(),
    routes: routes
})

export default router;