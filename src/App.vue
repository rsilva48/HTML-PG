<template>
  <div id="app">
    <NavBar/>
    <router-view @cubform='pushcubform2db' :formsCub='ldb' />
  </div>
</template>

<script>
import firebase from 'firebase'
import NavBar from "./components/NavBar.vue"

let firebaseConfig = {
    apiKey: "AIzaSyAm54CIBwZYxCsuWEqhKvaihzQ2NFBjxsI",
    authDomain: "uip-crai.firebaseapp.com",
    databaseURL: "https://uip-crai.firebaseio.com",
    projectId: "uip-crai",
    storageBucket: "",
    messagingSenderId: "1020263688707",
    appId: "1:1020263688707:web:1b93a514cd410dee"
};

let fb = firebase.initializeApp(firebaseConfig);
let db = fb.database();
let CubDBRef = db.ref('/cubiculos');



export default {
  name: 'app',
  firebase: {
    formscubs: CubDBRef
  },
  data() {
    return {
      ldb: []
    };
  },
  methods:{
    pushcubform2db(form){
      this.ldb.push(form)
      CubDBRef.push(form)
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
