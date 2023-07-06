import { createApp } from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import store from './store'
import './assets/styles.css'

createApp(App).use(store).use(HighchartsVue).mount('#app')