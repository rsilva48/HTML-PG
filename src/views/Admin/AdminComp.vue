<template>
   <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header"></div>
      </div>
    </nav>

    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h1>
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Bienvenido
              <small>administrador</small>
            </h1>
          </div>
        </div>
      </div>
    </header>

    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="list-group">
              <a class="list-group-item active main-color-bg">
                <h3>
                  <span class="badge badge-primary">Menú</span>
                </h3>
              </a>
              <router-link to="/admin/comp" class="list-group-item">
                <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Computadoras
                <span class="badge">12</span>
              </router-link>
              <router-link to="/admin/cub" class="list-group-item">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Cubiculos
                <span class="badge">33</span>
              </router-link>
              <router-link to="/admin/report" class="list-group-item">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Reportes
                <span class="badge">203</span>
              </router-link>
            </div>

            <div class="well">
              <h4>Reloj</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 60%;"
                >60%</div>
              </div>
              <h4>Calendario</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 40%;"
                >40%</div>
              </div>
            </div>
          </div>
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
                      <p class="lead">En esta seccion permite crear un registro para utilizar una Computadoras.</p>
                      <hr class="my-4" />
                      <p>Se tendra que realizar un formulario, Se pedira informacion del estudiante o Iniciar sesion. </p>
                      <router-link to= "/admin/pc/sol" class="btn btn-primary btn-lg"  role="button">Realizar Formulario</router-link>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="jumbotron">
                      <h1 class="display-5">Listado y vista de Computadoras</h1>
                      <p class="lead">En esta seccion permite vizualizar las Computadoras utilizados.</p>
                      <hr class="my-4" />
                      <p>Para una mayor comodidad se mostrara el tiempos restante y las disponibilidad de los Computadoras.  </p>
                      <router-link to="/admin/admin_pcs" class="btn btn-primary btn-lg"  role="button">Ver Computadoras</router-link>
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
export default {
  name: 'AdminComp'
}
</script>

<style>

</style>
