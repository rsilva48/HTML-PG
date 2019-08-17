import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts)

Vue.config.productionTip = false
Vue.component('grafica-component', require('./components/Admin/graficos.vue').default)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
