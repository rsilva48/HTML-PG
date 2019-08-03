<template>
  <div class="Cub">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Cubiculos</h1>
        <h3 v-else>Cubiculo #{{ $route.params.id }}</h3>
      </div>
    </div>
    <div>
      <tr v-for="form in formCubs" :key="form.ids.e1">
        <td>{{ form.names.e1 }}</td>
        <td>{{ form.ids.e1 }}</td>
      </tr>
    </div>
  </div>
</template>

<script>
import { CubDBRef } from "../services/firebase";
export default {
  name: "Lista de Cubiculos",
  data() {
    return {
      formCubs: [],
      created() {
        this.getCub;
      },
      methods: {
        getCub() {
          console.log("Ejecutando");
          // Obtener información
          CubDBRef.once("value")
            .then(res => {
              this.formCubs = res.val();
              console.log(" Con datos. ", this.CubDBRef);
            })
            .catch(error => {
              console.log("Error sin datos ");
            });
        }
      }
    };
  }
};
</script>