<template>
  <div class="Cub">
    <div class="container-fluid py-4 p-xl-5 font bg-light">
      <div class="container">
        <h1 class="display-4">
          Lista de Cubículos
        </h1>
      </div>
      <!--Disponibilidad -->
    </div>
    <vistaUsuario />
  </div>
</template>

<script>
import vistaUsuario from '@/components/Cub/CubListUser'
export default {
  name: 'CubList',
  components: {
    vistaUsuario
  }
}
</script>
