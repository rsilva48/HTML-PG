<template>
  <div class="Cub">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Cubiculos</h1>

        <h3 v-else>Cubiculo #{{ $route.params.id }}</h3>
        <div class="row-flex">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              @change="!status"
              v-model="status"
              class="custom-control-input"
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1">Vista Usuario/Vista Admin</label>
          </div>
          <div v-if="status">
            <!--vista de admin -->
            <div class="container">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cedula del encargado</th>
                    <th scope="col">Fecha de Inicio</th>
                    <th scope="col">Fecha de Fin</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cubiculo, index) in listado" :key="index" scope="row">
                    <td>{{ cubiculo.id }}</td>
                    <td>{{ cubiculo.user.ced }}</td>
                    <td>{{ cubiculo.date_start }}</td>
                    <td>{{ cubiculo.date_end }}</td>
                    <td>{{ cubiculo.status }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else>
           <vistaUsuario></vistaUsuario>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--finaliza vista usuario -->
</template>

<script>
import vistaUsuario from "./CubListUser";
import { cubRef } from "../services/firebase";
export default {
  name: "CubList",
  created() {
    this.getCub();
  },
  data() {
    return {
      listado: [],
      status: true
    };
  },
  components: {
    vistaUsuario
  },
  methods: {
    getCub() {
      cubRef
        .once("value")
        .then(res => {
          let data = res.val();
          this.listado = Object.values(data);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
    }
  }
};
</script>