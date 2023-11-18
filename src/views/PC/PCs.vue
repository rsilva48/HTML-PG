<template>
  <div class="PCs">
    <div class="container-fluid px-4 py-5 px-md-5 font bg-light">
      <div class="container">
        <h1 class="display-4">
          Computadoras
        </h1>
        <p
          class="lead"
        >
          Necesita realizar una investigación o tarea y no dispone de una computadora, el CRAI le ofrece este servicio a los estudiantes que lo necesiten.
        </p>
        <hr class="my-4">
        <div class="d-grid gap-3 mx-auto d-md-block">
          <router-link
            v-if="user.logged==true"
            to="/pc/solicitud/"
            class="btn btn-primary btn-lg mx-1"
            href
            role="button"
          >
            Solicitar
          </router-link>
          <router-link
            to="/pc/list"
            class="btn btn-primary btn-lg mx-1"
            href
            role="button"
          >
            Ver Disponibilidad
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/services/firebase'
export default {
  name: 'CRAIPCs',
  components: {},
  data() {
    return {
      user: {
        name: "",
        logged: ""
      },
    };
  },
  created() {
    this.getLogin()
    },
  methods: {
    getLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          this.user.logged = true
          return true
          // ...
        } else {
          // User is signed out
          // ...
          this.user.logged = false
          return false
        }
      })
    },
  }
}
</script>

<style>
</style>
