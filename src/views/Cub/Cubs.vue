<template>
  <div class="Cubs">
    <div class="container-fluid p-5 font bg-light">
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
        <div class="d-grid gap-3 mx-auto d-md-block">
          <router-link
            to="/cub/solicitud/"
            class="btn btn-primary btn-lg mx-1"
            href
            role="button"
          >
            Solicitar
          </router-link>
          <router-link
            to="/cub/list"
            class="btn btn-primary btn-lg mx-1"
            href
            role="button"
          >
            Ver Disponibilidad
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CRAICubs'
}
</script>
