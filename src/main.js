import './assets/css/main.css'

import { createApp } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(MasonryWall).mount('#app')
