import './assets/css/main.css'

import { Env } from '@ignt/plugins'
import MasonryWall from '@yeger/vue-masonry-wall'
import { createPinia } from 'pinia'
import { createSpn } from 'tendermint-spn-ts-client'
import { useSpn } from 'tendermint-spn-vue-client'
import { SetupCalendar } from 'v-calendar'
import { createApp } from 'vue'
import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

const env: Env = {
  apiURL: process.env.VUE_APP_API_COSMOS ?? '',
  rpcURL: process.env.VUE_APP_API_TENDERMINT ?? '',
  wsURL: process.env.VUE_APP_WS_TENDERMINT ?? '',
  prefix: process.env.VUE_APP_ADDRESS_PREFIX ?? '',
  chainID: process.env.VUE_APP_CHAIN_ID ?? '',
  chainName: process.env.VUE_APP_CHAIN_NAME ?? ''
}

// spn
let { inject } = useSpn()

let spn = createSpn({
  env
})

inject(spn)

spn.ws.ee().on('ws-chain-id', (chainId: string) => {
  spn.env.chainID = chainId
})
spn.ws.ee().on('ws-chain-name', (chainName: string) => {
  spn.env.chainName = chainName
})

spn.env.status = {
  apiConnected: false,
  rpcConnected: false,
  wsConnected: false
}

spn.ws.ee().on('ws-api-status', (connected: boolean) => {
  //@ts-ignore
  spn.env.status.apiConnected = connected
})
spn.ws.ee().on('ws-rpc-status', (connected: boolean) => {
  //@ts-ignore
  spn.env.status.rpcConnected = connected
})
spn.ws.ee().on('ws-open', () => {
  //@ts-ignore
  spn.env.status.wsConnected = true
})
spn.ws.ee().on('ws-close', () => {
  //@ts-ignore
  spn.env.status.wsConnected = false
})

spn.ws.connect()

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

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

app
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .use(createPinia())
  .use(router)
  .use(MasonryWall)
  .use(VueApexCharts)
  .use(SetupCalendar, {})
  .directive('click-outside', clickOutside)
  .mount('#app')
