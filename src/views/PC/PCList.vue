<template>
  <div class="PC">
    <div class="container-fluid p-5 font bg-light">
      <div class="container">
        <h1 class="display-4">
          Lista de Computadoras
        </h1>
      </div>
      <!--Disponibilidad -->
    </div>
    <vistaUsuario />
  </div>
</template>

<script>
import vistaUsuario from "@/components/PC/PCListUser";
export default {
  name: "PCList",
  components: {
    vistaUsuario
  }
};
</script>
