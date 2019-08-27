<template>
  <div class="step-wrapper" :class="stepWrapperClass">
    <button
      type="button"
      class="btn btn-primary mr-1"
      v-if="enableback"
      @click="lastStep"
      :disabled="firststep"
    >Atras</button>
    <button
      type="button"
      class="btn btn-primary mx-1"
      v-if="disbalenext"
      @click="nextStep"
      :disabled="validation"
    >Siguiente</button>
    <button type="submit" class="btn btn-primary ml-1" v-if="laststep" :disabled="validation2">Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'step',
  props: ['step', 'stepcount', 'currentstep', 'form'],

  computed: {
    active () {
      return this.step.id == this.currentstep
    },

    firststep () {
      return this.currentstep == 1
    },

    enableback () {
      return this.currentstep != 1
    },

    laststep () {
      return this.currentstep == this.stepcount
    },

    disbalenext () {
      return this.currentstep != 2
    },

    validation () {
      if (
        this.form.user.name == '' ||
        this.form.user.ced == '' ||
        this.form.user.fac == '' ||
        this.form.user.sex == '' ||
        this.form.user.ocup == '' &&
        this.currentstep == 1
      ) {
        return true
      } else if (this.form.check == false && this.currentstep == 2) {
        return true
      } else if (this.currentstep == this.stepcount) {
        return true
      } else {
        return false
      }
    },
    validation2 () {
     if (this.form.check == false) {
        return true
      } 
     else {
        return false
      }
    },

    valsubmit () {
      return true
    },

    stepWrapperClass () {
      return {
        active: this.active
      }
    }
  },

  methods: {
    nextStep () {
      this.$emit('step-change', this.currentstep + 1)
    },

    lastStep () {
      this.$emit('step-change', this.currentstep - 1)
    }
  }
}
</script>
