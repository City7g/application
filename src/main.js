import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

import './assets/scss/main.scss'

import BaseButton from './components/Base/Button.vue'
import Loader from './components/Loader.vue'
import Error from './components/Error.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('MainLoader', Loader)
app.component('MainError', Error)

app.use(router)
app.use(createPinia())

app.mount('#app')