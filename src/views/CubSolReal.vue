<template>
  <div class="CubSolReal">
    <div class="jumbotron jumbotron-fluid font">
        <div class="container">
            <h1 class="display-4">Cubiculo # {{ $route.params.id }} Solicitado</h1>
            <p class="lead">Puede retirar la llave e ir a utilizarlo.</p>
            <hr class="my-4" />
            <router-link
              to="/cub/all"
              class="btn btn-primary btn-lg mr-1"
              href
              role="button"
            >Lista de Cubiculos</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CubSolReal'
}
</script>
