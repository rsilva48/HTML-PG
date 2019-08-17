<template>
  <ol class="step-indicator">
    <li
      v-for="step in steps"
      is="step-navigation-step"
      :key="step.id"
      :step="step"
      :currentstep="currentstep"
    ></li>
  </ol>
</template>

<script>
import stepNavigationStepVue from './step-navigation-step.vue'
export default {
  name: 'step-navigation',
  props: ['steps', 'currentstep'],
  components: {
    'step-navigation-step': stepNavigationStepVue
  }
}
</script>
