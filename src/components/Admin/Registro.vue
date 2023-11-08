<template>
  <div>
    <AdminTitulo />
    <section id="main">
      <div class="container">
        <div class="row">
          <AdminMenu class="col-md-3" />
          <div class="login col-md-9">
            <form class="form-signin" v-on:submit.prevent="addUser" id="UserReg">
              <div class="text-center mb-4">
                <img class="mb-4" src="@/assets/uipa.png" alt width="76" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Registro de Usuario</h1>
                <p>Para facilitar los servicios de UIP CRAI debe registrarse primero</p>
              </div>

              <div class="form-label-group">
                <input type="text" id="id" class="form-control" placeholder="Numero de Cédula" required autofocus
                  v-model="user.ced" @blur="exist" />
                <label for="id">Numero de Cédula</label>
              </div>

              <div class="form-label-group">
                <input type="text" id="name" class="form-control" placeholder="Nombre Completo" required
                  v-model="user.name" />
                <label for="name">Nombre Completo</label>
              </div>

              <div class="form-label-group">
                <select v-model="user.sex" type="text" id="sex" class="custom-select" required>
                  <option selected disabled value>Eliga su Sexo</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
                <label for="fac">Sexo</label>
              </div>

              <div class="form-label-group">
                <select v-model="user.ocup" type="text" id="ocup" class="custom-select" required>
                  <option selected disabled value>Elija su Ocupación</option>
                  <option value="Est">Estudiante</option>
                  <option value="Adm">Administrativo</option>
                </select>
                <label for="ocup">Ocupación</label>
              </div>
              <!--  v-if="user.ocup=='Est'" -->
              <div class="form-label-group">
                <select v-model="user.fac" v-if="user.ocup=='Est'" type="text" id="fac" class="custom-select" >
                  <option selected disabled value>Eliga su facultad</option>
                  <option value="CS">Ciencias de la Salud</option>
                  <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                  <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                  <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                  <option value="DCP">Derecho y Ciencias Políticas</option>
                </select>
                <label for="fac">Facultad</label>
              </div>
              <!--  v-if="user.ocup=='Adm'" -->
              <div class="form-label-group">
                <input type="password" id="password" class="form-control" placeholder="Ingrese Contraseña" required
                  v-model="user.password" />
                <label for="password">Contraseña</label>
              </div>

              <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="validation"
                @click="addUser">Registrarse</button>
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
import { userRef, db } from "@/services/firebase";
import { onValue, query, set, ref } from "firebase/database";
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
        password: ""
      },
      usuarios: []
    };
  },
  computed: {
    validation() {
      if (
        this.user.ocup == "Est" &&
        (this.user.name == "" ||
          this.user.ced == "" ||
          this.user.fac == "" ||
          this.user.sex == "")
      ) {
        return true;
      } else if (
        this.user.ocup == "Adm" &&
        (this.user.name == "" ||
          this.user.ced == "" ||
          this.user.password == "" ||
          this.user.sex == "")
      ) {
        return true;
      } else if (this.user.ocup == "") {
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
      });
    },
    addUser() {
      if (this.user.ocup == "Adm") {
        this.user.fac = "";
      } else if (this.user.ocup == "Est") {
        this.user.password = "";
      }
      let form = Object.assign({}, this.user);
      let NewUserRef = ref(db, 'users/' + this.user.ced)
      set(NewUserRef, form)
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

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>select,
.form-label-group>label {
  height: 3.125rem;
  padding: 0.75rem;
}

.form-label-group>label {
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

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group select::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group select:-ms-input-placeholder {
  color: transparent;
}

.form-label-group select::-ms-input-placeholder {
  color: transparent;
}

.form-label-group select::-moz-placeholder {
  color: transparent;
}

.form-label-group select::placeholder {
  color: transparent;
}

.form-label-group select:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group select:not(:placeholder-shown)~label {
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
