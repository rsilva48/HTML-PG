<template>
  <div class="home">
    <div class="container-fluid px-4 py-5 px-md-5 font bg-light">
      <div class="container">
        <h1 class="display-4">
          Biblioteca
        </h1>
        <p
          class="lead"
        >
          El Centro de Recursos para el Aprendizaje y la Investigación, CRAI, se concibe como un lugar que integra talento humano, libros físicos y espacios diseñado para estudiantes, dotado de tecnología que facilita el acceso a valiosos recursos digitales.
        </p>
        <hr class="my-4">
        <p
          class="lead"
        >
          Haga clic en uno de los siguientes enlaces para utilizar nuestos servicios.
        </p>
        <div class="d-grid gap-3 mx-auto d-md-block">
          <router-link
            to="/cub"
            class="btn btn-primary btn-lg mx-1"
          >
            Cubículos
          </router-link>
          <router-link
            to="/pc"
            class="btn btn-primary btn-lg mx-1"
          >
            Computadoras
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CRAIHome'
}
</script>
