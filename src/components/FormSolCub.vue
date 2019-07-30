<template>
  <div class="FormCub">
    <form v-on:submit.prevent="addForm" id="FormCub">
      <div class="container">
        <step-navigation :steps="steps" :currentstep="currentstep"></step-navigation>

        <div v-show="currentstep == 1">
          <h3>Encargado/Representante</h3>
          <div class="form-group">
            <label for="name">Nombre Completo</label>
            <input
              type="name"
              name="name"
              class="form-control"
              aria-describedby="nameHelp"
              placeholder="Ingrese su nombre completo"
              v-model="formulario.names.e1"
            />
          </div>
          <div class="form-group">
            <label for="id">Cedula</label>
            <input
              type="id"
              name="cedula"
              class="form-control"
              placeholder="Ingrese su numero de cedula con guiones"
              v-model="formulario.ids.e1"
            />
          </div>
        </div>

        <div v-show="currentstep == 2">
          <h3>Aceptar condiciones de uso y seguridad</h3>
          <div class="form-group">
            <div class="container">
              <div class="row">
                <ul class="col-md">
                  <li>No perder las llaves y devolverlas</li>
                  <li>Solo se usara hasta dos horas</li>
                  <li>Solo se estudiar o trabajara</li>
                  <li>No se elaboraran trabajos manuales</li>
                  <li>Se mantendran las luces encendidas y se comportara</li>
                  <li>Se llegara puntualmente a la hora de reserva</li>
                </ul>
                <ul class="col-md">
                  <li>Se dejara las mesas y sillas limpias</li>
                  <li>Se colocaran las sillas en su lugar</li>
                  <li>Se recogeran todas las pertenencias al salir</li>
                  <li>No se sentara ni en el piso ni mesa</li>
                  <li>Se reportara cualquier incidente</li>
                  <li>No se ingirira alimentos o bebidas</li>
                </ul>
              </div>
            </div>
            <br />
            <input type="checkbox" name="terminos" class="center" v-model.number="formulario.con" /> Acepto y estoy de acuerdo con todas las condiciones de uso y seguridad
          </div>
        </div>

        <div v-show="currentstep == 3">
          <h3>Participantes/Integrantes del Grupo</h3>
          <small>Minimo un grupo de 4 estudiantes contando al representante.</small>
          <br><br>
          <div class="CList">
            <div class="form-row">
                <div class="form-group col-8">
                  <label>Nombre</label>
                  <input class="form-control" v-model="formulario.names.e2" placeholder ="Estudiante 2" />
                </div>
                  <div class="form-group col-4">
                  <label>Cedula</label>
                  <input class="form-control" v-model="formulario.ids.e2" />
                  </div>
            </div>
            <div class="form-row">
                <div class="form-group col-8">
                  <input class="form-control" v-model="formulario.names.e3" placeholder ="Estudiante 3"/>
                </div>
                  <div class="form-group col-4">
                  <input class="form-control" v-model="formulario.ids.e3" />
                  </div>
            </div>
            <div class="form-row">
                <div class="form-group col-8">
                  <input class="form-control" v-model="formulario.names.e4" placeholder ="Estudiante 4"/>
                </div>
                  <div class="form-group col-4">
                  <input class="form-control" v-model="formulario.ids.e4" />
                  </div>
            </div>
            <div class="form-row">
                <div class="form-group col-8">
                  <input class="form-control" v-model="formulario.names.e5" placeholder ="Estudiante 5"/>
                </div>
                  <div class="form-group col-4">
                  <input class="form-control" v-model="formulario.ids.e5" />
                  </div>
            </div>
            <div class="form-row">
                <div class="form-group col-8">
                  <input class="form-control" v-model="formulario.names.e6" placeholder ="Estudiante 6"/>
                </div>
                  <div class="form-group col-4">
                  <input class="form-control" v-model="formulario.ids.e6" />
                  </div>
            </div>
          </div>
        </div>
        <step
          v-for="step in steps"
          :currentstep="currentstep"
          :key="step.id"
          :step="step"
          :stepcount="steps.length"
          :form="formulario"
          @step-change="stepChanged"
        ></step>
      </div>
    </form>
  </div>
</template>

<script>
import stepNavigationStepVue from "./FormCub/step-navigation-step.vue";
import stepNavigationVue from "./FormCub/step-navigation.vue";
import stepVue from "./FormCub/step.vue";
export default {
  name: "FormSolCub",
  data() {
    return {
      currentstep: 1,
      steps: [
        {
          id: 1,
          title: "Representante",
          icon_class: "fa fa-user-circle-o"
        },
        {
          id: 2,
          title: "Condiciones",
          icon_class: "fa fa-check-square-o"
        },
        {
          id: 3,
          title: "Participantes",
          icon_class: "fa fa-users"
        }
      ],
      formulario: {
        names: {
          e1: "",
          e2: "",
          e3: "",
          e4: "",
        },
        ids: {
          e1: "",
          e2: "",
          e3: "",
          e4: "",
        },
        con: false
      },
    };
  },
  methods: {
    stepChanged(step) {
      this.currentstep = step;
    },
    addForm() {
      let form = Object.assign({}, this.formulario);
      this.$emit('send2view', form);
      this.$router.push("/cub/solicitud/realizado");
    }
  },
  components: {
    // eslint-disable-next-line
    "step-navigation-step": stepNavigationStepVue,
    "step-navigation": stepNavigationVue,
    step: stepVue
  }
};
</script>
<style lang="scss">
$wizard-color-neutral: #ccc !default;
$wizard-color-active: #4183d7 !default;
$wizard-color-complete: #87d37c !default;
$wizard-step-width-height: 64px !default;
$wizard-step-font-size: 24px !default;

@import "https://fonts.googleapis.com/css?family=Roboto";

body {
  padding: 0;
  margin: 0;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
}

.CList {
  align-content: center;
}
.step-wrapper {
  padding: 20px 0;
  display: none;

  &.active {
    display: block;
  }
}

.step-indicator {
  border-collapse: separate;
  display: table;
  margin-left: 0px;
  position: relative;
  table-layout: fixed;
  text-align: center;
  vertical-align: middle;
  padding-left: 0;
  padding-top: 20px;

  li {
    display: table-cell;
    position: relative;
    float: none;
    padding: 0;
    width: 1%;

    &:after {
      background-color: $wizard-color-neutral;
      content: "";
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
      top: $wizard-step-width-height/2;
    }

    &:after {
      left: 50%;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    &.active {
      .step {
        border-color: $wizard-color-active;
        color: $wizard-color-active;
      }

      .caption {
        color: $wizard-color-active;
      }
    }

    &.complete {
      &:after {
        background-color: $wizard-color-complete;
      }

      .step {
        border-color: $wizard-color-complete;
        color: $wizard-color-complete;
      }

      .caption {
        color: $wizard-color-complete;
      }
    }
  }

  .step {
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid $wizard-color-neutral;
    color: $wizard-color-neutral;
    font-size: $wizard-step-font-size;
    height: $wizard-step-width-height;
    line-height: $wizard-step-width-height;
    margin: 0 auto;
    position: relative;
    width: $wizard-step-width-height;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }

  .caption {
    color: $wizard-color-neutral;
    padding: 11px 16px;
  }
}
</style>
