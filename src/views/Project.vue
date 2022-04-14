<template>
  <div>
    <IgniteProjectHeader :active-tab="tab" :project-i-d="projectID" />
    <ProjectOverviewTab v-if="tab === 'overview'" />
    <ProjectValidatorsTab v-if="tab === 'validators'" />
    <ProjectRequestsTab v-if="tab === 'requests'" />
    <ProjectInvestTab v-if="tab === 'invest'" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectView'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import IgniteProjectHeader from '../components/IgniteProjectHeader.vue'
import ProjectInvestTab from '../components/projectTabs/ProjectInvestTab.vue'
import ProjectOverviewTab from '../components/projectTabs/ProjectOverviewTab.vue'
import ProjectRequestsTab from '../components/projectTabs/ProjectRequestsTab.vue'
import ProjectValidatorsTab from '../components/projectTabs/ProjectValidatorsTab.vue'

const route = useRoute()
const projectID = route.params.projectID.toString() || '0'
let tab = ref(route.params?.tab?.toString().toLowerCase() || 'overview')

onBeforeRouteUpdate(async (to) => {
  tab.value = to.params.tab.toString().toLowerCase()
})
</script>
