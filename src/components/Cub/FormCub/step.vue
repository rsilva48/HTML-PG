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
    <button type="submit" class="btn btn-primary ml-1" v-if="laststep" :disabled="valsubmit">Enviar</button>
  </div>
</template>

<script>
export default {
  name: "CubStep",
  props: ["step", "stepcount", "currentstep", "form"],

  computed: {
    active() {
      return this.step.id == this.currentstep;
    },

    firststep() {
      return this.currentstep == 1;
    },

    enableback() {
      return this.currentstep != 1;
    },

    laststep() {
      return this.currentstep == this.stepcount;
    },

    disbalenext() {
      return this.currentstep != 3;
    },

    validation() {
      if (
        this.currentstep == 1 &&
        (this.form.user.name == "" ||
          this.form.user.ced == "" ||
          this.form.user.sex == "" ||
          this.form.user.ocup == "")
      ) {
        return true;
      } else if (
        this.form.user.ocup == "Est" &&
        this.currentstep == 1 &&
        (this.form.user.name == "" ||
          this.form.user.ced == "" ||
          this.form.user.fac == "" ||
          this.form.user.sex == "")
      ) {
        return true;
      } else if (
        this.form.user.ocup == "Adm" &&
        this.currentstep == 1 &&
        (this.form.user.name == "" ||
          this.form.user.ced == "" ||
          this.form.user.sex == "")
      ) {
        return true;
      } else if (this.form.check == false && this.currentstep == 2) {
        return true;
      } else if (this.currentstep == this.stepcount) {
        return true;
      } else {
        return false;
      }
    },

    valsubmit() {
      return (
        this.form.integrantes.user1.name == "" ||
        this.form.integrantes.user1.ced == "" ||
        this.form.integrantes.user1.sex == "" ||
        this.form.integrantes.user2.name == "" ||
        this.form.integrantes.user2.ced == "" ||
        this.form.integrantes.user2.sex == "" ||
        this.form.integrantes.user3.name == "" ||
        this.form.integrantes.user3.ced == "" ||
        this.form.integrantes.user3.sex == "" ||
        this.form.integrantes.user1.ocup == "" ||
        this.form.integrantes.user2.ocup == "" ||
        this.form.integrantes.user3.ocup == "" ||
        (this.form.integrantes.user1.fac == "" &&
          this.form.integrantes.user1.ocup == "Est") ||
        (this.form.integrantes.user2.fac == "" &&
          this.form.integrantes.user2.ocup == "Est") ||
        (this.form.integrantes.user3.fac == "" &&
          this.form.integrantes.user3.ocup == "Est")
      );
    },

    stepWrapperClass() {
      return {
        active: this.active
      };
    }
  },

  methods: {
    nextStep() {
      this.$emit("step-change", this.currentstep + 1);
    },

    lastStep() {
      this.$emit("step-change", this.currentstep - 1);
    }
  }
};
</script>
