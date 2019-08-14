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
              @blur="getUserData"
              :disabled="cub.user.found"
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
              :disabled="cub.user.found"
            />
          </div>
          <div class="form-group">
            <label class="label">Facultad</label>
            <select
              class="form-control"
              type="text"
              v-model="cub.user.fac"
              :disabled="cub.user.found"
            >
              <option value="CS">Ciencias de la Salud</option>
              <option value="HGT">Hotelería, Gastronomía y Turismo</option>
              <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
              <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
              <option value="DCP">Derecho y Ciencias Políticas</option>
            </select>
          </div>
          <div class="form-group">
                <button type="button" class="btn btn-outline-danger mx-1" @click="delUserData(1)">Limpiar</button>
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
                  @blur="getUserData"
                  :disabled="cub.integrantes.user1.found"
                />
              </div>

              <div class="form-group col-4">
                <label>Nombre</label>
                <input
                  class="form-control"
                  v-model="cub.integrantes.user1.name"
                  :disabled="cub.integrantes.user1.found"
                />
              </div>
              <div class="form-group col-4">
                <label class="label">Facultad</label>
                <select
                  class="form-control"
                  type="text"
                  v-model="cub.integrantes.user1.fac"
                  :disabled="cub.integrantes.user1.found"
                >
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
              <div class="form-group col-1">
                <label>Eliminar</label>
                <button type="button" class="btn btn-outline-danger" @click="delUserData(2)">X</button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-3">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user2.ced"
                  placeholder="Estudiante 3"
                  @blur="getUserData"
                  :disabled="cub.integrantes.user2.found"
                />
              </div>
              <div class="form-group col-4">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user2.name"
                  :disabled="cub.integrantes.user2.found"
                />
              </div>
              <div class="form-group col-4">
                <select
                  class="form-control"
                  type="text"
                  v-model="cub.integrantes.user2.fac"
                  :disabled="cub.integrantes.user2.found"
                >
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
              <div class="form-group col-1">
                <button type="button" class="btn btn-outline-danger" @click="delUserData(3)">X</button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-3">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user3.ced"
                  placeholder="Estudiante 4"
                  @blur="getUserData"
                  :disabled="cub.integrantes.user3.found"
                />
              </div>
              <div class="form-group col-4">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user3.name"
                  :disabled="cub.integrantes.user3.found"
                />
              </div>
              <div class="form-group col-4">
                <select
                  class="form-control"
                  type="text"
                  v-model="cub.integrantes.user3.fac"
                  :disabled="cub.integrantes.user3.found"
                >
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
              <div class="form-group col-1">
                <button type="button" class="btn btn-outline-danger" @click="delUserData(4)">X</button>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-3">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user4.ced"
                  placeholder="Estudiante 5"
                  @blur="getUserData"
                  :disabled="cub.integrantes.user4.found"
                />
              </div>
              <div class="form-group col-4">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user4.name"
                  :disabled="cub.integrantes.user4.found"
                />
              </div>
              <div class="form-group col-4">
                <select
                  class="form-control"
                  type="text"
                  v-model="cub.integrantes.user4.fac"
                  :disabled="cub.integrantes.user4.found"
                >
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
              <div class="form-group col-1">
                <button type="button" class="btn btn-outline-danger" @click="delUserData(5)">X</button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-3">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user5.ced"
                  placeholder="Estudiante 6"
                  @blur="getUserData"
                  :disabled="cub.integrantes.user5.found"
                />
              </div>
              <div class="form-group col-4">
                <input
                  class="form-control"
                  v-model="cub.integrantes.user5.name"
                  :disabled="cub.integrantes.user5.found"
                />
              </div>
              <div class="form-group col-4">
                <select
                  class="form-control"
                  type="text"
                  v-model="cub.integrantes.user5.fac"
                  :disabled="cub.integrantes.user5.found"
                >
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
              </div>
              <div class="form-group col-1">
                <button type="button" class="btn btn-outline-danger" @click="delUserData(6)">X</button>
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
import moment from "moment";
import { cubRef } from "../services/firebase";
import { userRef } from "../services/firebase";
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
          fac: "",
          found: false
        },
        integrantes: {
          user1: {
            name: "",
            ced: "",
            fac: "",
            found: false
          },
          user2: {
            name: "",
            ced: "",
            fac: "",
            found: false
          },
          user3: {
            name: "",
            ced: "",
            fac: "",
            found: false
          },
          user4: {
            name: "",
            ced: "",
            fac: "",
            found: false
          },
          user5: {
            name: "",
            ced: "",
            fac: "",
            found: false
          }
        },
        check: false,
        date_start: "",
        date_end: "",
        status: true
      },
      listado: [],
      usuarios: []
    };
  },
  created() {
    this.getCub();
    this.getUsers(); 
    // setInterval( () => {
    //   this.rutina()
    // }, 1000)   
  },
  methods: {    
    rutina () {
      
      this.getCub()
      this.listado.forEach( cub => {
        const fecha = moment().format("dddd D/M/YY HH:mm")
        // console.log(cub.id, cub.date_end, "====> ",  fecha, cub.date_end === fecha )
        if (cub.date_end === fecha){
          console.log('??????????????')
          // eslint-disable-next-line
          console.log("Cub Date End: ", cub.date_end)
          // eslint-disable-next-line
          console.log("Actual Date: ",  moment().format("dddd D/M/YY HH:mm"))
          this.setForm();
          return true
        }
      })
      //  for (let cub in this.listado) {
      //    const fecha = moment().format("dddd D/M/YY HH:mm")
      //    console.log(cub.date_end, fecha, cub.date_end === fecha )
      //   if (cub.date_end === fecha){
      //     // eslint-disable-next-line
      //     console.log("Cub Date End: ", cub.date_end)
      //     // eslint-disable-next-line
      //     console.log("Actual Date: ",  moment().format("dddd D/M/YY HH:mm"))
      //     cub.status = true
      //     this.addForm();
      //     return true
      //   }
      // }
    },
    moment() {
      return moment();
    },
    stepChanged(step) {
      this.currentstep = step;
    },
    addForm() {
      this.cub.date_start = moment().format("dddd D/M/YY HH:mm");
      this.cub.date_end = moment()
        .add(1, "m")
        .format("dddd D/M/YY HH:mm");
      this.cub.status = false;
      let form = Object.assign({}, this.cub);
      cubRef.child(form.id).set(form);
      let ID = String(this.cub.id)
      this.$router.push({path: `/cub/solicitud/realizado/${ID}`});
    },
    setForm() {
      this.cub.status = true;
      let form = Object.assign({}, this.cub);
      cubRef.child(form.id).set(form);
      let ID = String(this.cub.id)
      this.$router.push({path: `/cub/solicitud/realizado/${ID}`});
    },
    getCub() {
      cubRef
        .once("value")
        .then(res => {
          let data = res.val();
          this.listado = Object.values(data);
          let idcub = 1;
          if (this.listado.length > 0) {
            this.listado.forEach(function(cubs) {
              if (cubs.id == idcub && cubs.status == false) {
                if (idcub < 10){
                  idcub++;
                }
                else{
                  alert("No hay cubiculos disponibles.")
                  this.$router.push("/cub/all");
                }
                
                // eslint-disable-next-line
                console.log("ID +1");
              }
            });
          }
          this.cub.id = idcub;
          // eslint-disable-next-line
          console.log("ID: ", this.cub.id);
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
    getUserData() {
      if (this.usuarios.length > 0) {
        this.usuarios.forEach(user => {
          if (this.cub.user.ced == user.ced && this.cub.user.found == false) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.user.name = user.name;
            this.cub.user.fac = user.fac;
            this.cub.user.found = true;
          } else if (
            this.cub.integrantes.user1.ced == user.ced &&
            this.cub.integrantes.user1.found == false
          ) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user1.name = user.name;
            this.cub.integrantes.user1.fac = user.fac;
            this.cub.integrantes.user1.found = true;
          } else if (
            this.cub.integrantes.user2.ced == user.ced &&
            this.cub.integrantes.user2.found == false
          ) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user2.name = user.name;
            this.cub.integrantes.user2.fac = user.fac;
            this.cub.integrantes.user2.found = true;
          } else if (
            this.cub.integrantes.user3.ced == user.ced &&
            this.cub.integrantes.user3.found == false
          ) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user3.name = user.name;
            this.cub.integrantes.user3.fac = user.fac;
            this.cub.integrantes.user3.found = true;
          } else if (
            this.cub.integrantes.user4.ced == user.ced &&
            this.cub.integrantes.user4.found == false
          ) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user4.name = user.name;
            this.cub.integrantes.user4.fac = user.fac;
            this.cub.integrantes.user4.found = true;
          } else if (
            this.cub.integrantes.user5.ced == user.ced &&
            this.cub.integrantes.user5.found == false
          ) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user5.name = user.name;
            this.cub.integrantes.user5.fac = user.fac;
            this.cub.integrantes.user5.found = true;
          } else {
            // eslint-disable-next-line
            console.log("Usuario NO encontrado");
          }
        });
      }
    },
        delUserData(ID) {
          if (ID == 1) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.user.ced = "";
            this.cub.user.name = "";
            this.cub.user.fac = "";
            this.cub.user.found = false;
          } else if (ID == 2) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user1.ced = "";
            this.cub.integrantes.user1.name = "";
            this.cub.integrantes.user1.fac ="";
            this.cub.integrantes.user1.found = false;
          } else if (ID == 3) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user2.ced = "";
            this.cub.integrantes.user2.name = "";
            this.cub.integrantes.user2.fac ="";
            this.cub.integrantes.user2.found = false;
          } else if (ID == 4) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user3.ced = "";
            this.cub.integrantes.user3.name = "";
            this.cub.integrantes.user3.fac ="";
            this.cub.integrantes.user3.found = false;
          } else if (ID == 5) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user4.ced = "";
            this.cub.integrantes.user4.name = "";
            this.cub.integrantes.user4.fac ="";
            this.cub.integrantes.user4.found = false;
          } else if (ID == 6) {
            // eslint-disable-next-line
            console.log("Usuario encontrado");
            this.cub.integrantes.user5.ced = "";
            this.cub.integrantes.user5.name = "";
            this.cub.integrantes.user5.fac ="";
            this.cub.integrantes.user5.found = false;
          } else {
            // eslint-disable-next-line
            console.log("Usuario NO encontrado");
          }
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
