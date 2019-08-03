<template>
  <div id="app">
    <NavBar/>
    <router-view @cubform='pushcubform2db' :formsCub='ldb' />
  </div>
</template>

<script>
import { db } from './services/firebase'
import NavBar from "./components/NavBar.vue"

let CubDBRef = db.ref('/cubiculos');

export default {
  name: 'app',
  data() {
    return {
      ldb: []
    };
  },
  methods:{
    pushcubform2db(form){
      this.ldb.push(form)
      CubDBRef.push(form)
      .then( res => {
        console.log(" Se guardo con exito! ")
      })
      .catch( error => {
        console.log(" Error al guarda información ")
      })
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
