<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { Ignite } from 'tendermint-spn-ts-client'
import { useTendermintSpnLaunchModule } from 'tendermint-spn-vue'

import { inject, watch, Ref } from 'vue'

export default {
  setup() {
    let $ignt = inject<Ref<Ignite>>('ignt')

    //watch
    watch(
      () => $ignt.value,
      async () => {
        if ($ignt.value) {
          let { $s, queryChainAll } = useTendermintSpnLaunchModule({
            $ignt: $ignt.value
          })
        }
      },
      { immediate: true }
    )
  }
}
</script>
