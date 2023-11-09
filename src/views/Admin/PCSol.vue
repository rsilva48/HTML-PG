<template>
  <div class="PCSol">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 class="display-4">
          Solitar computadora
        </h1>
        <hr>
        <router-link
          to="/admin/pc"
          class="btn btn-primary btn-lg mr-2"
          role="button"
        >
          Volver
        </router-link>
        <router-link
          to="/admin/pc/list"
          class="btn btn-primary btn-lg ml-2"
          role="button"
        >
          Ver Computadoras
        </router-link>        
      </div>
    </div>
    <FormSolPC @send2view="send2app" />
  </div>
</template>

<script>
import FormSolPC from '@/components/PC/FormSolPC.vue'
export default {
  name: 'AdminPCsol',
  components: {
    FormSolPC
  },
}
</script>
