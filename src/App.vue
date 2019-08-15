<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import moment from "moment";
import { cubRef } from "./services/firebase";
import { setInterval } from "timers";
export default {
  name: "app",
  data() {
    return {
      listado: []
    };
  },
  created() {
    moment.locale('es')
    setInterval(() => {
      this.rutina();
    }, 10000);
  },
  methods: {
    rutina() {
      this.getCub();
    },
    moment() {
      return moment();
    },
    setForm(id) {
      this.listado[id - 1].status = true;
      let form = Object.assign({}, this.listado[id - 1]);
      cubRef.child(form.id).set(form);
    },
    getCub() {
      cubRef.once("value").then(res => {
        let data = res.val();
        this.listado = Object.values(data);
        this.listado.forEach(cub => {
          let end = moment(cub.date_end, "dddd D/M/YY HH:mm")
          let now = moment()
          let dif = end.diff(now, 'seconds')
        if (dif <= 0 && cub.status == false) {
          this.setForm(cub.id);
          return true;
        }
      });
      });
    }
  },
  components: {
    NavBar
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  -ms-flex-align: center;
  align-items: center;
}
.centertext {
  text-align: center;
}
</style>
