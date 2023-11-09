<template>
  <div class="FormCub">
    <form
      id="FormCub"
      @submit.prevent="addForm"
    >
      <div class="container">
        <step-navigation
          :steps="steps"
          :currentstep="currentstep"
        />

        <div v-show="currentstep == 1">
          <h3>Información del Encargado</h3>
          <div class="form-group">
            <label for="id">Cédula</label>
            <input
              v-model="cub.user.ced"
              type="id"
              name="cedula"
              class="form-control"
              placeholder="Ingrese su numero de cédula con guiones"
              :disabled="cub.user.found"
              @blur="getUserData(1)"
            >
          </div>

          <div class="form-group">
            <label for="name">Nombre Completo</label>
            <input
              v-model="cub.user.name"
              type="name"
              name="name"
              class="form-control"
              aria-describedby="nameHelp"
              placeholder="Ingrese su nombre completo"
              :disabled="cub.user.found"
            >
          </div>

          <div class="form-group">
            <label class="label">Sexo</label>
            <select
              id="sex"
              v-model="cub.user.sex"
              class="custom-select"
              placeholder="Elegir Sexo"
              :disabled="cub.user.found"
              required
            >
              <option
                selected
                disabled
                value
              >
                Elija su Sexo
              </option>
              <option value="M">
                Masculino
              </option>
              <option value="F">
                Femenino
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="ocup">Ocupación</label>
            <select
              id="ocup"
              v-model="cub.user.ocup"
              class="custom-select"
              :disabled="cub.user.found"
              required
            >
              <option
                selected
                disabled
                value
              >
                Elija su Ocupación
              </option>
              <option value="Est">
                Estudiante
              </option>
              <option value="Adm">
                Administrativo
              </option>
            </select>
          </div>

          <div
            v-if="cub.user.ocup == 'Est'"
            class="form-group"
          >
            <label class="label">Facultad</label>
            <select
              v-model="cub.user.fac"
              class="custom-select"
              
              :disabled="cub.user.found"
            >
              <option
                selected
                disabled
                value
              >
                Elija su facultad
              </option>
              <option value="CS">
                Ciencias de la Salud
              </option>
              <option value="HGT">
                Hotelería, Gastronomía y Turismo
              </option>
              <option value="IAD">
                Ingeniería, Arquitectura y Diseño
              </option>
              <option value="CAMP">
                Ciencias Administrativas, Marítima y Portuaria
              </option>
              <option value="DCP">
                Derecho y Ciencias Políticas
              </option>
            </select>
          </div>

          <div class="form-group">
            <button
              type="button"
              class="btn btn-outline-danger mx-1"
              @click="delUserData(1)"
            >
              Limpiar
            </button>
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
            <br>
            <input
              v-model.number="cub.check"
              type="checkbox"
              name="terminos"
              class="center"
            > Acepto y estoy de acuerdo
            con todas las condiciones de uso y seguridad
          </div>
        </div>

        <div v-show="currentstep == 3">
          <h3>Participantes/Integrantes del Grupo</h3>
          <small>Minimo un grupo de 4 estudiantes contando al representante.</small>
          <br>
          <br>
          <div class="CList">
            <div class="form-row">
              <div class="form-group col-2">
                <label>Cédula</label>
                <input
                  v-model="cub.integrantes.user1.ced"
                  class="form-control"
                  placeholder="Estudiante 2"
                  :disabled="cub.integrantes.user1.found"
                  @blur="getUserData(2)"
                >
              </div>

              <div class="form-group col-3">
                <label>Nombre</label>
                <input
                  v-model="cub.integrantes.user1.name"
                  class="form-control"
                  :disabled="cub.integrantes.user1.found"
                >
              </div>
              <div class="form-group col-1">
                <label class="label">Sexo</label>
                <select
                  id="sex"
                  v-model="cub.integrantes.user1.sex"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user1.found"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Sexo
                  </option>
                  <option value="M">
                    M
                  </option>
                  <option value="F">
                    F
                  </option>
                </select>
              </div>

              <div class="form-group col-2">
                <label for="ocup">Ocupación</label>
                <select
                  id="ocup"
                  v-model="cub.integrantes.user1.ocup"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user1.found"
                  required
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Ocupación
                  </option>
                  <option value="Est">
                    Estudiante
                  </option>
                  <option value="Adm">
                    Administrativo
                  </option>
                </select>
              </div>

              <div class="form-group col-3">
                <label class="label">Facultad</label>
                <select
                  v-model="cub.integrantes.user1.fac"
                  class="custom-select"
                  
                  :disabled="cub.integrantes.user1.found || cub.integrantes.user1.ocup == 'Adm'"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su facultad
                  </option>
                  <option value="CS">
                    Ciencias de la Salud
                  </option>
                  <option value="HGT">
                    Hotelería, Gastronomía y Turismo
                  </option>
                  <option value="IAD">
                    Ingeniería, Arquitectura y Diseño
                  </option>
                  <option value="CAMP">
                    Ciencias Administrativas, Marítima y Portuaria
                  </option>
                  <option value="DCP">
                    Derecho y Ciencias Políticas
                  </option>
                </select>
              </div>
              <div class="form-group col-1">
                <label>Eliminar</label>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="delUserData(2)"
                >
                  X
                </button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-2">
                <input
                  v-model="cub.integrantes.user2.ced"
                  class="form-control"
                  placeholder="Estudiante 3"
                  :disabled="cub.integrantes.user2.found"
                  @blur="getUserData(3)"
                >
              </div>
              <div class="form-group col-3">
                <input
                  v-model="cub.integrantes.user2.name"
                  class="form-control"
                  :disabled="cub.integrantes.user2.found"
                >
              </div>
              <div class="form-group col-1">
                <select
                  id="sex"
                  v-model="cub.integrantes.user2.sex"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user2.found"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Sexo
                  </option>
                  <option value="M">
                    M
                  </option>
                  <option value="F">
                    F
                  </option>
                </select>
              </div>

              <div class="form-group col-2">
                <select
                  id="ocup"
                  v-model="cub.integrantes.user2.ocup"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user2.found"
                  required
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Ocupación
                  </option>
                  <option value="Est">
                    Estudiante
                  </option>
                  <option value="Adm">
                    Administrativo
                  </option>
                </select>
              </div>

              <div class="form-group col-3">
                <select
                  v-model="cub.integrantes.user2.fac"
                  class="custom-select"
                  
                  :disabled="cub.integrantes.user2.found || cub.integrantes.user2.ocup == 'Adm'"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su facultad
                  </option>
                  <option value="CS">
                    Ciencias de la Salud
                  </option>
                  <option value="HGT">
                    Hotelería, Gastronomía y Turismo
                  </option>
                  <option value="IAD">
                    Ingeniería, Arquitectura y Diseño
                  </option>
                  <option value="CAMP">
                    Ciencias Administrativas, Marítima y Portuaria
                  </option>
                  <option value="DCP">
                    Derecho y Ciencias Políticas
                  </option>
                </select>
              </div>
              <div class="form-group col-1">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="delUserData(3)"
                >
                  X
                </button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-2">
                <input
                  v-model="cub.integrantes.user3.ced"
                  class="form-control"
                  placeholder="Estudiante 4"
                  :disabled="cub.integrantes.user3.found"
                  @blur="getUserData(4)"
                >
              </div>
              <div class="form-group col-3">
                <input
                  v-model="cub.integrantes.user3.name"
                  class="form-control"
                  :disabled="cub.integrantes.user3.found"
                >
              </div>
              <div class="form-group col-1">
                <select
                  id="sex"
                  v-model="cub.integrantes.user3.sex"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user3.found"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Sexo
                  </option>
                  <option value="M">
                    M
                  </option>
                  <option value="F">
                    F
                  </option>
                </select>
              </div>

              <div class="form-group col-2">
                <select
                  id="ocup"
                  v-model="cub.integrantes.user3.ocup"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user3.found"
                  required
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Ocupación
                  </option>
                  <option value="Est">
                    Estudiante
                  </option>
                  <option value="Adm">
                    Administrativo
                  </option>
                </select>
              </div>

              <div class="form-group col-3">
                <select
                  v-model="cub.integrantes.user3.fac"
                  class="custom-select"
                  
                  :disabled="cub.integrantes.user3.found || cub.integrantes.user3.ocup == 'Adm'"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su facultad
                  </option>
                  <option value="CS">
                    Ciencias de la Salud
                  </option>
                  <option value="HGT">
                    Hotelería, Gastronomía y Turismo
                  </option>
                  <option value="IAD">
                    Ingeniería, Arquitectura y Diseño
                  </option>
                  <option value="CAMP">
                    Ciencias Administrativas, Marítima y Portuaria
                  </option>
                  <option value="DCP">
                    Derecho y Ciencias Políticas
                  </option>
                </select>
              </div>
              <div class="form-group col-1">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="delUserData(4)"
                >
                  X
                </button>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-2">
                <input
                  v-model="cub.integrantes.user4.ced"
                  class="form-control"
                  placeholder="Estudiante 5"
                  :disabled="cub.integrantes.user4.found"
                  @blur="getUserData(5)"
                >
              </div>
              <div class="form-group col-3">
                <input
                  v-model="cub.integrantes.user4.name"
                  class="form-control"
                  :disabled="cub.integrantes.user4.found"
                >
              </div>
              <div class="form-group col-1">
                <select
                  id="sex"
                  v-model="cub.integrantes.user4.sex"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user4.found"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Sexo
                  </option>
                  <option value="M">
                    M
                  </option>
                  <option value="F">
                    F
                  </option>
                </select>
              </div>

              <div class="form-group col-2">
                <select
                  id="ocup"
                  v-model="cub.integrantes.user4.ocup"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user4.found"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Ocupación
                  </option>
                  <option value="Est">
                    Estudiante
                  </option>
                  <option value="Adm">
                    Administrativo
                  </option>
                </select>
              </div>

              <div class="form-group col-3">
                <select
                  v-model="cub.integrantes.user4.fac"
                  class="custom-select"
                  
                  :disabled="cub.integrantes.user4.found || cub.integrantes.user4.ocup == 'Adm'"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su facultad
                  </option>
                  <option value="CS">
                    Ciencias de la Salud
                  </option>
                  <option value="HGT">
                    Hotelería, Gastronomía y Turismo
                  </option>
                  <option value="IAD">
                    Ingeniería, Arquitectura y Diseño
                  </option>
                  <option value="CAMP">
                    Ciencias Administrativas, Marítima y Portuaria
                  </option>
                  <option value="DCP">
                    Derecho y Ciencias Políticas
                  </option>
                </select>
              </div>
              <div class="form-group col-1">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="delUserData(5)"
                >
                  X
                </button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-2">
                <input
                  v-model="cub.integrantes.user5.ced"
                  class="form-control"
                  placeholder="Estudiante 6"
                  :disabled="cub.integrantes.user5.found"
                  @blur="getUserData(6)"
                >
              </div>
              <div class="form-group col-3">
                <input
                  v-model="cub.integrantes.user5.name"
                  class="form-control"
                  :disabled="cub.integrantes.user5.found"
                >
              </div>
              <div class="form-group col-1">
                <select
                  id="sex"
                  v-model="cub.integrantes.user5.sex"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user5.found"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Sexo
                  </option>
                  <option value="M">
                    M
                  </option>
                  <option value="F">
                    F
                  </option>
                </select>
              </div>

              <div class="form-group col-2">
                <select
                  id="ocup"
                  v-model="cub.integrantes.user5.ocup"
                  
                  class="custom-select"
                  :disabled="cub.integrantes.user5.found"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su Ocupación
                  </option>
                  <option value="Est">
                    Estudiante
                  </option>
                  <option value="Adm">
                    Administrativo
                  </option>
                </select>
              </div>

              <div class="form-group col-3">
                <select
                  v-model="cub.integrantes.user5.fac"
                  class="custom-select"
                  
                  :disabled="cub.integrantes.user5.found || cub.integrantes.user5.ocup == 'Adm'"
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Elija su facultad
                  </option>
                  <option value="CS">
                    Ciencias de la Salud
                  </option>
                  <option value="HGT">
                    Hotelería, Gastronomía y Turismo
                  </option>
                  <option value="IAD">
                    Ingeniería, Arquitectura y Diseño
                  </option>
                  <option value="CAMP">
                    Ciencias Administrativas, Marítima y Portuaria
                  </option>
                  <option value="DCP">
                    Derecho y Ciencias Políticas
                  </option>
                </select>
              </div>
              <div class="form-group col-1">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="delUserData(6)"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
        <step
          v-for="step in steps"
          :key="step.id"
          :currentstep="currentstep"
          :step="step"
          :stepcount="steps.length"
          :form="cub"
          @step-change="stepChanged"
        />
      </div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
