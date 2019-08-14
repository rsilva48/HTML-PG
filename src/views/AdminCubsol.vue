<template>
    <div class="CubSol">
        <div class="jumbotron jumbotron-fluid font">
        <div class="container">
            <h1 class="display-4">Solicitud de Cubiculo</h1>
            <p class="lead">Llene la siguiente información para reservar un cubiculo.</p>
            <router-link to="/admin/cub" class="btn btn-primary btn-lg" role="button">Volver</router-link>
            <router-link to="/admin/admin_cub_list" class="btn btn-primary btn-lg" role="button">Ver Cubiculos</router-link>
        </div>
    </div>
    <FormSolCub @send2view="send2app"/>
    </div>
</template>

<script>


import FormSolCub from '@/components/FormSolCub.vue'
export default {
    name:"AdminCubsol",
    components:{
        FormSolCub
    },
    methods:{
        send2app(childform){
            this.$emit('cubform',childform)
        }
    }
}
</script>

<style>

</style>