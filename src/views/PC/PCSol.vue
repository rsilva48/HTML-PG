<template>
  <div class="PCSol">
    <div class="container-fluid p-5 font">
      <div class="container">
        <h1 class="display-4">
          Solicitud de PC
        </h1>
        <p class="lead">
          Llene la siguiente información para reservar una PC.
        </p>
      </div>
    </div>
    <FormSolPC @send2view="send2app" />
  </div>
</template>

<script>
import FormSolPC from '@/components/PC/FormSolPC.vue'
export default {
  name: 'PCSol',
  components: {
    FormSolPC
  },
  emits: ['cubform'],
  methods: {
    send2app (childform) {
      this.$emit('cubform', childform)
    }
  }
}
</script>
