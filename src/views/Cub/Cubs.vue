<template>
  <div class="Cubs">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 class="display-4">
          Cubículos
        </h1>
        <p
          class="lead"
        >
          Reserve o vea información de los cubículos que tenemos disponible en el CRAI para grupo de estudiantes que necesiten reunirse para realizar proyectos o trabajos de la universidad.
        </p>
        <hr class="my-4">
        <router-link
          v-if="user.logged==true"
          to="/cub/solicitud/"
          class="btn btn-primary btn-lg mr-1"
          href
          role="button"
        >
          Solicitar
        </router-link>
        <router-link
          to="/cub/list"
          class="btn btn-primary btn-lg ml-1"
          href
          role="button"
        >
          Ver Disponibilidad
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/services/firebase'
export default {
  name: 'CRAICubs',
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
