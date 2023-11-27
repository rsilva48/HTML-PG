<template>
    <div class="home">
        <div class="container-fluid px-4 py-5 px-md-5 font bg-light" style="--bs-bg-opacity: 0.9">
            <div class="container">
                <h1 class="display-4">Biblioteca CRAI</h1>
                <p class="lead">
                    El Centro de Recursos para el Aprendizaje y la Investigación, se concibe como un lugar que integra
                    talento humano, libros físicos y espacios diseñado para estudiantes, dotado de tecnología que
                    facilita el acceso a valiosos recursos digitales.
                </p>
                <hr class="my-4" />
                <p class="lead">Haga clic en uno de los siguientes enlaces para utilizar nuestos servicios:</p>
                <div class="d-grid gap-3 mx-auto d-md-block">
                    <router-link to="/cub" class="btn btn-primary btn-lg mx-1"> Cubículos </router-link>
                    <router-link to="/pc" class="btn btn-primary btn-lg mx-1"> Computadoras </router-link>
                </div>
                <div class="bg" :style="backgroundStyle"></div>
            </div>
        </div>
    </div>
</template>
<script>
import LoginBG from '@/assets/LoginBG.jpg'
export default {
    name: 'CRAIHome',
    setup() {
        const backgroundStyle = {
            backgroundImage: `url(${LoginBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }

        return {
            backgroundStyle,
        }
    },
}
</script>
<style>
.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
}

@media (max-width: 575.98px) {
    .bg {
        display: none;
    }
}
</style>
