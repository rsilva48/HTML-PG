<template>
    <div>
        <p>{{ formCubs }}
        <tr v-for="form in formCubs" :key="form.ids.e1">
            <td >{{ form.names.e1 }}</td>
            <td >{{ form.ids.e1 }}</td>
        </tr>
    </div>
</template>

<script>
export default {
    name: 'CubSolList',
    props: ["formCubs"],
    components: {
    }
}
</script>
