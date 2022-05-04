<script lang="ts">
export default {
  name: 'ProjectInvestView'
}
</script>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

import ProjectInvestFundraiserTab from '~/components/project/project-tabs/ProjectInvestFundraiserTab/index.vue'
import IgniteProjectHeader from '~/components/project/ProjectHeader/index.vue'
import useCampaignSummary from '~/composables/campaign/useCampaignSummary'

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'

onBeforeMount(() => {
  window.scrollTo(0, 0)
})

// composables
const { campaignSummary } = useCampaignSummary(projectId)
</script>

<template>
  <div>
    <IgniteProjectHeader
      :active-tab="tab"
      :project-id="projectId"
      :campaign-summary="campaignSummary"
    />
    <ProjectInvestFundraiserTab />
  </div>
</template>
