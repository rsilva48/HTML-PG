<template>
  <div class="FormCub">
    <form v-on:submit.prevent="addForm" id="FormCub">
      <div class="container">
        <step-navigation :steps="steps" :currentstep="currentstep"></step-navigation>

        <div v-show="currentstep == 1">
          <h3>Encargado/Representante</h3>
          <div class="form-group">
            <label for="id">Cedula</label>
            <input
              type="id"
              name="cedula"
              class="form-control"
              placeholder="Ingrese su numero de cedula con guiones"
              v-model="cub.user.ced"
            />
          </div>
          <div class="form-group">
            <label for="name">Nombre Completo</label>
            <input
              type="name"
              name="name"
              class="form-control"
              aria-describedby="nameHelp"
              placeholder="Ingrese su nombre completo"
              v-model="cub.user.name"
            />
          </div>
          <div class="form-group">
            <label class="label">Facultad</label>
            <select class="form-control" type="text" v-model="cub.user.fac">
              <option value="CS">Ciencias de la Salud</option>
              <option value="HGT">Hotelería, Gastronomía y Turismo</option>
              <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
              <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
              <option value="DCP">Derecho y Ciencias Políticas</option>
            </select>
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
            <input type="checkbox" name="terminos" class="center" v-model.number="cub.check" /> Acepto y estoy de acuerdo con todas las condiciones de uso y seguridad
          </div>
        </div>

        <div v-show="currentstep == 3">
          <h3>Participantes/Integrantes del Grupo</h3>
          <small>Minimo un grupo de 4 estudiantes contando al representante.</small>
          <br />
          <br />
          <div class="CList">
            <div class="form-row">
              <div class="form-group col-3">
                <label>Cedula</label>
                <input
                  class="form-control"
                  v-model="cub.integrantes.user1.ced"
                  placeholder="Estudiante 2"
                />
              </div>

              <div class="form-group col-5">
                <label>Nombre</label>
                <input class="form-control" v-model="cub.integrantes.user1.name" />
              </div>
              <div class="form-group col-4">
                <label class="label">Facultad</label>
                <select class="form-control" type="text" v-model="cub.integrantes.user1.fac">
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-3">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user2.ced"
                  placeholder="Estudiante 3"
                />
              </div>
              <div class="form-group col-5">
                <input class="form-control" v-model="cub.integrantes.user2.name" />
              </div>
              <div class="form-group col-4">
                <select class="form-control" type="text" v-model="cub.integrantes.user2.fac">
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-3">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user3.ced"
                  placeholder="Estudiante 4"
                />
              </div>
              <div class="form-group col-5">
                <input class="form-control" v-model="cub.integrantes.user3.name" />
              </div>
              <div class="form-group col-4">
                <select class="form-control" type="text" v-model="cub.integrantes.user3.fac">
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-3">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user4.ced"
                  placeholder="Estudiante 5"
                />
              </div>
              <div class="form-group col-5">
                <input class="form-control" v-model="cub.integrantes.user4.name" />
              </div>
              <div class="form-group col-4">
                <select class="form-control" type="text" v-model="cub.integrantes.user4.fac">
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-3">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user5.ced"
                  placeholder="Estudiante 6"
                />
              </div>
              <div class="form-group col-5">
                <input class="form-control" v-model="cub.integrantes.user5.name" />
              </div>
              <div class="form-group col-4">
                <select class="form-control" type="text" v-model="cub.integrantes.user5.fac">
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
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
          :form="cub"
          @step-change="stepChanged"
        ></step>
      </div>
    </form>
  </div>
</template>


<script>
import { cubRef } from "../services/firebase";
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
      cub: {
        id: 1,
        user: {
          name: "",
          ced: "",
          fac: ""
        },
        integrantes: {
          user1: {
            name: "",
            ced: "",
            fac: ""
          },
          user2: {
            name: "",
            ced: "",
            fac: ""
          },
          user3: {
            name: "",
            ced: "",
            fac: ""
          },
          user4: {
            name: "",
            ced: "",
            fac: ""
          },
          user5: {
            name: "",
            ced: "",
            fac: ""
          }
        },
        check: false,
        date_start: new Date(),
        date_end: new Date(),
        status: true
      },
      listado: []
    };
  },
  created() {
    this.getCub();
  },
  methods: {
    stepChanged(step) {
      this.currentstep = step;
    },
    addForm() {
      this.cub.date_start = new Date();
      this.cub.date_end = this.cub.date_start;
      this.cub.date_end.setHours(this.cub.date_start.getHours() + 1);
      this.cub.status = false;
      let form = Object.assign({}, this.cub);
      cubRef.child(form.id).set(form);
      this.$router.push("/cub/solicitud/realizado");
    },
    getCub() {
      let idcub = 1;
      let cubs;
      cubRef
        .once("value")
        .then(res => {
          let data = res.val();
          this.listado = Object.values(data);
          // eslint-disable-next-line
          console.log("data: ", data);
          // eslint-disable-next-line
          console.log("listado: ", this.listado);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
      // eslint-disable-next-line
      console.log("lenght: ", this.listado.lenght)
      if (this.listado) {
        // eslint-disable-next-line
        console.log("If this.listado = true")
        this.listado.forEach(item => {
          // eslint-disable-next-line
          console.log("For each in listado: ", item.val())
        });
      }
      /* for (cubs in this.listado) {
        // eslint-disable-next-line
        console.log("cubiculo: ", cubs);
        if (cubs.id == idcub) {
          idcub++;
        }
        this.cubs.id = idcub;
      } */
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
