<template>
  <div>
    <AdminTitulo />
    <section id="main">
      <div class="container">
        <div class="row">
          <AdminMenu class="col-md-3" />
          <div class="col-md-9">
            <!-- Website Overview -->
            <!-- Latest Users -->
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  Cubiculos
                </h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-6">
                    <div class="jumbotron">
                      <h1 class="display-5">
                        Solicitud de Cubiculo
                      </h1>
                      <p class="lead">
                        En esta seccion permite crear un registro para utilizar un Cubiculo.
                      </p>
                      <hr class="my-4">
                      <p>Se tendra que realizar un formulario, Donde se pedira imformacion del grupo de estudiantes y se explica las normas de uso. </p>
                      <router-link
                        to="/admin/cub/solicitud"
                        class="btn btn-primary btn-lg"
                        role="button"
                      >
                        Realizar Formulario
                      </router-link>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="jumbotron">
                      <h1 class="display-5">
                        Listado y vista de Cubiculos
                      </h1>
                      <p class="lead">
                        En esta seccion permite vizualizar los Cubiculos utilizados.
                      </p>
                      <hr class="my-4">
                      <p>Para una mayor comodidad se mostrara el tiempos restante y las disponibilidad de los Cubiculos.</p>
                      <router-link
                        to="/admin/cub/list/"
                        class="btn btn-primary btn-lg"
                        role="button"
                      >
                        Ver Cubiculos
                      </router-link>
                    </div>
                  </div>
                </div>
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
export default {
  name: 'AdminCub',
  components: {
    AdminMenu,
    AdminTitulo
  }
}
</script>

<style>
</style>
