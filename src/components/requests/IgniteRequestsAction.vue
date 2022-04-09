<template>
  <div class="rounded-2sm bg-gray-30 p-3">
    <component :is="actionIcon" />
  </div>

  <span v-if="rawActionType === 'genesisAccount'"> Grant </span>
  <span v-else-if="rawActionType === 'genesisValidator'">
    Add validator to
    <span class="font-semibold">Testnet {{ request.launchID }}</span>
  </span>
  <span v-else>Unknown</span>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsaAction'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IconCoins from '~/components/icons/IconCoins.vue'
import IconStage from '~/components/icons/IconStage.vue'
import { LaunchRequest } from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'

import { getTypeFromContent } from './utils'

interface Props {
  request: LaunchRequest
}

const props = defineProps<Props>()

// computed
const rawActionType = computed(() => {
  return getTypeFromContent(props.request.content)
})

const actionIcon = computed(() => {
  switch (rawActionType.value) {
    case 'genesisAccount':
      return IconCoins
    case 'genesisValidator':
      return IconStage
    default:
      return IconStage
  }
})
</script>
