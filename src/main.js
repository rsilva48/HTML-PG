import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'font-awesome/css/font-awesome.min.css'
import 'chart.js'
import './services/firebase'
import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'

const app = createApp(App)
app.use(router)
app.use(Vue3FormWizard)
app.mount('#app')