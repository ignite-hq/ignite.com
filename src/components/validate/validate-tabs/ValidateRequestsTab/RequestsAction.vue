<script lang="ts">
export default {
  name: 'RequestsAction'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IconCoins from '~/components/icons/IconCoins.vue'
import IconStage from '~/components/icons/IconStage.vue'
import IconTransition from '~/components/icons/IconTransition.vue'
import IconWarningTriangle from '~/components/icons/IconWarningTriangle.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

import { getTypeFromContent } from './utils'

interface Props {
  request: object
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
    case 'genesisUpdate':
      return IconTransition
    default:
      return IconStage
  }
})
</script>

<template>
  <div class="flex items-center text-left">
    <div class="mr-5 rounded-2sm bg-gray-30 p-3">
      <component :is="actionIcon" />
    </div>

    <div>
      <IgniteText
        v-if="rawActionType === 'genesisAccount'"
        as="span"
        class="text-muted"
      >
        Grant
        <span class="font-semibold text-text">
          <IgniteNumber
            :number="request.content?.genesisAccount?.coins[0].amount"
          />
          {{ request.content?.genesisAccount?.coins[0].denom?.toUpperCase() }}
        </span>
      </IgniteText>
      <IgniteText
        v-else-if="rawActionType === 'genesisValidator'"
        as="span"
        class="text-muted"
      >
        Add validator to
        <span v-if="request.launchID" class="font-semibold text-text"
          >Testnet {{ request.launchID }}</span
        >
        <span v-else class="font-semibold text-text">Mainnet</span>
      </IgniteText>
      <IgniteText
        v-else-if="rawActionType === 'genesisUpdate'"
        as="span"
        class="text-muted"
      >
        Update inflation to
        <span class="font-semibold text-text"
          >{{ request.content?.genesisUpdate?.percent }}%</span
        >
      </IgniteText>
      <IgniteText v-else as="span" class="text-muted">Unknown</IgniteText>

      <IgniteText
        v-if="error"
        as="div"
        class="mt-3 flex items-center text-2 text-error"
      >
        <IconWarningTriangle class="mr-1 h-4 w-4" />
        <span>More than 66% of ATOM</span>
      </IgniteText>
    </div>
  </div>
</template>
