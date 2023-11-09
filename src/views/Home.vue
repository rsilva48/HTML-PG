<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid font">
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
        <router-link
          to="/cub"
          role="button"
          class="btn btn-primary btn-lg mr-1"
          href
        >
          Cubículos
        </router-link>
        <router-link
          to="/pc"
          role="button"
          class="btn btn-primary btn-lg ml-1"
          href
        >
          Computadoras
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CRAIHome'
}
</script>
