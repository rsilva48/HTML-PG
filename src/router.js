import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Registro from './views/Registro.vue'
import PC from './views/PC/PCList.vue'
import PCs from './views/PC/PCs.vue'
import PCSol from './views/PC/PCSol.vue'
import Cubs from './views/Cub/Cubs.vue'
import Cub from './views/Cub/CubList.vue'
import CubSol from './views/Cub/CubSol.vue'
import CubSolReal from "./views/Cub/CubSolReal.vue"
import Administrador from "./views/Admin/Administrador.vue"
import Adminview from "./views/Admin/Adminview.vue"
import AdminCub from "./views/Admin/AdminCub.vue"
import AdminComp from "./views/Admin/AdminComp.vue"
import AdminCubsol from "./views/Admin/AdminCubsol.vue"
import AdminCubList from "./views/Admin/AdminCubList.vue"
import AdminPCsol from "./views/Admin/AdminPCsol.vue"
import AdminPCs from "./views/Admin/AdminPCs.vue"
import AdminReporte from "./views/Admin/AdminReporte.vue"
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
            path: '/registro',
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
            path: '/cub/solicitud/realizado/:id',
            name: 'Cubiculo Solicitado',
            component: CubSolReal
        },
        {
            path: '/cub/list',
            name: 'Lista de Cubiculos',
            component: Cub
        },
        {
            path: '/admin',
            name: 'Administrador',
            component: Administrador
        },
        {
            path: '/admin/view',
            name: 'Adminview',
            component: Adminview
        },

        {
            path: '/admin/cub',
            name: ' AdminCub',
            component: AdminCub
        },
        {
            path: '/admin/comp',
            name: 'AdminComp',
            component: AdminComp
        },
        {
            path: '/admin/cub/sol',
            name: 'AdminCubsol',
            component: AdminCubsol
        },
        {
            path: '/admin/cub/list/',
            name: 'AdminCubList',
            component: AdminCubList
        },
        {
            path: '/admin/pc/sol',
            name: 'AdminPCsol',
            component: AdminPCsol
        },
        {
            path: '/admin/admin_pcs',
            name: 'AdminPCs',
            component: AdminPCs
        },
        {
            path: '/admin/report',
            name: "AdminReporte",
            component: AdminReporte
        },


    ]
})