<template>
  <div>
    <Suspense>
      <SpTheme>
        <SpNavbar
          :links="navbarLinks"
          :active-route="router.currentRoute.value.path"
        />
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
import { useIgnite as useIgniteN } from 'tendermint-spn-vue'
import { SpTheme, SpNavbar } from '@starport/vue'
import { useRouter } from 'vue-router'
import { Environment } from 'tendermint-spn-ts-client'
import { NavbarLink } from '@starport/vue/src/components/SpNavbar/SpNavbar.vue'

let env: Environment = {
  apiURL: process.env.VUE_APP_API_COSMOS,
  rpcURL: process.env.VUE_APP_API_TENDERMINT,
  wsURL: process.env.VUE_APP_WS_TENDERMINT
}
let tsClientParams = {
  env,
  autoConnectWS: true
}
useIgnite(tsClientParams)
useIgniteN(tsClientParams)

// router
let router = useRouter()

// state
const navbarLinks: NavbarLink[] = []
</script>

<style scoped lang="postcss">
body {
  margin: 0;
}
</style>
