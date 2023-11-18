<template>
    <div class="FormSolPC">
        <FormWizard class="container p-3 p-md-5" @on-complete="addForm">
            <form id="FormSolPC" @submit.prevent="addForm">
                <div class="container p-3 p-md-5">
                    <TabContent title="Encargado" @next="validateStep1">
                        <div>
                            <h3 class="mb-2 mb-md-4">Información del Arrendador</h3>
                            <div class="mb-2 form-floating">
                                <input
                                    id="id"
                                    v-model="pc.user.ced"
                                    type="id"
                                    name="cedula"
                                    class="form-control"
                                    placeholder="Ingrese su numero de cédula con guiones"
                                    :disabled="pc.user.found"
                                    @blur="getUserData(1)"
                                />
                                <label for="id">Cédula</label>
                            </div>

                            <div class="mb-2 form-floating">
                                <input
                                    id="name"
                                    v-model="pc.user.name"
                                    type="name"
                                    name="name"
                                    class="form-control"
                                    aria-describedby="nameHelp"
                                    placeholder="Ingrese su nombre completo"
                                    :disabled="pc.user.found"
                                />
                                <label for="name">Nombre Completo</label>
                            </div>

                            <div class="mb-2 form-floating">
                                <select
                                    id="sex"
                                    v-model="pc.user.sex"
                                    class="form-select"
                                    placeholder="Elegir Sexo"
                                    :disabled="pc.user.found"
                                    required
                                >
                                    <option selected disabled value>Elija su Sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </select>
                                <label for="sex">Sexo</label>
                            </div>

                            <div class="mb-2 form-floating">
                                <select
                                    id="ocup"
                                    v-model="pc.user.ocup"
                                    class="form-select"
                                    :disabled="pc.user.found"
                                    required
                                >
                                    <option selected disabled value>Elija su Ocupación</option>
                                    <option value="Est">Estudiante</option>
                                    <option value="Adm">Administrativo</option>
                                </select>
                                <label for="ocup">Ocupación</label>
                            </div>

                            <div class="mb-2 form-floating">
                                <select id="fac" v-model="pc.user.fac" class="form-select" :disabled="pc.user.found">
                                    <option selected disabled value>Elija su facultad</option>
                                    <option value="CS">Ciencias de la Salud</option>
                                    <option value="HGT">Hotelería, Gastronomía y Turismo</option>
                                    <option value="IAD">Ingeniería, Arquitectura y Diseño</option>
                                    <option value="CAMP">Ciencias Administrativas, Marítima y Portuaria</option>
                                    <option value="DCP">Derecho y Ciencias Políticas</option>
                                </select>
                                <label for="fac">Facultad</label>
                            </div>

                            <div class="mb-2 form-floating d-grid gap-2 d-md-block">
                                <button type="button" class="btn btn-outline-danger" @click="delUserData(1)">
                                    Limpiar
                                </button>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent title="Condiciones" @next="validateStep2">
                        <div>
                            <h3 class="mb-2 mb-md-4">Aceptar condiciones de uso y seguridad</h3>
                            <div class="mb-2 form-floating">
                                <div class="container pb-3 row list-group">
                                    <div class="col-md-12">
                                        <ul class="row">
                                            <li
                                                class="col-md-5 mx-2>No perder las llaves y devolverlas</li> <li class="
                                                col-md-5
                                                mx-2
                                            >
                                                Solo se usara hasta dos horas
                                            </li>
                                            <li
                                                class="col-md-5 mx-2>Solo se estudiar o trabajara</li> <li class="
                                                col-md-5
                                                mx-2
                                            >
                                                No se elaboraran trabajos manuales
                                            </li>
                                            <li
                                                class="col-md-5 mx-2>Se mantendran las luces encendidas y se comportara</li> <li class="
                                                col-md-5
                                                mx-2
                                            >
                                                Se llegara puntualmente a la hora de reserva
                                            </li>
                                            <li
                                                class="col-md-5 mx-2>Se dejara las mesas y sillas limpias</li> <li class="
                                                col-md-5
                                                mx-2
                                            >
                                                Se colocaran las sillas en su lugar
                                            </li>
                                            <li
                                                class="col-md-5 mx-2>Se recogeran todas las pertenencias al salir</li> <li class="
                                                col-md-5
                                                mx-2
                                            >
                                                No se sentara ni en el piso ni mesa
                                            </li>
                                            <li
                                                class="col-md-5 mx-2>Se reportara cualquier incidente</li> <li class="
                                                col-md-5
                                                mx-2
                                            >
                                                No se ingirira alimentos o bebidas
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <input v-model.number="pc.check" type="checkbox" name="terminos" class="center" />
                                Acepto y estoy de acuerdo con todas las condiciones de uso y seguridad
                            </div>
                        </div>
                    </TabContent>
                </div>
            </form>
        </FormWizard>
    </div>
