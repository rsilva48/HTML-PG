<template>
  <div class="PC">
    <div class="container-fluid p-5 font">
      <div class="container">
        <h1 class="display-4">
          Lista de Computadoras
        </h1>
        <hr>
        <router-link
          to="/admin/pc"
          class="btn btn-primary btn-lg mr-2"
          role="button"
        >
          Volver
        </router-link>
        <router-link
          to="/admin/pc/solicitud"
          class="btn btn-primary btn-lg ml-2"
          role="button"
        >
          Formulario
        </router-link>
        <br>
        <div class="row-flex">
          <div class="custom-control custom-switch">
            <input
              id="customSwitch1"
              v-model="admin"
              type="checkbox"
              class="custom-control-input"
              @change="!admin"
            >
            <label
              class="custom-control-label"
              for="customSwitch1"
            >Vista Usuario/Vista Admin</label>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="loading"
      class="text-center"
    >
      <div
        class="spinner-border text-primary m-5"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="!loading && admin">
      <!--vista de admin -->
      <div class="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                #
              </th>
              <th scope="col">
                Cedula del arrendador
              </th>
              <th scope="col">
                Fecha de Inicio
              </th>
              <th scope="col">
                Fecha de Fin
              </th>
              <th scope="col">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(pc, index) in listado"
              :key="index"
              scope="row"
            >
              <td>{{ pc.id }}</td>
              <td>{{ pc.user.ced }}</td>
              <td>{{ pc.date_start }}</td>
              <td>{{ pc.date_end }}</td>
              <td>{{ pc.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="!admin">
      <vistaUsuario />
    </div>
  </div>
  <!--finaliza vista usuario -->
</template>

<script>
import vistaUsuario from '@/components/PC/PCListUser'
import { PCsRef } from '@/services/firebase'
import { onValue, query } from "firebase/database";
export default {
  name: 'AdminPCs',
  components: {
    vistaUsuario
  },
  data() {
    return {
      listado: [],
      loading: true,
      admin: true
    }
  },
  created() {
    setInterval(() => {
      this.getPC()
    }, 1000)
  },
  methods: {
    getPC() {
      onValue(query(PCsRef), res => {
        let data = res.val()
        this.listado = Object.values(data)
        this.loading = false
      }, {
        onlyOnce: true
      })
    }
  }
}
</script>