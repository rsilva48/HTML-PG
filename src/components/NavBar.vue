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
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link to="/" class="navbar-brand" href>
            <img
              src="@/assets/uip.png"
              width="59"
              height="32"
              class="d-inline-block align-center"
              alt="UIP"
            /> CRAI
          </router-link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <div class="nav-item dropdown-divider"></div>
              <li class="nav-item">
                <router-link to="/cub" role="button" class="btn btn-primary mx-2" href data-toggle="collapse" data-target=".navbar-collapse.show">Cubiculos</router-link>
              </li>
              <div class="nav-item dropdown-divider"></div>
              <li class="nav-item">
                <router-link to="/pc" role="button" class="btn btn-primary mx-2" href data-toggle="collapse" data-target=".navbar-collapse.show">Computadoras</router-link>
              </li>
              <div class="nav-item dropdown-divider"></div>
            </ul>
            <router-link to="/login" role="button" class="btn btn-outline-light" href data-toggle="collapse" data-target=".navbar-collapse.show">Iniciar sesion</router-link>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>
