<template>
  <div id="nav">
    <nav class="navbar fixed-top navbar-dark navbar-expand-lg bg-primary">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <router-link
          to="/"
          class="navbar-brand"
        >
          <img
            src="@/assets/logo.png"
            width="59"
            height="32"
            class="d-inline-block align-center"
            alt="logo"
          > CRAI
        </router-link>
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li><hr class="dropdown-divider"></li>
            <li class="nav-item">
              <router-link
                to="/cub"
                class="btn btn-primary mx-2"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Cubículos
              </router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="nav-item">
              <router-link
                to="/pc"
                class="btn btn-primary mx-2"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Computadoras
              </router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="nav-item">
              <router-link
                v-if="user.logged==false"
                to="/login"
                class="btn btn-outline-light ml-2"
              >
                Iniciar Sesión
              </router-link>
              <button
                v-if="user.logged==true"
                class="btn btn-danger ml-2"
                @click="LogOut"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/services/firebase'

export default {
  name: 'NavBar',
emits: ['loginuser'],
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
    LogOut() {
      signOut(auth).then(() => {
        // Sign-out successful.
        alert("Sesión cerrada correctamente.");
        this.$router.push({ path: `/` });
      }).catch((error) => {
        // An error happened.
      });
    }
  }
}
</script>
