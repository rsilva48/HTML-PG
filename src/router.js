import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Registro from './views/Admin/Registro.vue'
import PCList from './views/PC/PCList.vue'
import PCs from './views/PC/PCs.vue'
import PCSol from './views/PC/PCSol.vue'
import PCSolReal from './views/PC/PCSolReal.vue'
import Cubs from './views/Cub/Cubs.vue'
import CubList from './views/Cub/CubList.vue'
import CubSol from './views/Cub/CubSol.vue'
import CubSolReal from './views/Cub/CubSolReal.vue'
import AdminUsers from './views/Admin/Users.vue'
import AdminCub from './views/Admin/Cub.vue'
import AdminPC from './views/Admin/PC.vue'
import AdminCubSol from './views/Admin/CubSol.vue'
import AdminCubList from './views/Admin/CubList.vue'
import AdminPCSol from './views/Admin/PCSol.vue'
import AdminPCList from './views/Admin/PCList.vue'
import AdminReporte from './views/Admin/Reporte.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
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
            path: '/admin/registro',
            name: 'Registro',
            component: Registro
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
            path: '/pc/solicitud/realizado/:id',
            name: 'PC Solicitada',
            component: PCSolReal
        },
        {
            path: '/pc/list',
            name: 'Lista de Computadoras',
            component: PCList
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
            path: '/cub/solicitud/realizado/:id',
            name: 'Cubiculo Solicitado',
            component: CubSolReal
        },
        {
            path: '/cub/list',
            name: 'Lista de Cubiculos',
            component: CubList
        },

        {
            path: '/admin',
            name: 'AdminUsers',
            component: AdminUsers
        },

        {
            path: '/admin/cub',
            name: ' AdminCub',
            component: AdminCub
        },
        {
            path: '/admin/pc',
            name: 'AdminPC',
            component: AdminPC
        },
        {
            path: '/admin/cub/solicitud',
            name: 'AdminCubSol',
            component: AdminCubSol
        },
        {
            path: '/admin/cub/list',
            name: 'AdminCubList',
            component: AdminCubList
        },
        {
            path: '/admin/pc/solicitud',
            name: 'AdminPCsol',
            component: AdminPCSol
        },
        {
            path: '/admin/pc/list',
            name: 'AdminPCList',
            component: AdminPCList
        },
        {
            path: '/admin/reporte',
            name: 'AdminReporte',
            component: AdminReporte
        }

    ]
})