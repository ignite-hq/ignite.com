<template>
  <div>
    <div v-if="store.selectedRequests.length > 0" class="selected-requests">
      <IgniteText class="text-4">
        <strong>{{ store.selectedRequests.length }}</strong>
        {{ store.selectedRequests.length > 1 ? 'Requests' : 'Request' }}
        selected
      </IgniteText>

      <div class="space-x-6">
        <button
          aria-label="Accept requests"
          @click="() => (isAcceptModalOpen = true)"
        >
          <IconAccept />
        </button>
        <button
          aria-label="Deny requests"
          @click="() => (isDeclineModalOpen = true)"
        >
          <IconDeny />
        </button>
      </div>
    </div>

    <IgniteRequestsDeclineModal
      :visible="isDeclineModalOpen"
      @close="() => (isDeclineModalOpen = false)"
    />

    <IgniteRequestsAcceptModal
      :visible="isAcceptModalOpen"
      @close="() => (isAcceptModalOpen = false)"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteSelectedRequests'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import IconAccept from '~/components/icons/IconAccept.vue'
import IconDeny from '~/components/icons/IconDeny.vue'
import IgniteText from '~/components/IgniteText.vue'
import { LaunchRequest } from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { useRequestsStore } from '~/stores/requests-store'

import IgniteRequestsAcceptModal from './IgniteRequestsAcceptModal.vue'
import IgniteRequestsDeclineModal from './IgniteRequestsDeclineModal.vue'

interface Props {
  requests: LaunchRequest[]
}

const props = withDefaults(defineProps<Props>(), {
  requests: () => []
})

const store = useRequestsStore()

// state
const isDeclineModalOpen = ref(false)
const isAcceptModalOpen = ref(false)
</script>

<style scoped lang="postcss">
.selected-requests {
  @apply absolute bottom-10 left-1/2 flex -translate-x-1/2 transform items-center space-x-7 rounded-md bg-white-1000 py-7 px-8;

  box-shadow: 40px 64px 128px -8px rgba(0, 0, 0, 0.14);
}
</style>
