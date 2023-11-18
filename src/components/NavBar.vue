<template>
  <div id="nav">
    <nav class="navbar fixed-top navbar-dark navbar-expand-lg bg-primary">
      <div class="container-md">
        <router-link
          to="/"
          class="navbar-brand"
          @click="collapseNavbar"
        >
          <img
            src="@/assets/logo.png"
            width="59"
            height="32"
            class="d-inline-block align-center"
            alt="logo"
          > CRAI
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarSupportedContent"
          ref="navbar"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li><hr class="border-light"></li>
            <li class="nav-item d-grid">
              <router-link
                to="/cub"
                class="btn btn-primary mx-2"
                @click="collapseNavbar"
              >
                Cubículos
              </router-link>
            </li>
            <li><hr class="border-light"></li>
            <li class="nav-item d-grid">
              <router-link
                to="/pc"
                class="btn btn-primary mx-2"
                @click="collapseNavbar"
              >
                Computadoras
              </router-link>
            </li>
            <li>
              <hr
                v-if="user.ocup == 'Adm'"
                class="border-light"
              >
            </li>
            <li class="nav-item d-grid">
              <router-link
                v-if="user.ocup == 'Adm'"
                to="/admin"
                role="button"
                class="btn btn-primary mx-2"
                @click="collapseNavbar"
              >
                Admin
              </router-link>
            </li>
            <li>
              <hr class="border-light">
            </li>
            <li class="nav-item d-grid">
              <router-link
                v-if="user.logged == false"
                to="/login"
                class="btn btn-outline-light ml-2"
                @click="collapseNavbar"
              >
                Iniciar Sesión
              </router-link>
              <button
                v-if="user.logged == true"
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
import { Collapse } from 'bootstrap';

export default {
  name: 'NavBar',
  emits: ['loginuser'],
  data() {
    return {
      isNavbarOpen: false,
      navbarCollapse: null,
      user: {
        name: "",
        logged: "",
        ocup: ""
      },
    };
  },
  created() {
    this.getLogin()
  },
  mounted() {
    this.navbarCollapse = new Collapse(this.$refs.navbar);
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
    },
    collapseNavbar() {
      const navbarMenu = document.getElementById('navbarSupportedContent');
      const bsCollapse = new Collapse(navbarMenu, { toggle: false });
      bsCollapse.hide();
    },
    toggleNavbar() {
      this.navbarCollapse.toggle();
    },
  }
}
</script>
