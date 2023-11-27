<template>
    <div class="root" :style="backgroundStyle">
        <div v-if="userstoreuser.logged == false" class="login vertical-center">
            <form class="form-signin border" @submit.prevent="login">
                <div class="text-center mb-4">
                    <img class="mb-4" src="../assets/logocolor.png" alt width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">Inicio de Sesión</h1>
                    <p>Para usar los servicios administrativos de CRAI debe iniciar sesión primero</p>
                </div>

                <div class="form-label-group">
                    <input
                        id="inputEmail"
                        v-model="user.ced"
                        type="text"
                        class="form-control"
                        placeholder="Cédula"
                        required
                        autofocus
                        autocomplete="username"
                    />
                    <label for="inputEmail">Numero de Cédula</label>
                </div>

                <div class="form-label-group">
                    <input
                        id="inputPassword"
                        v-model="user.password"
                        type="password"
                        class="form-control"
                        placeholder="Contraseña"
                        autocomplete="current-password"
                        required
                    />
                    <label for="inputPassword">Contraseña</label>
                </div>
                <div class="d-grid gap-2 mx-auto">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="enablelogin">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
        <div v-else-if="userstoreuser.logged == true">
            <div class="container-fluid px-4 py-5 px-md-5 font bg-light">
                <div class="container pt-5">
                    <h1 class="display-4">Ya ha iniciado sesión</h1>
                    <p class="lead">Regrese a la pagina principal para seguir navegando</p>
                    <hr />
                    <router-link to="/" class="btn btn-primary btn-lg mr-2" role="button"> Volver </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { userRef, auth } from '@/services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onValue, query } from 'firebase/database'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/login'
import LoginBG from '@/assets/LoginBG.jpg'

export default {
    name: 'CRAILogin',
    setup() {
        const userStore = useUserStore()
        const userstoreuser = userStore.user
        const router = useRouter()
        const backgroundStyle = {
            backgroundImage: `url(${LoginBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }

        return {
            userstoreuser,
            router,
            backgroundStyle,
        }
    },
    data() {
        return {
            user: {
                ced: '',
                password: '',
            },
            usuarios: [],
        }
    },
    computed: {
        enablelogin() {
            if (this.user.ced == '' || this.user.password == '') {
                return true
            } else {
                return false
            }
        },
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
            onValue(
                query(userRef),
                (res) => {
                    let data = res.val()
                    this.usuarios = Object.values(data)
                },
                {
                    onlyOnce: true,
                },
            )
        },
        login() {
            let count = 3
            if (this.usuarios.length > 0) {
                this.usuarios.forEach((user) => {
                    if (
                        //Credenciales correctas - COUNT 0
                        this.user.ced == user.ced &&
                        this.user.password == user.password &&
                        user.ocup == 'Adm'
                    ) {
                        count = 0
                        signInWithEmailAndPassword(auth, user.email, this.user.password)
                            .then(() => {
                                // Signed up
                                //const loggeduser = userCredential.user
                                alert('Ha iniciado sesión como Admin.')
                                this.router.push({ path: `/admin` })
                                // ...
                            })
                            .catch(() => {
                                /*const errorCode = error.code
                                const errorMessage = error.message
                                console.log(errorCode)
                                console.log(errorMessage)*/
                                alert('Error en el inicio de sesion.')
                                count = 3
                                // ..
                            })

                        return
                    } else if (
                        //Credenciales correctas no administrativo - COUNT 1
                        this.user.ced == user.ced &&
                        this.user.password == user.password &&
                        user.ocup != 'Adm'
                    ) {
                        count = 1
                        //console.log(user.email)
                        signInWithEmailAndPassword(auth, user.email, this.user.password)
                            .then(() => {
                                // Signed up
                                //const loggeduser = userCredential.user
                                alert('Ha accedido como estudiante.')
                                this.router.push({ path: `/` })
                                // ...
                            })
                            .catch(() => {
                                //const errorCode = error.code
                                //const errorMessage = error.message
                                alert('Error en el inicio de sesion.')
                                count = 3
                                // ..
                            })
                        return
                    } else if (
                        //Contraseña incorrecta - COUNT 3
                        this.user.ced == user.ced &&
                        this.user.password != user.password
                    ) {
                        count = 3
                        return
                    }
                })
            }
            if (count == 3) {
                alert('Verifique sus datos e ingreselos nuevamente.')
                this.user.ced = ''
                this.user.password = ''
            }
        },
    },
}
</script>

<style>
.root {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.login {
    padding-top: 5%;
    padding-bottom: 5%;
}

.form-signin {
    width: 100%;
    max-width: 420px;
    padding: 45px;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
}

.form-label-group {
    position: relative;
    margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
    height: 3.125rem;
    padding: 0.75rem;
}

.form-label-group > label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0;
    /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    pointer-events: none;
    cursor: text;
    /* Match the input under the label */
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
    color: transparent;
}

.form-label-group input:-ms-input-placeholder {
    color: transparent;
}

.form-label-group input::-ms-input-placeholder {
    color: transparent;
}

.form-label-group input::-moz-placeholder {
    color: transparent;
}

.form-label-group input::placeholder {
    color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
    padding-top: 1.25rem;
    padding-bottom: 0.25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 12px;
    color: #777;
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.vertical-center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    box-sizing: border-box;
}

@media screen and (max-width: 480px) {
    .vertical-center {
        max-width: 100%;
    }
}
</style>
