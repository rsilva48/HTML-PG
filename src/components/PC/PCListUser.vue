<template>
  <div class="PC">
    <div
      v-if="loading"
      class="text-center"
    >
      <div
        class="spinner-border text-primary m-5"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div
      v-if="!loading"
      class="container px-4 py-3"
    >
      <div class="row">
        <div class="col-6">
          <h3 style="color:green">
            VERDE
          </h3>Si esta disponible
        </div>
        <div class="col-6">
          <h3 style="color:red">
            ROJO
          </h3>No esta disponible
        </div>
      </div>
    </div>
    <div
      v-if="!loading"
      class="container"
    >
      <div class="container-fluid">
        <div class="row list-group">
          <div class="col-md-12">
            <div class="row">
              <div
                v-if="listado[0]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[0].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 01
                </li>
                <li
                  v-if="listado[0].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[0].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 01
                </li>
                <li
                  v-if="!listado[0].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[0] }}
                </li>
              </div>
              <div
                v-if="listado[1]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[1].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 02
                </li>
                <li
                  v-if="listado[1].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[1].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 02
                </li>
                <li
                  v-if="!listado[1].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[1] }}
                </li>
              </div>
              <div
                v-if="listado[2]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[2].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 03
                </li>
                <li
                  v-if="listado[2].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[2].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 03
                </li>
                <li
                  v-if="!listado[2].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[2] }}
                </li>
              </div>
              <div
                v-if="listado[3]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[3].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 04
                </li>
                <li
                  v-if="listado[3].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[3].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 04
                </li>
                <li
                  v-if="!listado[3].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[3] }}
                </li>
              </div>
              <div
                v-if="listado[4]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[4].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 05
                </li>
                <li
                  v-if="listado[4].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[4].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 05
                </li>
                <li
                  v-if="!listado[4].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[4] }}
                </li>
              </div>
              <div
                v-if="listado[5]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[5].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 06
                </li>
                <li
                  v-if="listado[5].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[5].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 06
                </li>
                <li
                  v-if="!listado[5].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[5] }}
                </li>
              </div>
              <div
                v-if="listado[6]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[6].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 07
                </li>
                <li
                  v-if="listado[6].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[6].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 07
                </li>
                <li
                  v-if="!listado[6].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[6] }}
                </li>
              </div>
              <div
                v-if="listado[7]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[7].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 08
                </li>
                <li
                  v-if="listado[7].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[7].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 08
                </li>
                <li
                  v-if="!listado[7].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[7] }}
                </li>
              </div>
              <div
                v-if="listado[8]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[8].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 09
                </li>
                <li
                  v-if="listado[8].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[8].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 09
                </li>
                <li
                  v-if="!listado[8].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[8] }}
                </li>
              </div>
              <div
                v-if="listado[9]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[9].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 10
                </li>
                <li
                  v-if="listado[9].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[9].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 10
                </li>
                <li
                  v-if="!listado[9].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[9] }}
                </li>
              </div>
              <div
                v-if="listado[10]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[10].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 11
                </li>
                <li
                  v-if="listado[10].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[10].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 11
                </li>
                <li
                  v-if="!listado[10].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[10] }}
                </li>
              </div>
              <div
                v-if="listado[11]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[11].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 12
                </li>
                <li
                  v-if="listado[11].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[11].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 12
                </li>
                <li
                  v-if="!listado[11].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[11] }}
                </li>
              </div>
              <div
                v-if="listado[12]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[12].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 13
                </li>
                <li
                  v-if="listado[12].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[12].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 13
                </li>
                <li
                  v-if="!listado[12].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[12] }}
                </li>
              </div>
              <div
                v-if="listado[13]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[13].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 14
                </li>
                <li
                  v-if="listado[13].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[13].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 14
                </li>
                <li
                  v-if="!listado[13].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[13] }}
                </li>
              </div>
              <div
                v-if="listado[14]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[14].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 15
                </li>
                <li
                  v-if="listado[14].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[14].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 15
                </li>
                <li
                  v-if="!listado[14].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[14] }}
                </li>
              </div>
              <div
                v-if="listado[15]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[15].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 16
                </li>
                <li
                  v-if="listado[15].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[15].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 16
                </li>
                <li
                  v-if="!listado[15].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[15] }}
                </li>
              </div>
              <div
                v-if="listado[16]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[16].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 17
                </li>
                <li
                  v-if="listado[16].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[16].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 17
                </li>
                <li
                  v-if="!listado[16].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[16] }}
                </li>
              </div>
              <div
                v-if="listado[17]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[17].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 18
                </li>
                <li
                  v-if="listado[17].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[17].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 18
                </li>
                <li
                  v-if="!listado[17].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[17] }}
                </li>
              </div>
              <div
                v-if="listado[18]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[18].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 19
                </li>
                <li
                  v-if="listado[18].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[18].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 19
                </li>
                <li
                  v-if="!listado[18].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[18] }}
                </li>
              </div>
              <div
                v-if="listado[19]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[19].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 20
                </li>
                <li
                  v-if="listado[19].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[19].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 20
                </li>
                <li
                  v-if="!listado[19].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[19] }}
                </li>
              </div>
              <div
                v-if="listado[20]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[20].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 21
                </li>
                <li
                  v-if="listado[20].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[20].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 21
                </li>
                <li
                  v-if="!listado[20].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[20] }}
                </li>
              </div>
              <div
                v-if="listado[21]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[21].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 22
                </li>
                <li
                  v-if="listado[21].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[21].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 22
                </li>
                <li
                  v-if="!listado[21].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[21] }}
                </li>
              </div>
              <div
                v-if="listado[22]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[22].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 23
                </li>
                <li
                  v-if="listado[22].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[22].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 23
                </li>
                <li
                  v-if="!listado[22].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[22] }}
                </li>
              </div>
              <div
                v-if="listado[23]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[23].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 24
                </li>
                <li
                  v-if="listado[23].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[23].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 24
                </li>
                <li
                  v-if="!listado[23].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[23] }}
                </li>
              </div>
              <div
                v-if="listado[24]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[24].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 25
                </li>
                <li
                  v-if="listado[24].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[24].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 25
                </li>
                <li
                  v-if="!listado[24].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[24] }}
                </li>
              </div>
              <div
                v-if="listado[25]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[25].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 26
                </li>
                <li
                  v-if="listado[25].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[25].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 26
                </li>
                <li
                  v-if="!listado[25].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[25] }}
                </li>
              </div>
              <div
                v-if="listado[26]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[26].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 27
                </li>
                <li
                  v-if="listado[26].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[26].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 27
                </li>
                <li
                  v-if="!listado[26].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[26] }}
                </li>
              </div>
              <div
                v-if="listado[27]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[27].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 28
                </li>
                <li
                  v-if="listado[27].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[27].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 28
                </li>
                <li
                  v-if="!listado[27].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[27] }}
                </li>
              </div>
              <div
                v-if="listado[28]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[28].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 29
                </li>
                <li
                  v-if="listado[28].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[28].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 29
                </li>
                <li
                  v-if="!listado[28].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[28] }}
                </li>
              </div>
              <div
                v-if="listado[29]"
                class="col-md-3 col-lg-2 py-2"
              >
                <li
                  v-if="listado[29].status"
                  class="list-group-item list-group-item-success"
                >
                  PC 30
                </li>
                <li
                  v-if="listado[29].status"
                  class="list-group-item list-group-item-general"
                >
                  Disponible
                </li>
                <li
                  v-if="!listado[29].status"
                  class="list-group-item list-group-item-danger"
                >
                  PC 30
                </li>
                <li
                  v-if="!listado[29].status"
                  class="list-group-item list-group-item-general"
                >
                  {{ horas[29] }}
                </li>
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
import { PCsRef } from "@/services/firebase";
import { setInterval } from 'timers-browserify';
import { onValue, query } from "firebase/database";
export default {
  name: "PCListUser",
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
      this.getPCs();
    },
    moment() {
      return moment();
    },
    getPCs() {
      onValue(query(PCsRef), res => {
        let data = res.val();
        this.listado = Object.values(data);
        this.date2hour();
      }, {
        onlyOnce: true
      })
    },
    date2hour() {
      this.listado.forEach(pcs => {
        var remaintime = moment().to(
          moment(pcs.date_end, "dddd D/M/YY HH:mm:ss")
        );
        // var remaintime = moment(cubs.date_end, "dddd D/M/YY HH:mm:ss").fromNow()
        this.horas[pcs.id - 1] = remaintime;
      });
      this.loading = false;
    }
  }
};
</script>
