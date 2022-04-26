<script lang="ts">
export default {
  name: 'ProjectCardStatus'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import IgniteProjectStatus from '~/components/project/ProjectHeader/ProjectStatus.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'

const props = defineProps({
  loading: Boolean,
  projectId: { type: String, required: true },
  requestCount: { type: String, required: true },
  validatorCount: { type: String, required: true },
  stargazerCount: { type: String, required: true }
})

const isLoading = computed(() => {
  return props.loading
})
</script>

<template>
  <div>
    <IgniteLoader v-if="isLoading" class="status-loading mx-auto" />
    <IgniteProjectStatus
      v-if="!isLoading"
      :project-id="projectId"
      :stargazer-count="stargazerCount"
      :request-count="requestCount"
      :validator-count="validatorCount"
      class="justify-center"
    />
  </div>
</template>

<style scoped lang="postcss">
.status-loading {
  height: 1.75rem;
  width: 11.25rem;
}
</style>