<template>
        <div class="step-wrapper" :class="stepWrapperClass">
      <button type="button" class="btn btn-primary mr-1" v-if="enableback" @click="lastStep" :disabled="firststep">
          Atras
      </button>
      <button type="button" class="btn btn-primary mx-1" v-if="disbalenext" @click="nextStep" :disabled="validation">
          Siguiente
      </button>
      <button type="submit" class="btn btn-primary ml-1" v-if="laststep" :disabled="valsubmit">
          Enviar
      </button>
  </div>
</template>

<script>
export default {
    name: "step",
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

        disbalenext(){
            return this.currentstep != 3;
        },

        validation(){
            if (this.form.names.e1 == "" || this.form.ids.e1 =="" && this.currentstep==1){
                    return true;
            }
            else if (this.form.con == false && this.currentstep==2){
                return true;
            }
            else if (this.currentstep==this.stepcount){
                return true;
            }
            else {
                return false;
            }
            
        },

        valsubmit(){
            return (this.form.names.e2 == "" || this.form.ids.e2 == "" || this.form.names.e3 == "" || this.form.ids.e3 == "" || this.form.names.e4 == "" || this.form.ids.e4 == "")
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
}
</script>
