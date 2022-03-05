import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

import './assets/scss/main.scss'

import BaseButton from './components/Base/Button.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.use(router)
app.use(createPinia())

app.mount('#app')