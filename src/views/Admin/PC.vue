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
                <h3 class="panel-title">Computadoras</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-6">
                    <div class="jumbotron">
                      <h1 class="display-5">Solicitud de Computadoras</h1>
                      <p
                        class="lead"
                      >En esta seccion permite crear un registro para utilizar una Computadoras.</p>
                      <hr class="my-4" />
                      <p>Se tendra que realizar un formulario, Se pedira informacion del estudiante o Iniciar sesion.</p>
                      <router-link
                        to="/admin/pc/solicitud"
                        class="btn btn-primary btn-lg"
                        role="button"
                      >Realizar Formulario</router-link>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="jumbotron">
                      <h1 class="display-5">Listado y vista de Computadoras</h1>
                      <p
                        class="lead"
                      >En esta seccion permite vizualizar las Computadoras utilizados.</p>
                      <hr class="my-4" />
                      <p>Para una mayor comodidad se mostrara el tiempos restante y las disponibilidad de los Computadoras.</p>
                      <router-link
                        to="/admin/pc/list"
                        class="btn btn-primary btn-lg"
                        role="button"
                      >Ver Computadoras</router-link>
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
  name: "AdminComp",
  components: {
    AdminMenu,
    AdminTitulo
  }
};
</script>

<style>
</style>
