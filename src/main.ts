import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import V3waterfall from 'v3-waterfall'
import 'v3-waterfall/dist/style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(V3waterfall)
app.use(ElementPlus)
app.mount('#app')
