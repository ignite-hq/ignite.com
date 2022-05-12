<script lang="ts">
export default {
  name: 'ProjectOverviewTab'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import yaml from 'yamljs'

import useGitHubFile from '~/composables/github/useGitHubFile'
import useGitHubRepository from '~/composables/github/useGitHubRepository'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'

import ProjectCards from './ProjectCards/index.vue'
import ProjectDescription from './ProjectDescription.vue'
import ProjectLinks from './ProjectLinks/index.vue'
import ProjectRoadmap from './ProjectRoadmap.vue'
import ProjectTeam from './ProjectTeam/index.vue'
import ProjectTokenomics from './ProjectTokenomics.vue'
import ProjectWhitepaper from './ProjectWhitepaper.vue'
import { ProjectMember, ProjectYaml } from './types'

interface Props {
  campaignSummary?: CampaignCampaignSummary
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  campaignSummary: undefined
})

// composables
const sourceUrl = computed(() => {
  return props.campaignSummary?.mostRecentChain?.sourceURL
})

const { repository, isLoading: isRepositoryLoading } =
  useGitHubRepository(sourceUrl)

const defaultBranch = computed(() => {
  return repository.value?.default_branch
})

const { file: readme, isLoading: isReadmeLoading } = useGitHubFile(
  sourceUrl,
  'assets/readme.md',
  defaultBranch
)

const { file: projectConfig, isLoading: isProjectConfigLoading } =
  useGitHubFile(sourceUrl, 'assets/project.yml', defaultBranch)

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

const members = computed(() => {
  const projectConfigMembers =
    parsedProjectConfig?.value?.project?.team?.members

  const projectName = props.campaignSummary.campaign?.campaignName
  const campaignSummaryMembers: ProjectMember[] = [
    {
      name: `${projectName} Coordinator`,
      title: 'Coordinator'
    }
  ]

  return projectConfigMembers ?? campaignSummaryMembers
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

const showLinks = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.links) &&
    !isLoadingProjectConfig.value
  )
})
</script>

<template>
  <div class="space-y-8 pt-8 pb-10 md:space-y-11 md:pt-10.5">
    <ProjectCards />
    <ProjectDescription
      v-if="showProjectDescription"
      :raw-markdown="readme"
      :source-url="sourceUrl"
      :loading="isLoadingDescription"
    />
    <ProjectWhitepaper
      v-if="showWhitepaper"
      :whitepaper-url="parsedProjectConfig?.project?.whitepaper?.url ?? ''"
      :loading="isLoadingProjectConfig"
    />
    <ProjectRoadmap
      v-if="showRoadmap"
      :milestones="parsedProjectConfig?.project?.roadmap?.milestones"
    />
    <ProjectTokenomics
      v-if="showTokenomics"
      :campaign-summary="campaignSummary"
      :loading="loading"
      :distribution="parsedProjectConfig?.project?.tokenomics?.distribution"
    />
    <ProjectTeam
      :members="members"
      :loading="isLoadingProjectConfig || loading"
    />
    <ProjectLinks
      v-if="showLinks"
      :links="parsedProjectConfig?.project?.links"
    />
  </div>
</template>
