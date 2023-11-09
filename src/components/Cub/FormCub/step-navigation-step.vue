<template>
  <li :class="indicatorclass">
    <div class="step">
      <i :class="step.icon_class" />
    </div>
    <div class="caption hidden-xs hidden-sm">
      Paso
      <span v-text="step.id" />:
      <span v-text="step.title" />
    </div>
  </li>
</template>

<script>
export default {
  name: 'StepNavigationStep',
  props: {
    'steps': {
      type: Array,
      required: true
    },
    'currentstep': {
      type: Number,
      required: true
    },
  },

  computed: {
    indicatorclass() {
      return {
        active: this.step.id == this.currentstep,
        complete: this.currentstep > this.step.id
      }
    }
  }
}
</script>