import { cubRef, cublogRef, userRef, db } from "@/services/firebase";
import { onValue, query, set, ref } from "firebase/database";
import stepNavigationStepVue from "./FormCub/step-navigation-step.vue";
import stepNavigationVue from "./FormCub/step-navigation.vue";
import stepVue from "./FormCub/step.vue";
export default {
  name: "FormSolCub",
  components: {
    // eslint-disable-next-line
    "step-navigation-step": stepNavigationStepVue,
    "step-navigation": stepNavigationVue,
    step: stepVue
  },
  data() {
    return {
      currentstep: 1,
      steps: [
        {
          id: 1,
          title: "Encargado",
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
          sex: "",
          ocup: "",
          found: false
        },
        integrantes: {
          user1: {
            name: "",
            ced: "",
            fac: "",
            sex: "",
            ocup: "",
            found: false
          },
          user2: {
            name: "",
            ced: "",
            fac: "",
            sex: "",
            ocup: "",
            found: false
          },
          user3: {
            name: "",
            ced: "",
            fac: "",
            sex: "",
            ocup: "",
            found: false
          },
          user4: {
            name: "",
            ced: "",
            fac: "",
            sex: "",
            ocup: "",
            found: false
          },
          user5: {
            name: "",
            ced: "",
            fac: "",
            sex: "",
            ocup: "",
            found: false
          }
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
    this.getCub();
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
      this.cub.date_start = moment().format("dddd D/M/YY HH:mm:ss");
      this.cub.date_end = moment()
        .add(30, "m") //30 minutos de prestamo
        .format("dddd D/M/YY HH:mm:ss");
      this.cub.status = false;
      let form = Object.assign({}, this.cub);
      //Actualización de base de datos
      let NewCubRef = ref(db, 'cubiculos/' + form.id)
      let NewCubLogRef = ref(db, 'cublog/' + this.logid)
      set(NewCubRef ,  form );
      set(NewCubLogRef, form );
      let ID = String(this.cub.id);
      this.$router.push({ path: `/cub/solicitud/realizado/${ID}` });
    },
    getCub() {
      onValue(query(cubRef), res => {
        let data = res.val();
        this.listado = Object.values(data);
        let idcub = 1;
        if (this.listado.length > 0) {
          this.listado.forEach(cubs => {
            if (cubs.id == idcub && cubs.status == false) {
              if (idcub < 10) {
                idcub++;
              } else {
                alert("No hay cubículos disponibles.");
                this.$router.push("/cub/");
              }
            }
          });
        }
        this.cub.id = idcub;
        // eslint-disable-next-line
        console.log("ID: ", this.cub.id);
      }, {
        onlyOnce: true
      }),
        onValue(query(cublogRef), logdb => {
          let logdata = logdb.val();
          this.log = Object.values(logdata);
          if (this.log.length > 0) {
            // eslint-disable-next-line
            this.log.forEach(cublog => {
              this.logid++;
            });
          }
        }, {
          onlyOnce: true
        })
    },
    getUsers() {
      onValue(query(userRef), res => {
        let data = res.val();
        this.usuarios = Object.values(data);
      }, {
        onlyOnce: true
      })
    },
    getUserData(ID) {
      if (this.usuarios.length > 0) {
        let exist;
        this.usuarios.forEach(user => {
          if (
            this.cub.user.ced == user.ced &&
            this.cub.user.found == false &&
            ID == 1
          ) {
            exist = this.ExistingUser(ID);
            if (!exist) {
              this.cub.user.name = user.name;
              this.cub.user.fac = user.fac;
              this.cub.user.sex = user.sex;
              this.cub.user.ocup = user.ocup;
              this.cub.user.found = true;
            }
          } else if (
            this.cub.integrantes.user1.ced == user.ced &&
            this.cub.integrantes.user1.found == false &&
            ID == 2
          ) {
            exist = this.ExistingUser(ID);
            if (!exist) {
              this.cub.integrantes.user1.name = user.name;
              this.cub.integrantes.user1.fac = user.fac;
              this.cub.integrantes.user1.sex = user.sex;
              this.cub.integrantes.user1.ocup = user.ocup;
              this.cub.integrantes.user1.found = true;
            }
          } else if (
            this.cub.integrantes.user2.ced == user.ced &&
            this.cub.integrantes.user2.found == false &&
            ID == 3
          ) {
            exist = this.ExistingUser(ID);
            if (!exist) {
              this.cub.integrantes.user2.name = user.name;
              this.cub.integrantes.user2.fac = user.fac;
              this.cub.integrantes.user2.sex = user.sex;
              this.cub.integrantes.user2.ocup = user.ocup;
              this.cub.integrantes.user2.found = true;
            }
          } else if (
            this.cub.integrantes.user3.ced == user.ced &&
            this.cub.integrantes.user3.found == false &&
            ID == 4
          ) {
            exist = this.ExistingUser(ID);
            if (!exist) {
              this.cub.integrantes.user3.name = user.name;
              this.cub.integrantes.user3.fac = user.fac;
              this.cub.integrantes.user3.sex = user.sex;
              this.cub.integrantes.user3.ocup = user.ocup;
              this.cub.integrantes.user3.found = true;
            }
          } else if (
            this.cub.integrantes.user4.ced == user.ced &&
            this.cub.integrantes.user4.found == false &&
            ID == 5
          ) {
            exist = this.ExistingUser(ID);
            if (!exist) {
              this.cub.integrantes.user4.name = user.name;
              this.cub.integrantes.user4.fac = user.fac;
              this.cub.integrantes.user4.sex = user.sex;
              this.cub.integrantes.user4.ocup = user.ocup;
              this.cub.integrantes.user4.found = true;
            }
          } else if (
            this.cub.integrantes.user5.ced == user.ced &&
            this.cub.integrantes.user5.found == false &&
            ID == 6
          ) {
            exist = this.ExistingUser(ID);
            if (!exist) {
              this.cub.integrantes.user5.name = user.name;
              this.cub.integrantes.user5.fac = user.fac;
              this.cub.integrantes.user5.sex = user.sex;
              this.cub.integrantes.user5.ocup = user.ocup;
              this.cub.integrantes.user5.found = true;
            }
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
        this.cub.user.sex = "";
        this.cub.user.ocup = "";
        this.cub.user.found = false;
      } else if (ID == 2) {
        // eslint-disable-next-line
        console.log("Usuario encontrado");
        this.cub.integrantes.user1.ced = "";
        this.cub.integrantes.user1.name = "";
        this.cub.integrantes.user1.fac = "";
        this.cub.integrantes.user1.sex = "";
        this.cub.integrantes.user1.ocup = "";
        this.cub.integrantes.user1.found = false;
      } else if (ID == 3) {
        // eslint-disable-next-line
        console.log("Usuario encontrado");
        this.cub.integrantes.user2.ced = "";
        this.cub.integrantes.user2.name = "";
        this.cub.integrantes.user2.fac = "";
        this.cub.integrantes.user2.sex = "";
        this.cub.integrantes.user2.ocup = "";
        this.cub.integrantes.user2.found = false;
      } else if (ID == 4) {
        // eslint-disable-next-line
        console.log("Usuario encontrado");
        this.cub.integrantes.user3.ced = "";
        this.cub.integrantes.user3.name = "";
        this.cub.integrantes.user3.fac = "";
        this.cub.integrantes.user3.sex = "";
        this.cub.integrantes.user3.ocup = "";
        this.cub.integrantes.user3.found = false;
      } else if (ID == 5) {
        // eslint-disable-next-line
        console.log("Usuario encontrado");
        this.cub.integrantes.user4.ced = "";
        this.cub.integrantes.user4.name = "";
        this.cub.integrantes.user4.fac = "";
        this.cub.integrantes.user4.sex = "";
        this.cub.integrantes.user4.ocup = "";
        this.cub.integrantes.user4.found = false;
      } else if (ID == 6) {
        // eslint-disable-next-line
        console.log("Usuario encontrado");
        this.cub.integrantes.user5.ced = "";
        this.cub.integrantes.user5.name = "";
        this.cub.integrantes.user5.fac = "";
        this.cub.integrantes.user5.sex = "";
        this.cub.integrantes.user5.ocup = "";
        this.cub.integrantes.user5.found = false;
      } else {
        // eslint-disable-next-line
        console.log("Usuario NO encontrado");
      }
    },
    ExistingUser(ID) {
      let res = false;
      if (this.listado.length > 0) {
        this.listado.forEach(cubs => {
          for (let usersids in cubs.integrantes) {
            let users = cubs.integrantes[usersids];
            for (let ced in users) {
              if (ID == 1) {
                if (
                  cubs.user.ced == this.cub.user.ced &&
                  cubs.status == false
                ) {
                  this.cub.user.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                } else if (
                  users[ced] == this.cub.user.ced &&
                  cubs.status == false
                ) {
                  this.cub.user.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }
              } else if (ID == 2) {
                if (
                  cubs.user.ced == this.cub.integrantes.user1.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user1.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                } else if (
                  users[ced] == this.cub.integrantes.user1.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user1.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }
              } else if (ID == 3) {
                if (
                  cubs.user.ced == this.cub.integrantes.user2.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user2.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }

                if (
                  users[ced] == this.cub.integrantes.user2.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user2.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }
              } else if (ID == 4) {
                if (
                  cubs.user.ced == this.cub.integrantes.user3.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user3.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }

                if (
                  users[ced] == this.cub.integrantes.user3.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user3.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }
              } else if (ID == 5) {
                if (
                  cubs.user.ced == this.cub.integrantes.user4.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user4.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }

                if (
                  users[ced] == this.cub.integrantes.user4.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user4.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }
              } else if (ID == 6) {
                if (
                  cubs.user.ced == this.cub.integrantes.user5.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user5.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }

                if (
                  users[ced] == this.cub.integrantes.user5.ced &&
                  cubs.status == false
                ) {
                  this.cub.integrantes.user5.ced = "";
                  alert("El usuario ya esta en otro cubículo");
                  res = true;
                  return res;
                }
              } else {
                res = false;
              }
            }
          }
        });
      }
      return res;
    }
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
      top: calc($wizard-step-width-height / 2);
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
