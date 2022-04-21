<script lang="ts">
export default {
  name: 'IndexView'
}
</script>

<script lang="ts" setup>
import { useIgnite } from '@ignt/vue'
import { Environment } from 'tendermint-spn-ts-client'

import IgniteNavbar from './components/IgniteNavbar.vue'

const env: Environment = {
  apiURL: process.env.VUE_APP_API_COSMOS ?? '',
  rpcURL: process.env.VUE_APP_API_TENDERMINT ?? '',
  wsURL: process.env.VUE_APP_WS_TENDERMINT ?? '',
  prefix: process.env.VUE_APP_ADDRESS_PREFIX ?? '',
  chainID: process.env.VUE_APP_CHAIN_ID ?? '',
  chainName: process.env.VUE_APP_CHAIN_NAME ?? ''
}

const tsClientParams = {
  env,
  autoConnectWS: true
}

useIgnite(tsClientParams)
</script>

<template>
  <div>
    <IgniteNavbar />
    <router-view />
  </div>
</template>

<style scoped lang="postcss">
body {
  margin: 0;
}
</style>
