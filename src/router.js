import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Registro from './views/Registro.vue'
import PC from './views/PCList.vue'
import PCs from './views/PCs.vue'
import PCSol from './views/PCSol.vue'
import Cubs from './views/Cubs.vue'
import Cub from './views/CubList.vue'
import CubSol from './views/CubSol.vue'
import CubSolReal from "./views/CubSolReal.vue"
import Administrador from "./views/Administrador.vue"
import Adminview from "./views/Adminview.vue"
import AdminCub from "./views/AdminCub.vue"
import AdminComp from "./views/AdminComp.vue"
import AdminCubsol from "./views/AdminCubsol.vue"
import AdminCubList from "./views/AdminCubList.vue"
import AdminPCsol from "./views/AdminPCsol.vue"
import AdminPCs from "./views/AdminPCs.vue"
import AdminReporte from "./views/AdminReporte.vue"
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
            path: '/cub/:id',
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
            path: '/admin/admin_cub_sul',
            name: 'AdminCubsol',
            component: AdminCubsol
        },
        {
            path: '/admin/admin_cub_list/:id',
            name: 'AdminCubList',
            component: AdminCubList
        },
        {
            path: '/admin/admin_pc_sul',
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