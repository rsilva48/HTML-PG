<template>
  <div class="Cub">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Cubiculos</h1>
        <h3 v-else>Cubiculo #{{ $route.params.id }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { CubDBRef } from '../services/firebase'
export default {
  name: "Lista de Cubiculos",
  created() {
    this.getCub
  },
  methods: {
    getCub: {
      
    },
  }
};
</script>