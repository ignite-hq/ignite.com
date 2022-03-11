<template>
  <slot />
</template>
<script lang="ts">
import { Ignite } from 'tendermint-spn-ts-client'
import { computed, defineComponent, provide, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Ignt',

  async setup() {
    // store
    let $s = useStore()

    // state
    let $ignt = ref<Ignite>()

    // computed
    let address = computed<string>(() => $s.getters['common/wallet/address'])
    let chainId = computed<string>(() => $s.getters['common/env/chainId'])

    // watch
    watch(
      () => address.value,
      async () => {
        if (address.value) {
          let signer = window.keplr.getOfflineSigner(chainId.value)

          let i = new Ignite({
            signer,
            address: address.value,
            env: {
              chainID: chainId.value,
              chainName: chainId.value,
              apiURL: process.env.VUE_APP_API_COSMOS,
              rpcURL: process.env.VUE_APP_API_TENDERMINT,
              wsURL: process.env.VUE_APP_WS_TENDERMINT
            }
          })

          await i.init()

          $ignt.value = i
        }
      },
      { immediate: true }
    )

    // provide
    provide('ignt', $ignt)
  }
})
</script>
