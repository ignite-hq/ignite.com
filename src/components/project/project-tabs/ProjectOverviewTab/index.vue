<script lang="ts">
export default {
  name: 'ProjectOverviewTab'
}
</script>

<script lang="ts" setup>
import { toRef } from 'vue'

import useGitHubFile from '~/composables/github/useGitHubFile'

import ProjectCards from './ProjectCards/index.vue'
import ProjectDescription from './ProjectDescription.vue'
import ProjectLinks from './ProjectLinks/index.vue'
import ProjectRoadmap from './ProjectRoadmap.vue'
import ProjectTeam from './ProjectTeam/index.vue'
import ProjectTokenomics from './ProjectTokenomics.vue'
import ProjectVestingSchedule from './ProjectVestingSchedule.vue'
import ProjectWhitepaper from './ProjectWhitepaper.vue'

interface Props {
  sourceUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  sourceUrl: ''
})

const { file: readme, isLoading: isReadmeLoading } = useGitHubFile(
  toRef(props, 'sourceUrl'),
  'assets/readme.md'
)
</script>

<template>
  <div>
    <ProjectCards class="mt-8 md:mt-10.5" />
    <ProjectDescription
      :raw-markdown="readme"
      :source-url="sourceUrl"
      class="mt-8 md:mt-10.5"
      :loading="isReadmeLoading"
    />
    <ProjectWhitepaper class="mt-8 md:mt-10.5" />
    <ProjectRoadmap class="mt-8 md:mt-12" />
    <ProjectTokenomics class="mt-8 md:mt-12" />
    <ProjectVestingSchedule class="mt-8 md:mt-10.5" />
    <ProjectTeam class="mt-8 md:mt-11" />
    <ProjectLinks class="mt-8 mb-10 md:mt-11" />
  </div>
</template>
