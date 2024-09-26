import '@/assets/css/normalize.css'
import '@/assets/css/fontawesome.min.css'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CircleCursor from '@/components/CircleCursor.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Register the component globally
app.component('CircleCursor', CircleCursor)

app.use(createPinia())
app.use(router)

app.mount('#app')
