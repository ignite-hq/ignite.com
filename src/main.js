import starportLibrary from '@starport/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css';

const app = createApp(App)
const pinia = createPinia()

app.use(store).use(pinia).use(router).use(starportLibrary).use(MasonryWall).mount('#app')
