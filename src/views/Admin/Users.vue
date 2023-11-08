<template>
  <div>
    <AdminTitulo />
    <section id="main">
      <div class="container">
        <div class="row">
          <AdminMenu class="col-md-3" />
          <div class="text-center col-md-9" v-if="loading">
            <div class="spinner-border text-primary m-5" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <div class="col-md-9" v-if="!loading">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Usuarios</h3>
                <button type="button" class="btn btn-default btn-sm" @click="getUsers">
                  <i class="fa fa-refresh"></i> Actualizar
                </button>
              </div>
              <div class="panel-body">
                <table class="table table-striped table-hover">
                  <tr>
                    <th>Cédula</th>
                    <th>Nombre</th>
                    <th>Ocupación</th>
                  </tr>
                  <tr v-for="(usuario, index) in usuarios" :key="index">
                    <td>{{ usuario.ced }}</td>
                    <td>{{ usuario.name }}</td>
                    <td>{{ usuario.ocup }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AdminTitulo from "@/components/Admin/Titulo.vue";
import AdminMenu from "@/components/Admin/Menu.vue";
import { userRef } from "@/services/firebase";
import { onValue, query } from "firebase/database";
export default {
  name: "AdminView",
  components: {
    AdminMenu,
    AdminTitulo
  },
  created() {
    this.getUsers();
  },
  data() {
    return {
      loading: true,
      usuarios: []
    };
  },
  methods: {
    getUsers() {
      this.loading = true
      onValue(query(userRef), res => {
        let data = res.val();
        this.usuarios = Object.values(data);
        this.loading = false;
      }, {
        onlyOnce: true
      })

    }
  }
};
</script>

<style></style>
