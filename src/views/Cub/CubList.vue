<template>
  <div class="Cub">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 class="display-4" v-if="$route.params.id == 'all'">Lista de Cubiculos</h1>
        <h2 v-else>Cubiculo #{{ $route.params.id }}</h2>
      </div>
      <!--Disponibilidad -->
    </div>
    <vistaUsuario></vistaUsuario>
  </div>

</template>

<script>
import vistaUsuario from "@/components/Cub/CubListUser";
export default {
  name: "CubList",
  components: {
    vistaUsuario
  },
};
</script>