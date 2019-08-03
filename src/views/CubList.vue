<template>
  <div class="Cub">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Cubiculos</h1>
        <h3 v-else>Cubiculo #{{ $route.params.id }}</h3>
      </div>

      <div class="container">
        <div class="row">
            <div class="col-md-6">
              <input type="text" v-model="cub.id" placeholder="ID">
              <input type="checkbox" v-model="cub.status" placeholder="status">
              <input type="text" v-model="cub.user" placeholder="Usuario">
              <input type="time" v-model="cub.date_start" placeholder="Hora de entrada">
              <input type="time" v-model="cub.date_end"  placeholder="Hora de salidad">
              <button class="btn btn-primary" @click="setCub()"> Guardar</button>
            </div>
            <div class="col-md-6">
            <ul v-if="listado">
              <li  v-for="(item, ind) in listado" :key="ind">
                <!-- id: {{ item.user }}  -->
                {{ item }}
                <!-- nombre: {{ item.name }} -->
              </li>
            </ul>
            </div >
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { cubRef } from '../services/firebase'

export default {
  name: "Lista de Cubiculos",
  created (){
    this.getCub()
  },
  data (){
    return {
      listado: [],
      cub: {
        id: '',
        status: false,
        user: '',
        integrante: [],
        date_start: '',
        date_end: ''
      }
    }
  },
  methods: {
    getCub() {
      cubRef.once('value')
      .then( res => {
        this.listado = res.val()
        console.log('resultado: ', res.val())
      })
      .catch( error => {
        console.log("Error: ", error)
      })
    },
    setCub() {
      console.log("Guardando...", this.cub )
      // cubRef.push(this.cub)
      cubRef.child(this.cub.id).set(this.cub)
    }
  }
};
</script>