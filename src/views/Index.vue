<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { Ignite } from 'tendermint-spn-ts-client'
import { useTendermintFundraisingModule } from 'tendermint-spn-vue'

import { inject, watch, Ref } from 'vue'

export default {
  setup() {
    let $ignt = inject<Ref<Ignite>>('ignt')

    //watch
    watch(
      () => $ignt.value,
      async () => {
        if ($ignt.value) {
          let { queryAuctions } = useTendermintFundraisingModule({
            $ignt: $ignt.value
          })
        }
      },
      { immediate: true }
    )
  }
}
</script>
