<template>
  <ol class="step-indicator">
    <component
      :is="step-navigation-step"
      v-for="step in steps"
      :key="step.id"
      :step="step"
      :currentstep="currentstep"
    />
  </ol>
</template>

<script>
import stepNavigationStepVue from './step-navigation-step.vue'
export default {
  name: 'StepNavigation',
  components: {
    'step-navigation-step': stepNavigationStepVue
  },
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
}
</script>
