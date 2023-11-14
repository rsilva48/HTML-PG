<template>
  <div id="nav">
    <nav class="navbar fixed-top navbar-dark navbar-expand-lg bg-primary">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <router-link
          to="/"
          class="navbar-brand"
          href
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
          <ul class="navbar-nav mr-auto">
            <div class="nav-item dropdown-divider" />
            <li class="nav-item">
              <router-link
                to="/cub"
                role="button"
                class="btn btn-primary mx-2"
                href
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Cubículos
              </router-link>
            </li>
            <div class="nav-item dropdown-divider" />
            <li class="nav-item">
              <router-link
                to="/pc"
                role="button"
                class="btn btn-primary mx-2"
                href
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Computadoras
              </router-link>
            </li>
            <div class="nav-item dropdown-divider" />
          </ul>
          <router-link
            v-if="user.logged==false"
            to="/login"
            role="button"
            class="btn btn-outline-light ml-2"
            href
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            Iniciar Sesión
          </router-link>
          <button
            v-if="user.logged==true"
            role="button"
            class="btn btn-danger ml-2"
            href
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            @click="LogOut()"
          >
            Cerrar sesión
          </button>
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
