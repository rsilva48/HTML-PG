<template>
    <div class="Cub">
        <div v-if="loading" class="text-center">
            <div class="spinner-border text-primary m-5" role="status">
                <span class="sr-only">Cargando...</span>
            </div>
        </div>
        <div v-if="!loading" class="container px-4 py-3">
            <div class="row">
                <div class="col-6">
                    <h3 style="color: green">VERDE</h3>
                    Si esta disponible
                </div>
                <div class="col-6">
                    <h3 style="color: red">ROJO</h3>
                    No esta disponible
                </div>
            </div>
        </div>
        <div v-if="!loading" class="container">
            <div class="container-fluid">
                <div class="row list-group">
                    <div class="col-md-12">
                        <div class="row">
                            <div v-if="listado[0]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[0].status" class="list-group-item list-group-item-success">
                                    Cubículo 01
                                </li>
                                <li v-if="listado[0].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[0].status" class="list-group-item list-group-item-danger">
                                    Cubículo 01
                                </li>
                                <li v-if="!listado[0].status" class="list-group-item list-group-item-general">
                                    {{ horas[0] }}
                                </li>
                            </div>
                            <div v-if="listado[1]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[1].status" class="list-group-item list-group-item-success">
                                    Cubículo 02
                                </li>
                                <li v-if="listado[1].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[1].status" class="list-group-item list-group-item-danger">
                                    Cubículo 02
                                </li>
                                <li v-if="!listado[1].status" class="list-group-item list-group-item-general">
                                    {{ horas[1] }}
                                </li>
                            </div>
                            <div v-if="listado[2]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[2].status" class="list-group-item list-group-item-success">
                                    Cubículo 03
                                </li>
                                <li v-if="listado[2].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[2].status" class="list-group-item list-group-item-danger">
                                    Cubículo 03
                                </li>
                                <li v-if="!listado[2].status" class="list-group-item list-group-item-general">
                                    {{ horas[2] }}
                                </li>
                            </div>
                            <div v-if="listado[3]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[3].status" class="list-group-item list-group-item-success">
                                    Cubículo 04
                                </li>
                                <li v-if="listado[3].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[3].status" class="list-group-item list-group-item-danger">
                                    Cubículo 04
                                </li>
                                <li v-if="!listado[3].status" class="list-group-item list-group-item-general">
                                    {{ horas[3] }}
                                </li>
                            </div>
                            <div v-if="listado[4]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[4].status" class="list-group-item list-group-item-success">
                                    Cubículo 05
                                </li>
                                <li v-if="listado[4].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[4].status" class="list-group-item list-group-item-danger">
                                    Cubículo 05
                                </li>
                                <li v-if="!listado[4].status" class="list-group-item list-group-item-general">
                                    {{ horas[4] }}
                                </li>
                            </div>
                            <div v-if="listado[5]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[5].status" class="list-group-item list-group-item-success">
                                    Cubículo 06
                                </li>
                                <li v-if="listado[5].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[5].status" class="list-group-item list-group-item-danger">
                                    Cubículo 06
                                </li>
                                <li v-if="!listado[5].status" class="list-group-item list-group-item-general">
                                    {{ horas[5] }}
                                </li>
                            </div>
                            <div v-if="listado[6]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[6].status" class="list-group-item list-group-item-success">
                                    Cubículo 07
                                </li>
                                <li v-if="listado[6].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[6].status" class="list-group-item list-group-item-danger">
                                    Cubículo 07
                                </li>
                                <li v-if="!listado[6].status" class="list-group-item list-group-item-general">
                                    {{ horas[6] }}
                                </li>
                            </div>
                            <div v-if="listado[7]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[7].status" class="list-group-item list-group-item-success">
                                    Cubículo 08
                                </li>
                                <li v-if="listado[7].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[7].status" class="list-group-item list-group-item-danger">
                                    Cubículo 08
                                </li>
                                <li v-if="!listado[7].status" class="list-group-item list-group-item-general">
                                    {{ horas[7] }}
                                </li>
                            </div>
                            <div v-if="listado[8]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[8].status" class="list-group-item list-group-item-success">
                                    Cubículo 09
                                </li>
                                <li v-if="listado[8].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[8].status" class="list-group-item list-group-item-danger">
                                    Cubículo 09
                                </li>
                                <li v-if="!listado[8].status" class="list-group-item list-group-item-general">
                                    {{ horas[8] }}
                                </li>
                            </div>
                            <div v-if="listado[9]" class="col-md-3 col-lg-2 py-2">
                                <li v-if="listado[9].status" class="list-group-item list-group-item-success">
                                    Cubículo 10
                                </li>
                                <li v-if="listado[9].status" class="list-group-item list-group-item-general">
                                    Disponible
                                </li>
                                <li v-if="!listado[9].status" class="list-group-item list-group-item-danger">
                                    Cubículo 10
                                </li>
                                <li v-if="!listado[9].status" class="list-group-item list-group-item-general">
                                    {{ horas[9] }}
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
import moment from 'moment'
import { cubRef } from '../../services/firebase'
import { setInterval } from 'timers-browserify'
import { onValue, query } from 'firebase/database'
export default {
    name: 'CubListUser',
    data() {
        return {
            loading: true,
            listado: [],
            horas: [],
        }
    },
    created() {
        this.loading = true
        setInterval(() => {
            this.rutina()
        }, 1000)
    },
    methods: {
        rutina() {
            this.getCub()
        },
        moment() {
            return moment()
        },
        getCub() {
            onValue(
                query(cubRef),
                (res) => {
                    let data = res.val()
                    this.listado = Object.values(data)
                    this.date2hour()
                },
                {
                    onlyOnce: true,
                },
            )
        },
        date2hour() {
            this.listado.forEach((cubs) => {
                var remaintime = moment().to(moment(cubs.date_end, 'dddd D/M/YY HH:mm:ss'))
                // var remaintime = moment(cubs.date_end, "dddd D/M/YY HH:mm:ss").fromNow()
                this.horas[cubs.id - 1] = remaintime
            })
            this.loading = false
        },
    },
}
</script>
