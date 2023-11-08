<template>
  <div class="Cub">
    <div class="text-center" v-if="loading">
      <div class="spinner-border text-primary m-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="container" v-if="!loading">
      <div class="row">
        <div class="col-md-6">
          <h3 style="color:green">VERDE</h3>Si esta disponible
        </div>
        <hr />
        <div class="col-md-6">
          <h3 style="color:red">ROJO</h3>Cuando no esta disponible.
        </div>
      </div>
      <br />
    </div>
    <div class="container" v-if="!loading">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-2" v-if="listado[0]">
                <li class="list-group-item list-group-item-success" v-if="listado[0].status">Cubículo 01</li>
                <li class="list-group-item list-group-item-general" v-if="listado[0].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[0].status">Cubículo 01</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[0].status">{{ horas[0] }}</li>
              </div>
              <div class="col-md-2" v-if="listado[1]">
                <li class="list-group-item list-group-item-success" v-if="listado[1].status">Cubículo 02</li>
                <li class="list-group-item list-group-item-general" v-if="listado[1].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[1].status">Cubículo 02</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[1].status">{{ horas[1] }}</li>
              </div>
              <div class="col-md-2" v-if="listado[2]">
                <li class="list-group-item list-group-item-success" v-if="listado[2].status">Cubículo 03</li>
                <li class="list-group-item list-group-item-general" v-if="listado[2].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[2].status">Cubículo 03</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[2].status">{{ horas[2] }}</li>
              </div>
              <div class="col-md-2" v-if="listado[3]">
                <li class="list-group-item list-group-item-success" v-if="listado[3].status">Cubículo 04</li>
                <li class="list-group-item list-group-item-general" v-if="listado[3].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[3].status">Cubículo 04</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[3].status">{{ horas[3] }}</li>
              </div>
              <div class="col-md-2" v-if="listado[4]">
                <li class="list-group-item list-group-item-success" v-if="listado[4].status">Cubículo 05</li>
                <li class="list-group-item list-group-item-general" v-if="listado[4].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[4].status">Cubículo 05</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[4].status">{{ horas[4] }}</li>
              </div>
              <div class="col-md-2" v-if="listado[5]">
                <li class="list-group-item list-group-item-success" v-if="listado[5].status">Cubículo 06</li>
                <li class="list-group-item list-group-item-general" v-if="listado[5].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[5].status">Cubículo 06</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[5].status">{{ horas[5] }}</li>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-2" v-if="listado[6]">
                <li class="list-group-item list-group-item-success" v-if="listado[6].status">Cubículo 07</li>
                <li class="list-group-item list-group-item-general" v-if="listado[6].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[6].status">Cubículo 07</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[6].status">{{ horas[6] }}</li>
              </div>
              <div class="col-md-2" v-if="listado[7]">
                <li class="list-group-item list-group-item-success" v-if="listado[7].status">Cubículo 08</li>
                <li class="list-group-item list-group-item-general" v-if="listado[7].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[7].status">Cubículo 08</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[7].status">{{ horas[7] }}</li>
              </div>
              <div class="col-md-2" v-if="listado[8]">
                <li class="list-group-item list-group-item-success" v-if="listado[8].status">Cubículo 09</li>
                <li class="list-group-item list-group-item-general" v-if="listado[8].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[8].status">Cubículo 09</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[8].status">{{ horas[8] }}</li>
              </div>
              <div class="col-md-2" v-if="listado[9]">
                <li class="list-group-item list-group-item-success" v-if="listado[9].status">Cubículo 10</li>
                <li class="list-group-item list-group-item-general" v-if="listado[9].status">Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[9].status">Cubículo 10</li>
                <li class="list-group-item list-group-item-general" v-if="!listado[9].status">{{ horas[9] }}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { cubRef } from "../../services/firebase";
import { setInterval } from 'timers-browserify';
import { onValue, query } from "firebase/database";
export default {
  name: "CubListUser",
  data() {
    return {
      loading: true,
      listado: [],
      horas: []
    };
  },
  created() {
    this.loading = true;
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
      onValue(query(cubRef), res => {
        let data = res.val();
        this.listado = Object.values(data);
        this.date2hour();
      }, {
        onlyOnce: true
      })
    },
    date2hour() {
      this.listado.forEach(cubs => {
        var remaintime = moment().to(
          moment(cubs.date_end, "dddd D/M/YY HH:mm:ss")
        );
        // var remaintime = moment(cubs.date_end, "dddd D/M/YY HH:mm:ss").fromNow()
        this.horas[cubs.id - 1] = remaintime;
      });
      this.loading = false;
    }
  }
};
</script>
