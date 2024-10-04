import '@/assets/css/normalize.css'
import '@/assets/css/fontawesome.min.css'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CircleCursor from '@/components/CircleCursor.vue'
import AppLink from '@/components/AppLink.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Register the component globally
app.component('CircleCursor', CircleCursor)
app.component('AppLink', AppLink)

app.use(router)
app.use(createPinia())

app.mount('#app')
