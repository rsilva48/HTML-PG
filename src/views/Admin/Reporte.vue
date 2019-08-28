<template>
  <div>
    <AdminTitulo />
    <section id="main">
      <div class="container">
        <div class="row">
          <AdminMenu class="col-md-3" />
          <div class="col-md-9">
            <!-- Website Overview -->
            <!-- Latest Users -->
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Reportes</h3>
                <grafica-component></grafica-component>
              </div>
              <div>
                <chartjs-doughnut v-bind:labels="labels" :datasets="datasets" :option="option"></chartjs-doughnut>
              </div>
              <div>
                <chartjs-bar :datalabel="mylabel" :labels="mylabels" :data="mydata"></chartjs-bar>
              </div>
              <div class="panel-body"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AdminTitulo from "@/components/Admin/Titulo.vue";
import AdminMenu from "@/components/Admin/Menu.vue";
export default {
  name: "AdminReporte",
  components: {
    AdminMenu,
    AdminTitulo
  },
  data() {
    return {
      labels: ["Manzanas", "Bananana", "Tusieresfresa"],
      datasets: [
        {
          position: "bottom",
          data: [20, 30, 50],
          backgroundColor: ["Red", "Yellow", "Purple"]
        }
      ],
      option: {
        title: {
          display: true,
          position: "top",
          text: "Frutascas"
        }
      },
      mylabel: "Graficos blabla",
      mylabels: ["depresión", "estrés", "ansiedad"],
      mydata: [70, 50, 10]
    };
  }
};
</script>
<style>
</style>
