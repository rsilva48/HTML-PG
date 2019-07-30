<template>
  <div id="app">
    <NavBar/>
    <router-view @cubform='pushcubform2db'/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  data() {
    return {
      db: []
    };
  },
  methods:{
    pushcubform2db(form){
      this.db.push(form)
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
