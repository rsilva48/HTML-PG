<template>
  <div class="PC">
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
              <div class="col-md-2"  v-if="listado[0]">
                <li class="list-group-item list-group-item-success" v-if="listado[0].status">PC 01</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[0].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[0].status">PC 01</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[0].status"
                >{{ horas[0] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[1]">
                <li class="list-group-item list-group-item-success" v-if="listado[1].status">PC 02</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[1].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[1].status">PC 02</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[1].status"
                >{{ horas[1] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[2]">
                <li class="list-group-item list-group-item-success" v-if="listado[2].status">PC 03</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[2].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[2].status">PC 03</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[2].status"
                >{{ horas[2] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[3]">
                <li class="list-group-item list-group-item-success" v-if="listado[3].status">PC 04</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[3].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[3].status">PC 04</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[3].status"
                >{{ horas[3] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[4]">
                <li class="list-group-item list-group-item-success" v-if="listado[4].status">PC 05</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[4].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[4].status">PC 05</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[4].status"
                >{{ horas[4] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[5]">
                <li class="list-group-item list-group-item-success" v-if="listado[5].status">PC 06</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[5].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[5].status">PC 06</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[5].status"
                >{{ horas[5] }}</li>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-2"  v-if="listado[6]">
                <li class="list-group-item list-group-item-success" v-if="listado[6].status">PC 07</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[6].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[6].status">PC 07</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[6].status"
                >{{ horas[6] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[7]">
                <li class="list-group-item list-group-item-success" v-if="listado[7].status">PC 08</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[7].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[7].status">PC 08</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[7].status"
                >{{ horas[7] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[8]">
                <li class="list-group-item list-group-item-success" v-if="listado[8].status">PC 09</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[8].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[8].status">PC 09</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[8].status"
                >{{ horas[8] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[9]">
                <li class="list-group-item list-group-item-success" v-if="listado[9].status">PC 10</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[9].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[9].status">PC 10</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[9].status"
                >{{ horas[9] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[10]">
                <li class="list-group-item list-group-item-success" v-if="listado[10].status">PC 11</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[10].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[10].status">PC 11</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[10].status"
                >{{ horas[10] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[11]">
                <li class="list-group-item list-group-item-success" v-if="listado[11].status">PC 12</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[11].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[11].status">PC 12</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[11].status"
                >{{ horas[11] }}</li>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-2"  v-if="listado[12]">
                <li class="list-group-item list-group-item-success" v-if="listado[12].status">PC 13</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[12].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[12].status">PC 13</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[12].status"
                >{{ horas[12] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[13]">
                <li class="list-group-item list-group-item-success" v-if="listado[13].status">PC 14</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[13].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[13].status">PC 14</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[13].status"
                >{{ horas[13] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[14]">
                <li class="list-group-item list-group-item-success" v-if="listado[14].status">PC 15</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[14].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[14].status">PC 15</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[14].status"
                >{{ horas[14] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[15]">
                <li class="list-group-item list-group-item-success" v-if="listado[15].status">PC 16</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[15].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[15].status">PC 16</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[15].status"
                >{{ horas[15] }}</li>
              </div>

              <div class="col-md-2"  v-if="listado[16]">
                <li class="list-group-item list-group-item-success" v-if="listado[16].status">PC 17</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[16].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[16].status">PC 17</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[16].status"
                >{{ horas[16] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[17]">
                <li class="list-group-item list-group-item-success" v-if="listado[17].status">PC 18</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[17].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[17].status">PC 18</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[17].status"
                >{{ horas[17] }}</li>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-2"  v-if="listado[18]">
                <li class="list-group-item list-group-item-success" v-if="listado[18].status">PC 19</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[18].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[18].status">PC 19</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[18].status"
                >{{ horas[18] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[19]">
                <li class="list-group-item list-group-item-success" v-if="listado[19].status">PC 20</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[19].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[19].status">PC 20</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[19].status"
                >{{ horas[19] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[20]">
                <li class="list-group-item list-group-item-success" v-if="listado[20].status">PC 21</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[20].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[20].status">PC 21</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[20].status"
                >{{ horas[20] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[21]">
                <li class="list-group-item list-group-item-success" v-if="listado[21].status">PC 22</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[21].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[21].status">PC 22</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[21].status"
                >{{ horas[21] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[22]">
                <li class="list-group-item list-group-item-success" v-if="listado[22].status">PC 23</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[22].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[22].status">PC 23</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[22].status"
                >{{ horas[22] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[23]">
                <li class="list-group-item list-group-item-success" v-if="listado[23].status">PC 24</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[23].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[23].status">PC 24</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[23].status"
                >{{ horas[23] }}</li>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-2"  v-if="listado[24]">
                <li class="list-group-item list-group-item-success" v-if="listado[24].status">PC 25</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[24].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[24].status">PC 25</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[24].status"
                >{{ horas[24] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[25]">
                <li class="list-group-item list-group-item-success" v-if="listado[25].status">PC 26</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[25].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[25].status">PC 26</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[25].status"
                >{{ horas[25] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[26]">
                <li class="list-group-item list-group-item-success" v-if="listado[26].status">PC 27</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[26].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[26].status">PC 27</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[26].status"
                >{{ horas[26] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[27]">
                <li class="list-group-item list-group-item-success" v-if="listado[27].status">PC 28</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[27].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[27].status">PC 28</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[27].status"
                >{{ horas[27] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[28]">
                <li class="list-group-item list-group-item-success" v-if="listado[28].status">PC 29</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[28].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[28].status">PC 29</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[28].status"
                >{{ horas[28] }}</li>
              </div>
              <div class="col-md-2"  v-if="listado[29]">
                <li class="list-group-item list-group-item-success" v-if="listado[29].status">PC 30</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="listado[29].status"
                >Disponible</li>
                <li class="list-group-item list-group-item-danger" v-if="!listado[29].status">PC 30</li>
                <li
                  class="list-group-item list-group-item-general"
                  v-if="!listado[29].status"
                >{{ horas[29] }}</li>
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
import { setInterval } from "timers";
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
      PCsRef.once("value")
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
