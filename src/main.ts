import './assets/css/main.css'

import MasonryWall from '@yeger/vue-masonry-wall'
import { createPinia } from 'pinia'
import {
  createIgnite as createIgniteN,
  Environment
} from 'tendermint-spn-ts-client'
import { useIgnite as useIgniteN } from 'tendermint-spn-vue'
import { createApp } from 'vue'
import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

let env: Environment = {
  apiURL: process.env.VUE_APP_API_COSMOS ?? '',
  rpcURL: process.env.VUE_APP_API_TENDERMINT ?? '',
  wsURL: process.env.VUE_APP_WS_TENDERMINT ?? ''
}

// ignite
let { inject } = useIgniteN()

let igniteN = createIgniteN({
  env
})

inject(igniteN)

igniteN.ws.connect()

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
  .use(createPinia())
  .use(router)
  .use(MasonryWall)
  .use(VueApexCharts)
  .mount('#app')
