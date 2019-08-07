<template>
  <div class="PC">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Computadoras</h1>
        <h3 v-else>Computadora #{{ $route.params.id }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCList"
};
</script>