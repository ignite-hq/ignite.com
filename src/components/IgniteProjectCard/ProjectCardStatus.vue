<template>
  <div>
    <IgniteLoader v-if="isLoading" class="mx-auto status-loading" />
    <div v-if="!isLoading" class="status">
      <div class="status__item">
        <IconStar class="icon" />
        <span class="value ignt-text">{{ stargazerCount }}</span>
      </div>
      <div class="status__item">
        <IconPlane class="icon" />
        <span class="value ignt-text">{{ requestCount }}</span>
      </div>
      <div class="status__item">
        <IconStage class="icon" />
        <span class="value ignt-text">{{ validatorCount }}</span>
      </div>
      <div class="status__item">
        <span class="value ignt-text ignt-badge">testnet</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardStatus'
}
</script>

<script setup lang="ts">
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed, PropType } from 'vue'

import useRequests from '../../composables/useLaunchRequests'
import IconPlane from '../icons/IconPlane.vue'
import IconStage from '../icons/IconStage.vue'
import IconStar from '../icons/IconStar.vue'
import IgniteLoader from '../IgniteLoader.vue'

const props = defineProps({
  loading: Boolean,
  project: { type: Object as PropType<LaunchChain>, required: true },
  stargazerCount: { type: Number, required: true }
})

// composable
const { pagination: requestsPagination, isLoading: areRequestsLoading } =
  useRequests(props.project?.launchID ?? '', {
    'pagination.countTotal': true,
    'pagination.limit': '0'
  })
const { pagination: validatorPagination, isLoading: areValidatorsLoading } =
  useRequests(props.project?.launchID ?? '', {
    'pagination.countTotal': true,
    'pagination.limit': '0'
  })

// computed
const requestCount = computed(() => {
  return requestsPagination.value?.total ?? 0
})

const validatorCount = computed(() => {
  return validatorPagination.value?.total ?? 0
})

const isLoading = computed(() => {
  return props.loading || areRequestsLoading.value || areValidatorsLoading.value
})
</script>

<style scoped lang="postcss">
.status {
  @apply flex justify-center items-center -mx-3;

  &__item {
    @apply flex justify-center items-center px-3;
  }
}

.icon {
  @apply w-5 h-5 text-primary mr-1;
}

.value {
  @apply font-medium text-2;
}

.status-loading {
  height: 1.75rem;
  width: 11.25rem;
}
</style>
