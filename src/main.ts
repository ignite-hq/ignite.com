import './assets/css/main.css'

import MasonryWall from '@yeger/vue-masonry-wall'
import { createPinia } from 'pinia'
import { createSpn } from 'tendermint-spn-ts-client'
import { useSpn } from 'tendermint-spn-vue-client'
import { Env } from '@ignt/plugins'
import { createApp } from 'vue'
import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

let env: Env = {
  apiURL: process.env.VUE_APP_API_COSMOS ?? '',
  rpcURL: process.env.VUE_APP_API_TENDERMINT ?? '',
  wsURL: process.env.VUE_APP_WS_TENDERMINT ?? ''
}

// ignite
let { inject } = useSpn()

let $n = createSpn({
  env
})

inject($n)

$n.ws.ee().on('ws-chain-id', (chainId: string) => {
  console.log('ws-chain-id', chainId)
  $n.env.chainID = chainId
})
$n.ws.ee().on('ws-chain-name', (chainName: string) => {
  $n.env.chainName = chainName
})

$n.env.status = {
  apiConnected: false,
  rpcConnected: false,
  wsConnected: false
}

$n.ws.ee().on('ws-api-status', (connected: boolean) => {
  //@ts-ignore
  $n.env.status.apiConnected = connected
})
$n.ws.ee().on('ws-rpc-status', (connected: boolean) => {
  //@ts-ignore
  $n.env.status.rpcConnected = connected
})
$n.ws.ee().on('ws-open', () => {
  //@ts-ignore
  $n.env.status.wsConnected = true
})
$n.ws.ee().on('ws-close', () => {
  //@ts-ignore
  $n.env.status.wsConnected = false
})

$n.ws.connect()

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
