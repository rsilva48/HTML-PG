<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import moment from "moment";
import { cubRef } from "./services/firebase";
import NavBar from "./components/NavBar.vue"
import { setInterval } from 'timers';
export default {
  name: 'app',
  data() {
    return {
      listado: []
    };
  },
  created() {
    this.getCub();
  },
  computed: {
    CubDate() {
      for (let cub in this.listado) {
        if (cub.date_end === moment().format("dddd D/M/YY HH:mm")){
          // eslint-disable-next-line
          console.log("Cub Date End: ", cub.date_end)
          // eslint-disable-next-line
          console.log("Actual Date: ",  moment().format("dddd D/M/YY HH:mm"))
          cub.status = true
          this.addForm();
          return true
        }
      }
      return false 
    }
  },
  methods: {
    moment() {
      return moment();
    },
    getCub() {
      cubRef
        .once("value")
        .then(res => {
          let data = res.val();
          this.listado = Object.values(data);

        })
        .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
    },
    addForm() {
      // eslint-disable-next-line
      console.log("Actualizando FB")
      let form = Object.assign({}, this.cub);
      cubRef.child(form.id).set(form);
      this.getCub()
    },
  },
  components:{
    NavBar
  }
}
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
