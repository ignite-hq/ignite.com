<template>
  <div>
    <Suspense>
      <SpTheme>
        <SpNavbar
          :links="navbarLinks"
          :active-route="router.currentRoute.value.path"
        />
        <router-view v-if="ignite && Boolean(address)" />
      </SpTheme>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { useIgnite } from '@ignt/vue'
import { SpNavbar, SpTheme } from '@starport/vue'
import { useAddress } from '@starport/vue/src/composables'
import { useRouter } from 'vue-router'

export default {
  components: { SpTheme, SpNavbar },

  setup() {
    // ignt
    const {
      state: { ignite }
    } = useIgnite({
      env: {
        apiURL: process.env.VUE_APP_API_COSMOS,
        rpcURL: process.env.VUE_APP_API_TENDERMINT,
        wsURL: process.env.VUE_APP_WS_TENDERMINT,
        chainID: process.env.VUE_APP_CHAIN_ID,
        chainName: process.env.VUE_APP_CHAIN_NAME,
        prefix: process.env.VUE_APP_ADDRESS_PREFIX
      },
      autoConnectWS: true
    })

    const { address } = useAddress()

    // router
    let router = useRouter()

    // state
    let navbarLinks = []

    return {
      // ignt
      ignite,
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
