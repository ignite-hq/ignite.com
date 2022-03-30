import './assets/css/main.css'

import starportLibrary from '@starport/vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
const pinia = createPinia()

app
  .use(store)
  .use(pinia)
  .use(router)
  .use(starportLibrary)
  .use(MasonryWall)
  .mount('#app')
