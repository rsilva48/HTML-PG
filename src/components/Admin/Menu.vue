<template>
    <div>
        <div class="list-group">
            <a class="list-group-item active main-color-bg">
                <h3>
                    <span class="badge badge-primary">Menú</span>
                </h3>
            </a>
            <router-link to="/admin" class="list-group-item">
                <span class="glyphicon glyphicon-list-alt" aria-hidden="true" />Usuarios
            </router-link>
            <router-link to="/admin/pc" class="list-group-item">
                <span class="glyphicon glyphicon-list-alt" aria-hidden="true" />Computadoras
            </router-link>
            <router-link to="/admin/cub" class="list-group-item">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true" />Cubiculos
            </router-link>
            <router-link to="/admin/reporte" class="list-group-item">
                <span class="glyphicon glyphicon-user" aria-hidden="true" />Reportes
            </router-link>
            <router-link to="/admin/registro" class="list-group-item">
                <span class="glyphicon glyphicon-user" aria-hidden="true" />Registro de Usuario
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminMenu',
}
</script>
