<template>
  <div class="PCs">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 class="display-4">Computadoras</h1>
        <p
          class="lead"
        >Necesita realizar una investigación o tarea y no dispone de una computadora, el CRAI le ofrece este servicio a los estudiantes que lo necesiten.</p>
        <hr class="my-4" />
        <router-link
          to="/pc/solicitud/"
          class="btn btn-primary btn-lg mr-1"
          href
          role="button"
        >Solicitar</router-link>
        <router-link
          to="/pc/list"
          class="btn btn-primary btn-lg ml-1"
          href
          role="button"
        >Ver Disponibilidad</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCs',
  methods: {},
  components: {}
}
</script>

<style>
</style>
