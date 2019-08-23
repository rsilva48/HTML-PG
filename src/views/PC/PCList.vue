<template>
  <div class="PC">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Computadoras</h1>
      </div>
       <!--Disponibilidad -->
    
    <vistaUsuario></vistaUsuario>
    </div>
    </div>
</template>

<script>

import vistaUsuario from '@/components/PC/PCtUser'
export default {
  name: 'PCList',
  components: {
    vistaUsuario
  }
}
</script>