</template>

<script>
import moment from 'moment'
import { FormWizard, TabContent } from 'vue3-form-wizard'
import { PCsRef, PClogRef, userRef, db } from '@/services/firebase'
import { onValue, query, set, ref } from 'firebase/database'
export default {
    name: 'FormSolPC',
    components: {
        // eslint-disable-next-line
        FormWizard,
        TabContent,
    },
    data() {
        return {
            currentstep: 1,
            steps: [
                {
                    id: 1,
                    title: 'Arrendador',
                    icon_class: 'fa fa-user-circle-o',
                },
                {
                    id: 2,
                    title: 'Condiciones',
                    icon_class: 'fa fa-check-square-o',
                },
            ],
            pc: {
                id: 1,
                user: {
                    name: '',
                    ced: '',
                    fac: '',
                    sex: '',
                    ocup: '',
                    found: false,
                },
                check: false,
                date_start: '',
                date_end: '',
                status: true,
            },
            listado: [],
            usuarios: [],
            log: [],
            logid: 1,
        }
    },
    created() {
        this.getPCs()
        this.getUsers()
    },
    methods: {
        moment() {
            return moment()
        },
        stepChanged(step) {
            this.currentstep = step
        },
        addForm() {
            this.pc.date_start = moment().format('dddd D/M/YY HH:mm:ss')
            this.pc.date_end = moment().add(2, 'm').format('dddd D/M/YY HH:mm:ss')
            this.pc.status = false
            let form = Object.assign({}, this.pc)
            let NewPCRef = ref(db, 'pcs/' + form.id)
            let NewPCLogRef = ref(db, 'pcs/' + this.logid)
            set(NewPCRef, form)
            set(NewPCLogRef, form)
            let ID = String(this.pc.id)
            this.$router.push({ path: `/pc/solicitud/realizado/${ID}` })
        },
        getPCs() {
            onValue(
                query(PCsRef),
                (res) => {
                    let data = res.val()
                    this.listado = Object.values(data)
                    let idpc = 1
                    if (this.listado.length > 0) {
                        this.listado.forEach((pc) => {
                            if (pc.id == idpc && pc.status == false) {
                                if (idpc < 30) {
                                    idpc++
                                } else {
                                    alert('No hay computadoras disponibles.')
                                    this.$router.push('/pc/')
                                }
                            }
                        })
                    }
                    this.pc.id = idpc
                    // eslint-disable-next-line
                    console.log('ID: ', this.pc.id)
                },
                {
                    onlyOnce: true,
                },
            ),
                onValue(
                    query(PClogRef),
                    (logdb) => {
                        let logdata = logdb.val()
                        this.log = Object.values(logdata)
                        if (this.log.length > 0) {
                            // eslint-disable-next-line
                            this.log.forEach((pclog) => {
                                this.logid++
                            })
                        }
                    },
                    {
                        onlyOnce: true,
                    },
                )
        },
        getUsers() {
            onValue(
                query(userRef),
                (res) => {
                    let data = res.val()
                    this.usuarios = Object.values(data)
                },
                {
                    onlyOnce: true,
                },
            )
        },
        getUserData(ID) {
            if (this.usuarios.length > 0) {
                let exist
                this.usuarios.forEach((user) => {
                    if (this.pc.user.ced == user.ced && this.pc.user.found == false && ID == 1) {
                        exist = this.ExistingUser(ID)
                        if (!exist) {
                            this.pc.user.name = user.name
                            this.pc.user.fac = user.fac
                            this.pc.user.sex = user.sex
                            this.pc.user.ocup = user.ocup
                            this.pc.user.found = true
                        }
                    }
                })
            }
        },
        delUserData(ID) {
            if (ID == 1) {
                // eslint-disable-next-line
                console.log('Usuario encontrado')
                this.pc.user.ced = ''
                this.pc.user.name = ''
                this.pc.user.fac = ''
                this.pc.user.sex = ''
                this.pc.user.ocup = ''
                this.pc.user.found = false
            } else {
                // eslint-disable-next-line
                console.log('Usuario NO encontrado')
            }
        },
        ExistingUser(ID) {
            let res = false
            if (this.listado.length > 0) {
                this.listado.forEach((pcs) => {
                    if (ID == 1) {
                        if (pcs.user.ced == this.pc.user.ced && pcs.status == false) {
                            this.pc.user.ced = ''
                            alert('El usuario ya esta en otra computadora')
                            res = true
                            return res
                        }
                    } else {
                        res = false
                    }
                })
            }
            return res
        },
    },
}
</script>
