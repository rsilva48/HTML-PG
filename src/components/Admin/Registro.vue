<template>
  <div>
    <AdminTitulo />
    <section id="main">
      <div class="container">
        <div class="row">
          <AdminMenu class="col-md-3" />
          <div class="login col-md-9">
            <form
              id="UserReg"
              class="form-signin border"
              @submit.prevent="addUser"
            >
              <div class="text-center mb-4">
                <img
                  class="mb-4"
                  src="@/assets/logocolor.png"
                  alt
                  width="76"
                  height="72"
                >
                <h1 class="h3 mb-3 font-weight-normal">
                  Registro de Usuario
                </h1>
                <p>Para facilitar los servicios de CRAI debe registrarse primero</p>
              </div>

              <div class="mb-3">
                <input
                  id="id"
                  v-model="user.ced"
                  type="text"
                  class="form-control"
                  placeholder="Numero de Cédula"
                  required
                  autofocus
                  @blur="exist"
                >
                <label for="id">Numero de Cédula</label>
              </div>

              <div class="mb-3">
                <input
                  id="name"
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  placeholder="Nombre Completo"
                  required
                >
                <label for="name">Nombre Completo</label>
              </div>

              <div class="mb-3">
                <select
                  id="sex"
                  v-model="user.sex"
                  type="text"
                  class="form-select"
                  required
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Eliga su Sexo
                  </option>
                  <option value="M">
                    Masculino
                  </option>
                  <option value="F">
                    Femenino
                  </option>
                </select>
                <label for="fac">Sexo</label>
              </div>

              <div class="mb-3">
                <select
                  id="ocup"
                  v-model="user.ocup"
                  type="text"
                  class="form-select"
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
                <label for="ocup">Ocupación</label>
              </div>
              <div class="mb-3">
                <select
                  id="fac"
                  v-model="user.fac"
                  type="text"
                  class="form-select"
                  required
                >
                  <option
                    selected
                    disabled
                    value
                  >
                    Eliga su facultad
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
                <label for="fac">Facultad</label>
              </div>
              <!--  v-if="user.ocup=='Adm'" -->
              <div class="mb-3">
                <input
                  id="email"
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  placeholder="Correo electronico"
                  required
                >
                <label for="id">Correo electronico</label>
              </div>
              <div class="mb-3">
                <input
                  id="password"
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="Ingrese Contraseña"
                  required
                >
                <label for="password">Contraseña</label>
              </div>

              <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                :disabled="validation"
                @click="addUser"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AdminTitulo from "@/components/Admin/Titulo.vue";
import AdminMenu from "@/components/Admin/Menu.vue";
import { userRef, db, auth } from "@/services/firebase";
import { onValue, query, set, ref } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "CRAIRegistro",
  components: {
    AdminMenu,
    AdminTitulo
  },
  data() {
    return {
      user: {
        name: "",
        ced: "",
        fac: "",
        sex: "",
        ocup: "",
        email: "",
        password: ""
      },
      usuarios: []
    };
  },
  computed: {
    validation() {
      if (this.user.name == "" ||
        this.user.ced == "" ||
        this.user.email == "" ||
        this.user.fac == "" ||
        this.user.sex == "" ||
        this.user.password == "") {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    exist() {
      this.usuarios.forEach(usuario => {
        if (this.user.ced == usuario.ced) {
          alert("El usuario ya existe.");
          this.user.ced = "";
        }
        if (this.user.email == usuario.email) {
          alert("Este correo ya esta registrado.");
          this.user.email = "";
        }
      });
    },
    addUser() {
      /*
      if (this.user.ocup == "Adm") {
        this.user.fac = "";
      } else if (this.user.ocup == "Est") {
        this.user.password = "";
      }*/
      let form = Object.assign({}, this.user);
      let NewUserRef = ref(db, 'users/' + this.user.ced)
      set(NewUserRef, form)
      createUserWithEmailAndPassword(auth, this.user.email, this.user.password).
        then((userCredential) => {
          // Signed up 
          const loggeduser = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      alert("Se ha registrado correctamente.");

      this.$router.push("/admin");
    },
    getUsers() {
      onValue(query(userRef), res => {
        let data = res.val();
        this.usuarios = Object.values(data);
      }, {
        onlyOnce: true
      })
    }
  }
};
</script>

<style>
.login {
  padding-top: 0%;
  padding-bottom: 0%;
}

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 45px;
  margin: auto;
  background-color: #f5f5f5;
}

.mb-3 {
  position: relative;
  margin-bottom: 1rem;
}

.mb-3>input,
.mb-3>select,
.mb-3>label {
  height: 3.125rem;
  padding: 0.75rem;
}

.mb-3>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.mb-3 input::-webkit-input-placeholder {
  color: transparent;
}

.mb-3 input:-ms-input-placeholder {
  color: transparent;
}

.mb-3 input::-ms-input-placeholder {
  color: transparent;
}

.mb-3 input::-moz-placeholder {
  color: transparent;
}

.mb-3 input::placeholder {
  color: transparent;
}

.mb-3 input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.mb-3 input:not(:placeholder-shown)~label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.mb-3 select::-webkit-input-placeholder {
  color: transparent;
}

.mb-3 select:-ms-input-placeholder {
  color: transparent;
}

.mb-3 select::-ms-input-placeholder {
  color: transparent;
}

.mb-3 select::-moz-placeholder {
  color: transparent;
}

.mb-3 select::placeholder {
  color: transparent;
}

.mb-3 select:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.mb-3 select:not(:placeholder-shown)~label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
