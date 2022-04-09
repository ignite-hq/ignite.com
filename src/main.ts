import './assets/css/main.css'

import MasonryWall from '@yeger/vue-masonry-wall'
import HighchartsVue from 'highcharts-vue'
import { createApp } from 'vue'
import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
}

app
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .use(router)
  .use(MasonryWall)
  .use(HighchartsVue)
  .mount('#app')
