<script lang="ts">
export default {
  name: 'ProjectView'
}
</script>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import ProjectFundraisersTab from '~/components/project/project-tabs/ProjectFundraisersTab/index.vue'
import ProjectOverviewTab from '~/components/project/project-tabs/ProjectOverviewTab/index.vue'
import ProjectRequestsTab from '~/components/project/project-tabs/ProjectRequestsTab/index.vue'
import ProjectValidatorsTab from '~/components/project/project-tabs/ProjectValidatorsTab/index.vue'
import ProjectHeader from '~/components/project/ProjectHeader/index.vue'
import useCampaignSummary from '~/composables/campaign/useCampaignSummary'

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'
const tab = ref(route.params?.tab?.toString().toLowerCase() || 'overview')

onBeforeMount(() => {
  window.scrollTo(0, 0)
})

onBeforeRouteUpdate(async (to) => {
  tab.value = to.params.tab.toString().toLowerCase()
})

// composables
const { campaignSummary, isLoading: isLoadingCampaignSummary } =
  useCampaignSummary(projectId)
</script>

<template>
  <div class="container mb-10">
    <ProjectHeader
      :loading="isLoadingCampaignSummary"
      :active-tab="tab"
      :project-id="projectId"
      :campaign-summary="campaignSummary"
    />
    <ProjectOverviewTab
      v-if="tab === 'overview'"
      :campaign-summary="campaignSummary"
    />
    <ProjectValidatorsTab v-if="tab === 'validators'" />
    <ProjectRequestsTab
      v-if="tab === 'requests'"
      :campaign-summary="campaignSummary"
    />
    <ProjectFundraisersTab
      v-if="tab === 'fundraisers'"
      :campaign-summary="campaignSummary"
    />
  </div>
</template>
