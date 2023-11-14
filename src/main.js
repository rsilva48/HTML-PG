import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import './registerServiceWorker'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'chart.js'
import './services/firebase'
const app = createApp(App)
app.use(router)
app.mount('#app')