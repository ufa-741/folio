import { createApp } from 'vue'
import './style.css'
import App from './components/App.vue'
import router from './index.js'

createApp(App).use(router).mount('#app')
