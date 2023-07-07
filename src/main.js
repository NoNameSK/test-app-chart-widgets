import { createApp } from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import store from './store'
import vClickOutside from 'v-click-outside'
import './assets/styles.css'

createApp(App).use(store).use(vClickOutside).use(HighchartsVue).mount('#app')