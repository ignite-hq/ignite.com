import './assets/css/main.css'

import MasonryWall from '@yeger/vue-masonry-wall'
import HighchartsVue from 'highcharts-vue'
import { createApp } from 'vue'
import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query'
import { useIgnite as useIgniteN } from 'tendermint-spn-vue'

import App from './App.vue'
import router from './router'
import {
  createIgnite as createIgniteN,
  Environment
} from 'tendermint-spn-ts-client'

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
  .use(router)
  .use(MasonryWall)
  .use(HighchartsVue)
  .mount('#app')
