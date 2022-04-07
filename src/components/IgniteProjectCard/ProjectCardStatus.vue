<template>
  <div>
    <IgniteLoader v-if="isLoading" class="mx-auto status-loading" />
    <IgniteProjectStatus
      v-if="!isLoading"
      :launch-id="launchId"
      :campaign-id="campaignId"
      :stargazer-count="stargazerCount"
      :request-count="requestCount"
      :validator-count="validatorCount"
      class="justify-center"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardStatus'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import IgniteLoader from '../IgniteLoader.vue'
import IgniteProjectStatus from '../IgniteProjectStatus.vue'

const props = defineProps({
  loading: Boolean,
  campaignId: { type: String, required: true },
  launchId: { type: String, required: true },
  requestCount: { type: String, required: true },
  validatorCount: { type: String, required: true },
  stargazerCount: { type: String, required: true }
})

const isLoading = computed(() => {
  return props.loading
})
</script>

<style scoped lang="postcss">
.status-loading {
  height: 1.75rem;
  width: 11.25rem;
}
</style>
