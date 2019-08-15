<template>
  <div class="Cub">
      <div class="container"><hr><hr>
        <h2 v-if="$route.params.id == 'all'">Lista de Cubiculos</h2>
        <h3 v-else>Cubiculo #{{ $route.params.id }}</h3>
      </div><!--Disponibilidad -->
 <div class="container">
  <div class="row">
    <div class="col-md-6"><p><h3 style="color:green">VERDE</h3>si esta disponible el cubiculo</div><hr>
    <div class="col-md-6">  <h3 style="color:red">ROJO</h3> rojo con uno que no esta disponible.</div>
  </div>
</div>
<div class="container">
  <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-2"><br>
          <li class="list-group-item list-group-item-success" v-if="listado[0].status">Cub. 01</li>
          <li class="list-group-item list-group-item-general" v-if="listado[0].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[0].status">Cub. 01</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[0].status">{{ horas[0] }}</li>
				</div>
				<div class="col-md-2"><br>
          <li class="list-group-item list-group-item-success" v-if="listado[1].status">Cub. 02</li>
          <li class="list-group-item list-group-item-general" v-if="listado[1].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[1].status">Cub. 02</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[1].status">{{ horas[1] }}</li>
				</div>
				<div class="col-md-2"><br>
          <li class="list-group-item list-group-item-success" v-if="listado[2].status">Cub. 03</li>
          <li class="list-group-item list-group-item-general" v-if="listado[2].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[2].status">Cub. 03</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[2].status">{{ horas[2] }}</li>
				</div>
				<div class="col-md-2"><br>
          <li class="list-group-item list-group-item-success" v-if="listado[3].status">Cub. 04</li>
          <li class="list-group-item list-group-item-general" v-if="listado[3].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[3].status">Cub. 04</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[3].status">{{ horas[3] }}</li>
				</div>
				<div class="col-md-2"><br>
          <li class="list-group-item list-group-item-success" v-if="listado[4].status">Cub. 05</li>
          <li class="list-group-item list-group-item-general" v-if="listado[4].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[4].status">Cub. 05</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[4].status">{{ horas[4] }}</li>
				</div>
				<div class="col-md-2"><br>
          <li class="list-group-item list-group-item-success" v-if="listado[5].status">Cub. 06</li>
          <li class="list-group-item list-group-item-general" v-if="listado[5].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[5].status">Cub. 06</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[5].status">{{ horas[5] }}</li>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2">
          <li class="list-group-item list-group-item-success" v-if="listado[6].status">Cub. 07</li>
          <li class="list-group-item list-group-item-general" v-if="listado[6].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[6].status">Cub. 07</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[6].status">{{ horas[6] }}</li>
				</div>
				<div class="col-md-2">
          <li class="list-group-item list-group-item-success" v-if="listado[7].status">Cub. 08</li>
          <li class="list-group-item list-group-item-general" v-if="listado[7].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[7].status">Cub. 08</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[7].status">{{ horas[7] }}</li>
				</div>
				<div class="col-md-2">
          <li class="list-group-item list-group-item-success" v-if="listado[8].status">Cub. 09</li>
          <li class="list-group-item list-group-item-general" v-if="listado[8].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[8].status">Cub. 09</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[8].status">{{ horas[8] }}</li>
				</div>
				<div class="col-md-2">
          <li class="list-group-item list-group-item-success" v-if="listado[9].status">Cub. 10</li>
          <li class="list-group-item list-group-item-general" v-if="listado[9].status">Disponible</li>
          <li class="list-group-item list-group-item-danger" v-if="!listado[9].status">Cub. 10</li>
          <li class="list-group-item list-group-item-general" v-if="!listado[9].status">{{ horas[9] }}</li>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
<div class="footer">
  <p>UIP CRAI</p>
</div>
</div>
   
    <!--DIV principal-->
</template>

<script>
import moment from "moment";
import { cubRef } from "../services/firebase";
import { setInterval } from "timers";
export default {
  name: "CubList",
  data() {
    return {
      listado: [],
      horas: []
    };
  },
  created() {
    setInterval(() => {
      this.rutina();
    }, 1000);
  },
  methods: {
    rutina() {
      this.getCub();
    },
    moment() {
      return moment();
    },
    getCub() {
      cubRef.once("value").then(res => {
        let data = res.val();
        this.listado = Object.values(data);
        this.date2hour()
      })
      .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
    },
    date2hour() {
      this.listado.forEach(cubs => {
        var remaintime = moment().to(moment(cubs.date_end, "dddd D/M/YY HH:mm"))
        //var remaintime = moment(cubs.date_end, "dddd D/M/YY HH:mm").fromNow()
        this.horas[cubs.id-1]=remaintime
      })
    }
  },
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #0da1db;
  color: white;
  text-align: center;
}
</style>

