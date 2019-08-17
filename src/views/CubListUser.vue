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
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[0].status">Cub. 01</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[0].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[0].status">Cub. 01</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[0].status"
                >{{ horas[0] }}</li>
              </div>
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[1].status">Cub. 02</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[1].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[1].status">Cub. 02</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[1].status"
                >{{ horas[1] }}</li>
              </div>
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[2].status">Cub. 03</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[2].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[2].status">Cub. 03</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[2].status"
                >{{ horas[2] }}</li>
              </div>
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[3].status">Cub. 04</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[3].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[3].status">Cub. 04</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[3].status"
                >{{ horas[3] }}</li>
              </div>
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[4].status">Cub. 05</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[4].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[4].status">Cub. 05</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[4].status"
                >{{ horas[4] }}</li>
              </div>
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[5].status">Cub. 06</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[5].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[5].status">Cub. 06</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[5].status"
                >{{ horas[5] }}</li>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[6].status">Cub. 07</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[6].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[6].status">Cub. 07</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[6].status"
                >{{ horas[6] }}</li>
              </div>
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[7].status">Cub. 08</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[7].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[7].status">Cub. 08</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[7].status"
                >{{ horas[7] }}</li>
              </div>
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[8].status">Cub. 09</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[8].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[8].status">Cub. 09</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[8].status"
                >{{ horas[8] }}</li>
              </div>
              <div class="col-md-2">
                <li class="list-group-item list-group-item-success" v-if="listado[9].status">Cub. 10</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[9].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[9].status">Cub. 10</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[9].status"
                >{{ horas[9] }}</li>
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
import { cubRef } from "../services/firebase";
import { setInterval } from "timers";
export default {
  name: "CubList",
  data() {
    return {
      loading: Boolean,
      listado: [],
      horas: []
    };
  },
  created() {
    this.loading = true
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
      cubRef
        .once("value")
        .then(res => {
          let data = res.val();
          this.listado = Object.values(data);
          this.date2hour();
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log("Error: ", error);
        });
    },
    date2hour() {
      this.listado.forEach(cubs => {
        var remaintime = moment().to(
          moment(cubs.date_end, "dddd D/M/YY HH:mm:ss")
        );
        //var remaintime = moment(cubs.date_end, "dddd D/M/YY HH:mm:ss").fromNow()
        this.horas[cubs.id - 1] = remaintime;
      });
      this.loading = false;
    }
  }
};
</script>