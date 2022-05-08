<script lang="ts">
export default {
  name: 'ProjectView'
}
</script>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import ProjectInvestTab from '~/components/project/project-tabs/ProjectInvestTab/index.vue'
import ProjectOverviewTab from '~/components/project/project-tabs/ProjectOverviewTab/index.vue'
import ProjectRequestsTab from '~/components/project/project-tabs/ProjectRequestsTab/index.vue'
import ProjectValidatorsTab from '~/components/project/project-tabs/ProjectValidatorsTab/index.vue'
import IgniteProjectHeader from '~/components/project/ProjectHeader/index.vue'
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
const { campaignSummary, isFetching } = useCampaignSummary(projectId)

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
  <div>
    <IgniteProjectHeader
      :loading="isFetching"
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
      :project-name="campaignName"
      :launch-id="launchId"
      :coordinator-id="coordinatorId"
    />
    <ProjectInvestTab v-if="tab === 'invest'" />
  </div>
</template>
