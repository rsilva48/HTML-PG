<template>
  <div class="login">
    <form class="form-signin" v-on:submit.prevent="addUser" id="UserReg">
      <div class="text-center mb-4">
        <img class="mb-4" src="../assets/uipa.png" alt width="76" height="72" />
        <h1 class="h3 mb-3 font-weight-normal">Iniciar secion administracion </h1>
        <p>Para facilitar  la comodidad  de los servicios de UIP CRAI debe iniciar secion </p>
      </div>

      <div class="form-label-group">
        <input
          type="text"
          id="id"
          class="form-control"
          placeholder="Numero de Cédula"
          required
          autofocus
          v-model="user.ced"
          @blur="exist"
        />
        <label for="id">Numero de Cédula</label>
      </div>

      <div class="form-label-group">
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="Nombre Completo"
          required
          v-model="user.name"
        />
        <label for="name">Nombre o usuario</label>
      </div>

     
      <router-link to="/admin/view" role="button" class="btn btn-lg btn-primary btn-block" href data-toggle="collapse" data-target=".navbar-collapse.show">Iniciar sesion</router-link>
    </form>



    
  </div>
</template>
<script>
 /*<button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
        :disabled="validation"
        @click="addUser"
      >Registrarse</button>*/
import { userRef } from "../services/firebase";
export default {
  name: "Administrador",
  data() {
    return {
      user: {
        name: "",
        ced: "",
        fac: ""
      },
      usuarios: []
    };
  },
  computed: {
    validation() {
      if (this.user.name == "" || this.user.ced == "" || this.user.fac == "") {
        return true;
      } else {
        return false;
      }
    },
    
  },
  created() {
    this.getUsers();
  },
  methods: {
    exist() {
      this.usuarios.forEach(usuario => {
        if (this.user.ced == usuario.ced) {
          alert("El usuario ya existe.")
          this.user.ced = ""
        }
      });
    },
    addUser() {
      let form = Object.assign({}, this.user);
      userRef.child(this.user.ced).set(form);
      alert("Se ha registrado correctamente.")
      this.$router.push("/");
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
    }
  }
};
</script>

<style>
.login {
  padding-top: 5%;
  padding-bottom: 5%;
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

.form-label-group > input,
.form-label-group > select,
.form-label-group > label {
  height: 3.125rem;
  padding: 0.75rem;
}

.form-label-group > label {
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

.form-label-group input:not(:placeholder-shown) ~ label {
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

.form-label-group select:not(:placeholder-shown) ~ label {
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