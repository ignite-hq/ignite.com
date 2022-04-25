<script lang="ts">
export default {
  name: 'ProjectOverviewTab'
}
</script>

<script lang="ts" setup>
import ProjectCards from './ProjectCards/index.vue'
import ProjectDescription from './ProjectDescription.vue'
import ProjectLinks from './ProjectLinks/index.vue'
import ProjectRoadmap from './ProjectRoadmap.vue'
import ProjectTeam from './ProjectTeam/index.vue'
import ProjectTokenomics from './ProjectTokenomics.vue'
import ProjectVestingSchedule from './ProjectVestingSchedule.vue'
import ProjectWhitepaper from './ProjectWhitepaper.vue'
</script>

<template>
  <div>
    <ProjectCards class="mt-8 md:mt-10.5" />
    <ProjectDescription class="mt-8 md:mt-10.5" />
    <ProjectWhitepaper class="mt-8 md:mt-10.5" />
    <ProjectRoadmap class="mt-8 md:mt-12" />
    <ProjectTokenomics class="mt-8 md:mt-12" />
    <ProjectVestingSchedule class="mt-8 md:mt-10.5" />
    <ProjectTeam class="mt-8 md:mt-11" />
    <ProjectLinks class="mt-8 mb-10 md:mt-11" />
  </div>
</template>
