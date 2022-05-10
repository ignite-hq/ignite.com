<script lang="ts">
export default {
  name: 'ProjectView'
}
</script>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import ProjectFundraisersTab from '~/components/project/project-tabs/ProjectFundraisersTab/index.vue'
import ProjectOverviewTab from '~/components/project/project-tabs/ProjectOverviewTab/index.vue'
import ProjectRequestsTab from '~/components/project/project-tabs/ProjectRequestsTab/index.vue'
import ProjectValidatorsTab from '~/components/project/project-tabs/ProjectValidatorsTab/index.vue'
import ProjectHeader from '~/components/project/ProjectHeader/index.vue'
import useCampaignSummary from '~/composables/campaign/useCampaignSummary'

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'
let tab = ref(route.params?.tab?.toString().toLowerCase() || 'overview')

onBeforeMount(() => {
  window.scrollTo(0, 0)
})

onBeforeRouteUpdate(async (to) => {
  tab.value = to.params.tab.toString().toLowerCase()
})

// composables
const { campaignSummary, isLoading: isLoadingCampaignSummary } =
  useCampaignSummary(projectId)

// computed
const coordinatorId = computed(() => {
  return campaignSummary.value?.campaign?.coordinatorID
})

const launchId = computed(() => {
  return campaignSummary.value?.mostRecentChain?.launchID
})

const campaignName = computed(() => {
  return campaignSummary.value?.campaign?.campaignName
})
</script>

<template>
  <div class="container mb-10">
    <ProjectHeader
      :loading="isLoadingCampaignSummary"
      :active-tab="tab"
      :project-id="projectId"
      :campaign-summary="campaignSummary"
    />
    <ProjectOverviewTab v-if="tab === 'overview'" />
    <ProjectValidatorsTab v-if="tab === 'validators'" />
    <ProjectRequestsTab
      v-if="tab === 'requests'"
      :project-name="campaignName"
      :launch-id="launchId"
      :coordinator-id="coordinatorId"
    />
    <ProjectFundraisersTab
      v-if="tab === 'fundraisers'"
      :campaign-summary="campaignSummary"
    />
  </div>
</template>
