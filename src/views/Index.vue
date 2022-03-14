<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { Ignite } from 'tendermint-spn-ts-client'
import { useTendermintSpnLaunchModule } from 'tendermint-spn-vue'

import { inject, watch, Ref } from 'vue'

export default {
  async setup() {
    let $ignt = inject<Ref<Ignite>>('ignt')

    let { queryChainAll, sendMsgRequestAddAccount } =
      useTendermintSpnLaunchModule({
        $ignt: $ignt.value
      })

    console.log(await queryChainAll())

    // console.log(
    //   'add acc',
    //   sendMsgRequestAddAccount({
    //     value: {
    //       address: 'spn1l9wuy2w80v3ntc38ede0zdn7vn0lhslfutqnka',
    //       coins: [{ amount: '99999', denom: 'spn' }],
    //       creator: 'spn1l9wuy2w80v3ntc38ede0zdn7vn0lhslfutqnka',
    //       launchID: 1
    //     }
    //   })
    // )
  }
}
</script>
