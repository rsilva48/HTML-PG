<template>
    <div v-if="user.logged == true && user.ocup == 'Adm'">
        <AdminTitulo />
        <section id="main">
            <div class="container">
                <div class="row">
                    <AdminMenu class="col-md-3" />
                    <div v-if="loading" class="text-center col-md-9">
                        <div class="spinner-border text-primary m-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div v-if="!loading" class="col-md-9">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Usuarios</h3>
                                <button type="button" class="btn btn-default btn-sm" @click="getUsers">
                                    <i class="fa fa-refresh" /> Actualizar
                                </button>
                            </div>
                            <div class="panel-body">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Cédula</th>
                                            <th>Nombre</th>
                                            <th>Ocupación</th>
                                            <th>Correo electronico</th>
                                            <th>Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(usuario, index) in usuarios" :key="index">
                                            <td>{{ usuario.ced }}</td>
                                            <td>{{ usuario.name }}</td>
                                            <td>{{ usuario.ocup }}</td>
                                            <td>
                                                {{ usuario.email }}
                                                <a
                                                    v-if="false"
                                                    href="#"
                                                    class="badge badge-pill badge-secondary"
                                                    @click="editEmail(usuario.ced)"
                                                    >Editar</a
                                                >
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    class="btn btn-outline-danger"
                                                    @click="delUser(usuario.ced)"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div v-if="user.logged != true || user.ocup != 'Adm'">
        <div class="container-fluid p-5 font bg-light">
            <div class="container">
                <h1 class="display-4">Acceso no autorizado</h1>
                <p class="lead">
                    No tiene permisos para acceder a esta sección, por favor inicie sesión con una cuenta de
                    administrador.
                </p>
                <hr />
                <router-link to="/" class="btn btn-primary btn-lg mr-2" role="button"> Volver </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import AdminTitulo from '@/components/Admin/Titulo.vue'
import AdminMenu from '@/components/Admin/Menu.vue'
import { userRef, db } from '@/services/firebase'
import { onValue, query, remove, ref } from 'firebase/database'
import { useUserStore } from '@/stores/login'
export default {
    name: 'AdminView',
    components: {
        AdminMenu,
        AdminTitulo,
    },
    setup() {
        const userStore = useUserStore()
        const user = userStore.user
        return {
            user,
            // other reactive properties...
        }
    },
    data() {
        return {
            loading: true,
            usuarios: [],
        }
    },
    created() {
        this.getUsers()
        this.getLogin()
    },
    methods: {
        getLogin() {
            const userStore = useUserStore()
            userStore.getLogin()
        },
        getUsers() {
            this.loading = true
            onValue(
                query(userRef),
                (res) => {
                    let data = res.val()
                    this.usuarios = Object.values(data)
                    this.loading = false
                },
                {
                    onlyOnce: true,
                },
            )
        },
        delUser(iduser) {
            console.log(iduser)
            let NewUserRef = ref(db, 'users/' + iduser)
            remove(NewUserRef)
            this.getUsers()
        },
        editEmail(iduser) {
            console.log(iduser)
        },
    },
}
</script>

<style></style>
