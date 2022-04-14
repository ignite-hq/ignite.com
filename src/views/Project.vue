<template>
  <div>
    <IgniteProjectHeader :activeTab="tab" :projectID="projectID" />
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
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import IgniteProjectHeader from '../components/IgniteProjectHeader.vue'
import ProjectOverviewTab from '../components/projectTabs/ProjectOverviewTab.vue'
import ProjectValidatorsTab from '../components/projectTabs/ProjectValidatorsTab.vue'
import ProjectRequestsTab from '../components/projectTabs/ProjectRequestsTab.vue'
import ProjectInvestTab from '../components/projectTabs/ProjectInvestTab.vue'

const route = useRoute()
const projectID = route.params.projectID.toString() || '0'
let tab = ref(route.params?.tab?.toString().toLowerCase() || 'overview')

onBeforeRouteUpdate(async (to) => {
  tab.value = to.params.tab.toString().toLowerCase()
})
</script>
