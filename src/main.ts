import './assets/css/main.css'

import MasonryWall from '@yeger/vue-masonry-wall'
import { createPinia } from 'pinia'
import {
  createIgnite as createIgniteN,
  Environment
} from 'tendermint-spn-ts-client'
import { useIgnite } from 'tendermint-spn-vue'
import { SetupCalendar } from 'v-calendar'
import { createApp } from 'vue'
import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

const env: Environment = {
  apiURL: process.env.VUE_APP_API_COSMOS ?? '',
  rpcURL: process.env.VUE_APP_API_TENDERMINT ?? '',
  wsURL: process.env.VUE_APP_WS_TENDERMINT ?? '',
  prefix: process.env.VUE_APP_ADDRESS_PREFIX ?? '',
  chainID: process.env.VUE_APP_CHAIN_ID ?? '',
  chainName: process.env.VUE_APP_CHAIN_NAME ?? ''
}

// ignite
const { inject } = useIgnite()

const ignite = createIgniteN({
  env
})

inject(ignite)

ignite.ws.connect()

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
