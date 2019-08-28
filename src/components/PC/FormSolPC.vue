<template>
  <div class="FormSolPC">
    <form v-on:submit.prevent="addForm" id="FormSolPC">
      <div class="container">
        <step-navigation :steps="steps" :currentstep="currentstep"></step-navigation>

        <div v-show="currentstep == 1">
          <h3>Información del Arrendador</h3>
          <div class="form-group">
            <label for="id">Cédula</label>
            <input
              type="id"
              name="cedula"
              class="form-control"
              placeholder="Ingrese su numero de cédula con guiones"
              v-model="pc.user.ced"
              @blur="getUserData(1)"
              :disabled="pc.user.found"
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
              v-model="pc.user.name"
              :disabled="pc.user.found"
            />
          </div>

          <div class="form-group">
            <label class="label">Sexo</label>
            <select
              v-model="pc.user.sex"
              type="text"
              id="sex"
              class="custom-select"
              placeholder="Elegir Sexo"
              :disabled="pc.user.found"
              required
            >
              <option selected disabled value>Elija su Sexo</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </div>

          <div class="form-group">
            <label for="ocup">Ocupación</label>
            <select v-model="pc.user.ocup" type="text" id="ocup" class="custom-select" :disabled="pc.user.found" required>
              <option selected disabled value>Elija su Ocupación</option>
              <option value="Est">Estudiante</option>
              <option value="Adm">Administrativo</option>
            </select>
          </div>

          <div class="form-group" v-if="pc.user.ocup=='Est'">
            <label class="label">Facultad</label>
            <select
              class="custom-select"
              type="text"
              v-model="pc.user.fac"
              :disabled="pc.user.found"
            >
              <option selected disabled value>Elija su facultad</option>
              <option value="CS">Ciencias de la Salud</option>
              <option value="HGT">Hotelería, Gastronomía y Turismo</option>
              <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
              <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
              <option value="DCP">Derecho y Ciencias Políticas</option>
            </select>
          </div>


          <div class="form-group">
            <button
              type="button"
              class="btn btn-outline-danger mx-1"
              @click="delUserData(1)"
            >Limpiar</button>
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
            <input type="checkbox" name="terminos" class="center" v-model.number="pc.check" /> Acepto y estoy de acuerdo con todas las condiciones de uso y seguridad
          </div>
        </div>

        <div v-show="currentstep == 3"></div>
        <step
          v-for="step in steps"
          :currentstep="currentstep"
          :key="step.id"
          :step="step"
          :stepcount="2"
          :form="pc"
          @step-change="stepChanged"
        ></step>
      </div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
import { PCsRef, PClogRef, userRef } from "@/services/firebase";

import stepNavigationStepVue from "./FormPC/step-navigation-step.vue";
import stepNavigationVue from "./FormPC/step-navigation.vue";
import stepVue from "./FormPC/step.vue";
export default {
  name: "FormSolPC",
  data() {
    return {
      currentstep: 1,
      steps: [
        {
          id: 1,
          title: "Arrendador",
          icon_class: "fa fa-user-circle-o"
        },
        {
          id: 2,
          title: "Condiciones",
          icon_class: "fa fa-check-square-o"
        }
      ],
      pc: {
        id: 1,
        user: {
          name: "",
          ced: "",
          fac: "",
          sex: "",
          ocup: "",
          found: false
        },
        check: false,
        date_start: "",
        date_end: "",
        status: true
      },
      listado: [],
      usuarios: [],
      log: [],
      logid: 1
    };
  },
  created() {
    this.getPCs();
    this.getUsers();
  },
  methods: {
    moment() {
      return moment();
    },
    stepChanged(step) {
      this.currentstep = step;
    },
    addForm() {
      this.pc.date_start = moment().format("dddd D/M/YY HH:mm:ss");
      this.pc.date_end = moment()
        .add(2, "m")
        .format("dddd D/M/YY HH:mm:ss");
      this.pc.status = false;
      let form = Object.assign({}, this.pc);
      PCsRef.child(form.id).set(form);
      PClogRef.child(this.logid).set(form);
      let ID = String(this.pc.id);
      this.$router.push({ path: `/pc/solicitud/realizado/${ID}` });
    },
    getPCs() {
      PCsRef.once("value")
        .then(res => {
          let data = res.val();
          this.listado = Object.values(data);
          let idpc = 1;
          if (this.listado.length > 0) {
            this.listado.forEach(pc => {
              if (pc.id == idpc && pc.status == false) {
                if (idpc < 30) {
                  idpc++;
                } else {
                  alert("No hay computadoras disponibles.");
                  this.$router.push("/pc/");
                }
              }
            });
          }
          this.pc.id = idpc;
          // eslint-disable-next-line
          console.log("ID: ", this.pc.id);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
      PClogRef
        .once("value")
        .then(logdb => {
          let logdata = logdb.val();
          this.log = Object.values(logdata);
          if (this.log.length > 0) {
            // eslint-disable-next-line
            this.log.forEach(pclog => {
              this.logid++;
            });
          }
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
    },
    getUsers() {
      userRef
        .once("value")
        .then(res => {
          let data = res.val();
          this.usuarios = Object.values(data);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
    },
    getUserData(ID) {
      if (this.usuarios.length > 0) {
        let exist;
        this.usuarios.forEach(user => {
          if (
            this.pc.user.ced == user.ced &&
            this.pc.user.found == false &&
            ID == 1
          ) {
            exist = this.ExistingUser(ID);
            if (!exist) {
              this.pc.user.name = user.name;
              this.pc.user.fac = user.fac;
              this.pc.user.sex = user.sex;
              this.pc.user.ocup = user.ocup;
              this.pc.user.found = true;
            }
          }
        });
      }
    },
    delUserData(ID) {
      if (ID == 1) {
        // eslint-disable-next-line
        console.log("Usuario encontrado");
        this.pc.user.ced = "";
        this.pc.user.name = "";
        this.pc.user.fac = "";
        this.pc.user.sex = "";
        this.pc.user.ocup = "";
        this.pc.user.found = false;
      } else {
        // eslint-disable-next-line
        console.log("Usuario NO encontrado");
      }
    },
    ExistingUser(ID) {
      let res = false;
      if (this.listado.length > 0) {
        this.listado.forEach(pcs => {
              if (ID == 1) {
                if (
                  pcs.user.ced == this.pc.user.ced &&
                  pcs.status == false
                ) {
                  this.pc.user.ced = "";
                  alert("El usuario ya esta en otra computadora");
                  res = true;
                  return res;
                }
              } else {
                res = false;
              }
            });
      }
      return res;
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
