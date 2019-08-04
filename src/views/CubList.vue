<template>
  <div class="Cub">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Cubiculos</h1>
        <h3 v-else>Cubiculo #{{ $route.params.id }}</h3>
      </div>

      <div class="container">
        <table class="table">
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
            <div >
              <tr v-for="(cubiculo, index) in listado" :key="index" scope="row">
                <td>{{ item.id }}</td>
                <td>{{ item.user.ced }}</td>
                <td>{{ item.date_start }}</td>
                <td>{{ item.date_end }}</td>
                <td>{{ item.status }}</td>
              </tr>
            </div>
          </tbody>
        </table>
      </div>
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
          console.log("resultado: ", res.val());
        })
        .catch(error => {
          console.log("Error: ", error);
        });
    }
  }
};
</script>