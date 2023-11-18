<template>
    <div class="PCSolReal">
        <div class="container-fluid px-4 py-5 px-md-5 font bg-light">
            <div class="container">
                <h1 class="display-4">Computadora #{{ $route.params.id }} solicitada</h1>
                <p class="lead">Puede ir a utilizarla.</p>
                <hr class="my-4" />
                <router-link to="/pc/list" class="btn btn-primary btn-lg me-1" href role="button">
                    Lista de Computadoras
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PCSolReal',
}
</script>
