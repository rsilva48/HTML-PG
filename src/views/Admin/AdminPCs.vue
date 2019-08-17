<template>
 <div class="PC">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Computadoras</h1>
        <h3 v-else>Computadora #{{ $route.params.id }}</h3>
        <router-link to="/admin/comp" class="btn btn-primary btn-lg" role="button">Volver</router-link>
        <router-link to="/admin/pc/sol" class="btn btn-primary btn-lg" role="button">Formulario</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'AdminPCs',
}
</script>

<style>

</style>