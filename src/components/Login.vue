<template>
  <div class="login">
    <form
      class="form-signin"
      @submit.prevent="login"
    >
      <div class="text-center mb-4">
        <img
          class="mb-4"
          src="../assets/logocolor.png"
          alt
          width="76"
          height="72"
        >
        <h1 class="h3 mb-3 font-weight-normal">
          Inicio de Sesión para Administrador
        </h1>
        <p>Para usar los servicios administrativos de CRAI debe iniciar sesión primero</p>
      </div>

      <div class="form-label-group">
        <input
          id="inputEmail"
          v-model="user.ced"
          type="cedula"
          class="form-control"
          placeholder="Cédula"
          required
          autofocus
        >
        <label for="inputEmail">Numero de Cédula</label>
      </div>

      <div class="form-label-group">
        <input
          id="inputPassword"
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Contraseña"
          required
        >
        <label for="inputPassword">Contraseña</label>
      </div>
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
        :disabled="enablelogin"
      >
        Iniciar Sesión
      </button>
    </form>
  </div>
</template>

<script>
import { userRef, auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onValue, query } from "firebase/database";
export default {
  name: "CRAILogin",
  data() {
    return {
      user: {
        ced: "",
        password: ""
      },
      usuarios: []
    };
  },
  computed: {
    enablelogin() {
      if (this.user.ced == "" || this.user.password == "") {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
  },
  methods: {
    getUsers() {
      onValue(query(userRef), res => {
        let data = res.val();
        this.usuarios = Object.values(data);
      }, {
        onlyOnce: true
      })
    },
    login() {
      this.getUsers();
      let count = 1;
      if (this.usuarios.length > 0) {
        this.usuarios.forEach(user => {
          if (
            //Credenciales correctas - COUNT 0
            this.user.ced == user.ced &&
            this.user.password == user.password &&
            user.ocup == "Adm"
          ) {
            alert("Ha iniciado sesión como Admin.");
            signInWithEmailAndPassword(auth, this.user.email, this.user.password).
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
            this.$router.push({ path: `/admin` });
            count = 0;
            return;
          } else if (
            //Contraseña incorrecta - COUNT 3
            this.user.ced == user.ced &&
            this.user.password != user.password
          ) {
            count = 3;
            return;
          } else if (
            //Sin privilegios suficientes - COUNT 2
            this.user.ced == user.ced &&
            this.user.password == user.password &&
            user.ocup != "Adm"
          ) {
            alert("Ha accedido como estudiante.");
            console.log(user.email)
            signInWithEmailAndPassword(auth, user.email, this.user.password).
              then((userCredential) => {
                // Signed up 
                const loggeduser = userCredential.user;
                this.$router.push({ path: `/` });
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Error en las credenciales.");
                // ..
              });
            count = 2;
            return;
          } else if (count > 0) {
            //Credenciales Incorrectas - COUNT 0
            count = 1;
          }
        });
      }
      if (count == 1) {
        alert("Verifique sus datos e ingreselos nuevamente.");
        this.user.ced = "";
        this.user.password = "";
      } else if (count == 2) {

      } else if (count == 3) {
        alert("Ingrese su contraseña correctamente.");
        this.user.password = "";
      }
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

.form-label-group>input,
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
