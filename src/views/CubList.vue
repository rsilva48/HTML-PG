<template>
  <div class="Cub">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Cubiculos</h1>
        <h3 v-else>Cubiculo #{{ $route.params.id }}</h3>
      </div>
    </div>
    <div class="container">
      <!-- <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cedula del encargado</th>
            <th scope="col">Fecha de Inicio</th>
            <th scope="col">Fecha de Fin</th>
            <th scope="col">Estatus</th>
          </tr>
        </thead>
        <tbody>
          <div>
            <tr v-for="(cubiculo, index) in listado" :key="index" scope="row">
              <td>{{ cubiculo.id }}</td>
              <td>{{ cubiculo.user.ced }}</td>
              <td>{{ cubiculo.date_start }}</td>
              <td>{{ cubiculo.date_end }}</td>
              <td>{{ cubiculo.status }}</td>
            </tr>
          </div>
        </tbody>
      </table> -->
      <ul>
        <li v-for="(cubiculo, index) in listado" :key="index"> {{ cubiculo }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { cubRef } from "../services/firebase";
export default {
  name: "CubList",
  created() {
    this.getCub();
  },
  data() {
    return {
      listado: []
    };
  },
  methods: {
    getCub() {
      cubRef
        .once("value")
        .then(res => {
          this.listado = res.val();
          // eslint-disable-next-line
          console.log("resultado: ", res.val());
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
    }
  }
};
</script>