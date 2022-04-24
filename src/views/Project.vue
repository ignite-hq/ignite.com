<script lang="ts">
export default {
  name: 'ProjectView'
}
</script>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import IgniteProjectHeader from '../components/ProjectHeader/index.vue'
import ProjectInvestTab from '../components/projectTabs/ProjectInvestTab/index.vue'
import ProjectOverviewTab from '../components/projectTabs/ProjectOverviewTab/index.vue'
import ProjectRequestsTab from '../components/projectTabs/ProjectRequestsTab/index.vue'
import ProjectValidatorsTab from '../components/projectTabs/ProjectValidatorsTab/index.vue'
import useCampaignSummary from '../composables/useCampaignSummary'

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
const { campaignSummary } = useCampaignSummary(projectId)
</script>

<template>
  <div>
    <IgniteProjectHeader
      :active-tab="tab"
      :project-id="projectId"
      :campaign-summary="campaignSummary"
    />
    <ProjectOverviewTab v-if="tab === 'overview'" />
    <ProjectValidatorsTab v-if="tab === 'validators'" />
    <ProjectRequestsTab v-if="tab === 'requests'" />
    <ProjectInvestTab v-if="tab === 'invest'" />
  </div>
</template>
