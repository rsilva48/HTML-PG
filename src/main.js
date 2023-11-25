import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '../router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import 'chart.js'
import './services/firebase'
import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(Vue3FormWizard)
app.use(pinia)
app.mount('#app')
