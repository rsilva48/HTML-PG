<template>
  <div class="PCs">
    <div class="container-fluid p-5 font bg-light">
      <div class="container">
        <h1 class="display-4">
          Computadoras
        </h1>
        <p
          class="lead"
        >
          Necesita realizar una investigación o tarea y no dispone de una computadora, el CRAI le ofrece este servicio a los estudiantes que lo necesiten.
        </p>
        <hr class="my-4">
        <div class="d-grid gap-3 mx-auto d-md-block">
          <router-link
            to="/pc/solicitud/"
            class="btn btn-primary btn-lg mx-1"
            href
            role="button"
          >
            Solicitar
          </router-link>
          <router-link
            to="/pc/list"
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
  name: 'CRAIPCs',
  components: {},
  methods: {}
}
</script>

<style>
</style>
