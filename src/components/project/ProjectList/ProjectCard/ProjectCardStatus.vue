<script lang="ts">
export default {
  name: 'ProjectCardStatus'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import IgniteProjectStatus from '~/components/project/ProjectHeader/ProjectStatus.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import useCampaignChains from '~/composables/campaign/useCampaignChains'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { getCampaignStatus } from '~/utils/campaign'

interface Props {
  projectId: string
  campaignSummary: CampaignCampaignSummary
  stargazerCount: string
  loading?: boolean
}

const props = defineProps<Props>()

const { campaignChains, isLoading: isLoadingCampaignChains } =
  useCampaignChains(props.projectId)

const isLoading = computed(() => {
  return props.loading || isLoadingCampaignChains.value
})

const status = computed(() => {
  const chains = campaignChains.value?.chains ?? []
  const isMainnetInitialized =
    props.campaignSummary.campaign?.mainnetInitialized

  return getCampaignStatus(isMainnetInitialized ?? false, chains)
})
</script>

<template>
  <div>
    <IgniteLoader v-if="isLoading" class="status-loading mx-auto" />
    <IgniteProjectStatus
      v-else
      :project-id="projectId"
      :stargazer-count="stargazerCount"
      :request-count="campaignSummary.mostRecentChain?.requestNb ?? '0'"
      :validator-count="campaignSummary.mostRecentChain?.validatorNb ?? '0'"
      :status="status"
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
