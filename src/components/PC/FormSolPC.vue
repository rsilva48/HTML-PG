<template>
  <div class="FormSolPC">
    <form
      id="FormSolPC"
      @submit.prevent="addForm"
    >
      <div class="container">
        <div v-show="currentstep == 1">
          <h3>Información del Arrendador</h3>
          <div class="form-group">
            <label for="id">Cédula</label>
            <input
              v-model="pc.user.ced"
              type="id"
              name="cedula"
              class="form-control"
              placeholder="Ingrese su numero de cédula con guiones"
              :disabled="pc.user.found"
              @blur="getUserData(1)"
            >
          </div>

          <div class="form-group">
            <label for="name">Nombre Completo</label>
            <input
              v-model="pc.user.name"
              type="name"
              name="name"
              class="form-control"
              aria-describedby="nameHelp"
              placeholder="Ingrese su nombre completo"
              :disabled="pc.user.found"
            >
          </div>

          <div class="form-group">
            <label class="label">Sexo</label>
            <select
              id="sex"
              v-model="pc.user.sex"
              
              class="custom-select"
              placeholder="Elegir Sexo"
              :disabled="pc.user.found"
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
              v-model="pc.user.ocup"
              
              class="custom-select"
              :disabled="pc.user.found"
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
            v-if="pc.user.ocup == 'Est'"
            class="form-group"
          >
            <label class="label">Facultad</label>
            <select
              v-model="pc.user.fac"
              class="custom-select"
              
              :disabled="pc.user.found"
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
              v-model.number="pc.check"
              type="checkbox"
              name="terminos"
              class="center"
            > Acepto y estoy de acuerdo
            con todas las condiciones de uso y seguridad
          </div>
        </div>

        <div v-show="currentstep == 3" />
        <step
          v-for="step in steps"
          :key="step.id"
          :currentstep="currentstep"
          :step="step"
          :stepcount="2"
          :form="pc"
          @step-change="stepChanged"
        />
      </div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
import { PCsRef, PClogRef, userRef, db } from "@/services/firebase";
import { onValue, query, set, ref } from "firebase/database";
export default {
  name: "FormSolPC",
  components: {
    // eslint-disable-next-line
  },
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
      let NewPCRef = ref(db, 'pcs/' + form.id)
      let NewPCLogRef = ref(db, 'pcs/' + this.logid)
      set(NewPCRef, form)
      set(NewPCLogRef, form)
      let ID = String(this.pc.id);
      this.$router.push({ path: `/pc/solicitud/realizado/${ID}` });
    },
    getPCs() {
      onValue(query(PCsRef), res => {
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
      }, {
        onlyOnce: true
      }),
        onValue(query(PClogRef), logdb => {
          let logdata = logdb.val();
          this.log = Object.values(logdata);
          if (this.log.length > 0) {
            // eslint-disable-next-line
            this.log.forEach(pclog => {
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
  }
};
</script>