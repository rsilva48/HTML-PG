import { createRouter, createWebHistory } from 'vue-router'
import CRAIHome from '../src/views/Home.vue'
import CRAILogin from '../src/views/Login.vue'
import Registro from '../src/views/Admin/Registro.vue'
import PCList from '../src/views/PC/PCList.vue'
import CRAIPCs from '../src/views/PC/PCs.vue'
import PCSol from '../src/views/PC/PCSol.vue'
import PCSolReal from '../src/views/PC/PCSolReal.vue'
import CRAICubs from '../src/views/Cub/Cubs.vue'
import CubList from '../src/views/Cub/CubList.vue'
import CubSol from '../src/views/Cub/CubSol.vue'
import CubSolReal from '../src/views/Cub/CubSolReal.vue'
import AdminUsers from '../src/views/Admin/Users.vue'
import AdminCub from '../src/views/Admin/Cub.vue'
import AdminPC from '../src/views/Admin/PC.vue'
import AdminCubSol from '../src/views/Admin/CubSol.vue'
import AdminCubList from '../src/views/Admin/CubList.vue'
import AdminPCSol from '../src/views/Admin/PCSol.vue'
import AdminPCList from '../src/views/Admin/PCList.vue'
import AdminReporte from '../src/views/Admin/Reporte.vue'

const routes = [{
    path: '/',
    name: 'CRAI',
    component: CRAIHome
},
{
    path: '/login',
    name: 'Iniciar Sesion',
    component: CRAILogin
},
{
    path: '/admin/registro',
    name: 'Registro',
    component: Registro
},
{
    path: '/pc',
    name: 'Computadoras',
    component: CRAIPCs
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
    component: CRAICubs
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

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  export default router