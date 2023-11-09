<template>
  <div class="Cubs">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 class="display-4">
          Cubículos
        </h1>
        <p
          class="lead"
        >
          Reserve o vea información de los cubículos que tenemos disponible en el CRAI para grupo de estudiantes que necesiten reunirse para realizar proyectos o trabajos de la universidad.
        </p>
        <hr class="my-4">
        <router-link
          to="/cub/solicitud/"
          class="btn btn-primary btn-lg mr-1"
          href
          role="button"
        >
          Solicitar
        </router-link>
        <router-link
          to="/cub/list"
          class="btn btn-primary btn-lg ml-1"
          href
          role="button"
        >
          Ver Disponibilidad
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CRAICubs'
}
</script>
