<script lang="ts">
export default {
  name: 'IndexView'
}
</script>

<script lang="ts" setup>
import { useIgnite } from '@ignt/vue'
import { SpTheme } from '@starport/vue'
import { Env } from '@ignt/plugins'

import IgniteNavbar from './components/IgniteNavbar.vue'

let env: Env = {
  apiURL: process.env.VUE_APP_API_COSMOS ?? '',
  rpcURL: process.env.VUE_APP_API_TENDERMINT ?? '',
  wsURL: process.env.VUE_APP_WS_TENDERMINT ?? '',
  prefix: process.env.VUE_APP_ADDRESS_PREFIX ?? ''
}
let tsClientParams = {
  env,
  autoConnectWS: true
}
useIgnite(tsClientParams)
</script>

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

<style scoped lang="postcss">
body {
  margin: 0;
}
</style>
