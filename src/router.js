import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import PC from './views/PCList.vue'
import PCs from './views/PCs.vue'
import PCSol from './views/PCSol.vue'
import Cubs from './views/Cubs.vue'
import Cub from './views/CubList.vue'
import CubSol from './views/CubSol.vue'
import CubSolReal from "./views/CubSolReal.vue"

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'UIP CRAI',
            component: Home
        },
        {
            path: '/login',
            name: 'Iniciar Sesion',
            component: Login
        },
        {
            path: '/pc',
            name: 'Computadoras',
            component: PCs
        },
        {
            path: '/pc/solicitud/',
            name: 'Solicitar PC',
            component: PCSol
        },
        {
            path: '/pc/:id',
            name: 'Lista de Computadoras',
            component: PC
        },
        {
            path: '/cub',
            name: 'Cubiculos',
            component: Cubs
        },
        {
            path: '/cub/solicitud/',
            name: 'Solicitar Cubiculo',
            component: CubSol
        },
        {
            path: '/cub/solicitud/realizado/',
            name: 'Cubiculo Solicitado',
            component: CubSolReal
        },
        {
            path: '/cub/:id',
            name: 'Lista de Cubiculos',
            component: Cub
        },

    ]
})