<template>
  <div>
    <Suspense>
      <SpTheme>
        <IgniteNavbar />
        <router-view />
      </SpTheme>
    </Suspense>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexView'
}
</script>

<script lang="ts" setup>
import { useIgnite } from '@ignt/vue'
import { SpTheme } from '@starport/vue'
import { Environment } from 'tendermint-spn-ts-client'
import { useIgnite as useIgniteN } from 'tendermint-spn-vue'

import IgniteNavbar from './components/IgniteNavbar.vue'

let env: Environment = {
  apiURL: process.env.VUE_APP_API_COSMOS ?? '',
  rpcURL: process.env.VUE_APP_API_TENDERMINT ?? '',
  wsURL: process.env.VUE_APP_WS_TENDERMINT ?? ''
}
let tsClientParams = {
  env,
  autoConnectWS: true
}
useIgnite(tsClientParams)
useIgniteN(tsClientParams)
</script>

<style scoped lang="postcss">
body {
  margin: 0;
}
</style>
