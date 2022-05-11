<script lang="ts">
export default {
  name: 'ProjectFundraiserView'
}
</script>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

import IgniteProjectHeader from '~/components/project/ProjectHeader/index.vue'
import ProjectFundraiserTab from '~/components/project/project-tabs/ProjectFundraiserTab/index.vue'
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
      :project-id="projectId"
      :campaign-summary="campaignSummary"
    />
    <ProjectFundraiserTab />
  </div>
</template>
