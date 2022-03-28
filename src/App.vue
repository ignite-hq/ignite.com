<template>
  <div>
    <Suspense>
      <SpTheme>
        <SpNavbar
          :links="navbarLinks"
          :active-route="router.currentRoute.value.path"
        />
        <router-view v-if="Boolean(address)" />
      </SpTheme>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { useIgnite } from '@ignt/vue'
import { useIgnite as useIgniteN } from 'tendermint-spn-vue'
import { SpNavbar, SpTheme } from '@starport/vue'
import { useAddress } from '@starport/vue/src/composables'
import { useRouter } from 'vue-router'
import { Environment } from 'tendermint-spn-ts-client'

export default {
  components: { SpTheme, SpNavbar },

  setup() {
    // ignt
    let env: Environment = {
      apiURL: process.env.VUE_APP_API_COSMOS,
      rpcURL: process.env.VUE_APP_API_TENDERMINT,
      wsURL: process.env.VUE_APP_WS_TENDERMINT,
      chainID: process.env.VUE_APP_CHAIN_ID,
      chainName: process.env.VUE_APP_CHAIN_NAME,
      prefix: process.env.VUE_APP_ADDRESS_PREFIX
    }
    let tsClientParams = {
      env,
      autoConnectWS: true
    }
    useIgnite(tsClientParams)
    useIgniteN(tsClientParams)

    // composables
    const { address } = useAddress()

    // router
    let router = useRouter()

    // state
    let navbarLinks = []

    return {
      // state,
      navbarLinks,
      // router
      router,
      // computed
      address
    }
  }
}
</script>

<style scoped lang="postcss">
body {
  margin: 0;
}
</style>
