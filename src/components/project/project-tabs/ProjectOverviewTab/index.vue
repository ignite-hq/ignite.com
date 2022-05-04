<script lang="ts">
export default {
  name: 'ProjectOverviewTab'
}
</script>

<script lang="ts" setup>
import { computed, toRef } from 'vue'
import yaml from 'yamljs'

import useGitHubFile from '~/composables/github/useGitHubFile'
import useGitHubRepository from '~/composables/github/useGitHubRepository'

import ProjectCards from './ProjectCards/index.vue'
import ProjectDescription from './ProjectDescription.vue'
import ProjectLinks from './ProjectLinks/index.vue'
import ProjectRoadmap from './ProjectRoadmap.vue'
import ProjectTeam from './ProjectTeam/index.vue'
import ProjectTokenomics from './ProjectTokenomics.vue'
import ProjectVestingSchedule from './ProjectVestingSchedule.vue'
import ProjectWhitepaper from './ProjectWhitepaper.vue'
import { ProjectYaml } from './types'

interface Props {
  sourceUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  sourceUrl: ''
})

// composables
const { repository, isLoading: isRepositoryLoading } = useGitHubRepository(
  toRef(props, 'sourceUrl')
)

const defaultBranch = computed(() => {
  return repository.value?.default_branch
})

const { file: readme, isLoading: isReadmeLoading } = useGitHubFile(
  toRef(props, 'sourceUrl'),
  'assets/readme.md',
  defaultBranch
)

const { file: projectConfig, isLoading: isProjectConfigLoading } =
  useGitHubFile(toRef(props, 'sourceUrl'), 'assets/project.yml', defaultBranch)

// computed
const isLoadingDescription = computed(() => {
  return isReadmeLoading.value || isRepositoryLoading.value
})

const isLoadingProjectConfig = computed(() => {
  return isRepositoryLoading.value || isProjectConfigLoading.value
})

const parsedProjectConfig = computed(() => {
  return yaml.parse(projectConfig.value ?? '') as ProjectYaml | undefined
})

const showProjectDescription = computed(() => {
  return Boolean(readme.value) && !isLoadingDescription.value
})

const showWhitepaper = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.whitepaper?.url) &&
    !isLoadingProjectConfig.value
  )
})

const showRoadmap = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.roadmap?.milestones) &&
    !isLoadingProjectConfig.value
  )
})

const showTokenomics = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.tokenomics?.distribution) &&
    !isLoadingProjectConfig.value
  )
})

const showTeam = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.team?.members) &&
    !isLoadingProjectConfig.value
  )
})

const showLinks = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.links) &&
    !isLoadingProjectConfig.value
  )
})
</script>

<template>
  <div class="pt-8 pb-10 md:pt-10.5">
    <ProjectCards />
    <ProjectDescription
      v-if="showProjectDescription"
      :raw-markdown="readme"
      :source-url="sourceUrl"
      class="mt-8 md:mt-10.5"
      :loading="isLoadingDescription"
    />
    <ProjectWhitepaper
      v-if="showWhitepaper"
      :whitepaper-url="parsedProjectConfig?.project?.whitepaper?.url ?? ''"
      :loading="isLoadingProjectConfig"
      class="mt-8 md:mt-10.5"
    />
    <ProjectRoadmap
      v-if="showRoadmap"
      :milestones="parsedProjectConfig?.project?.roadmap?.milestones"
      class="mt-8 md:mt-12"
    />
    <ProjectTokenomics
      v-if="showTokenomics"
      :distribution="parsedProjectConfig?.project?.tokenomics?.distribution"
      class="mt-8 md:mt-12"
    />
    <ProjectVestingSchedule class="mt-8 md:mt-10.5" />
    <ProjectTeam
      v-if="showTeam"
      :members="parsedProjectConfig?.project?.team?.members"
      class="mt-8 md:mt-11"
    />
    <ProjectLinks
      v-if="showLinks"
      :links="parsedProjectConfig?.project?.links"
      class="mt-8 md:mt-11"
    />
  </div>
</template>
