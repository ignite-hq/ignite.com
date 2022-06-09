<script lang="ts">
export default {
  name: 'ProjectOverviewTab'
}
</script>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed, toRef } from 'vue'
import yaml from 'yamljs'

import usePopulatedCampaignChains from '~/composables/campaign/usePopulatedCampaignChains'
import useGitHubFile from '~/composables/github/useGitHubFile'
import useGitHubRepository from '~/composables/github/useGitHubRepository'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { LaunchChain } from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'

import ProjectCards from './ProjectCards/index.vue'
import ProjectDescription from './ProjectDescription.vue'
import ProjectLinks from './ProjectLinks/index.vue'
import ProjectRoadmap from './ProjectRoadmap.vue'
import ProjectTeam from './ProjectTeam/index.vue'
import ProjectTokenomics from './ProjectTokenomics.vue'
import ProjectWhitepaper from './ProjectWhitepaper.vue'
import {
  ProjectMember,
  ProjectMilestone,
  ProjectYaml,
  RoadmapStatus
} from './types'

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

const loadingProp = toRef(props, 'loading')

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

const campaignId = computed(() => {
  return props.campaignSummary?.campaign?.campaignID
})

const { campaignChains, isLoading: isLoadingCampaignChains } =
  usePopulatedCampaignChains(campaignId)

// methods

function getMilestoneDate(unix: number) {
  return dayjs.unix(unix).format('YYYY-MM-DD')
}

function getChainMilestone(
  index: number,
  length: number,
  chain: LaunchChain
): ProjectMilestone {
  const milestone: ProjectMilestone = {
    title: chain.isMainnet ? 'Mainnet launched' : `Testnet ${index + 1}`,
    date: getMilestoneDate(Number(chain.createdAt)),
    status:
      index === length - 1 ? RoadmapStatus.Active : RoadmapStatus.Completed
  }

  return milestone
}

// computed
const isLoadingDescription = computed(() => {
  return (
    isReadmeLoading.value ||
    isRepositoryLoading.value ||
    isProjectConfigLoading.value
  )
})

const isLoadingRoadmap = computed(() => {
  return (
    isLoadingCampaignChains.value ||
    isProjectConfigLoading.value ||
    loadingProp.value
  )
})

const isLoadingTokenomics = computed(() => {
  return isProjectConfigLoading.value || loadingProp.value
})

const isLoadingTeam = computed(() => {
  return isLoadingProjectConfig.value || loadingProp.value
})

const isLoadingProjectConfig = computed(() => {
  return isRepositoryLoading.value || isProjectConfigLoading.value
})

const parsedProjectConfig = computed(() => {
  return yaml.parse(projectConfig.value ?? '') as ProjectYaml | undefined
})

const members = computed<ProjectMember[]>(() => {
  const projectConfigMembers =
    parsedProjectConfig?.value?.project?.team?.members

  const projectName = props.campaignSummary?.campaign?.campaignName
  const campaignSummaryMembers: ProjectMember[] = [
    {
      name: `${projectName} Coordinator`,
      title: 'Coordinator'
    }
  ]

  return projectConfigMembers ?? campaignSummaryMembers
})

const roadmapItems = computed<ProjectMilestone[]>(() => {
  const projectConfigRoadmap =
    parsedProjectConfig?.value?.project?.roadmap.milestones

  const chainsMilestones: ProjectMilestone[] =
    campaignChains.value?.chains?.map((chain, index, array) =>
      getChainMilestone(index, array.length, chain)
    ) ?? []

  const campaignSummaryMilestones: ProjectMilestone[] = [
    {
      title: 'Project started',
      date: getMilestoneDate(
        Number(props.campaignSummary?.campaign?.createdAt)
      ),
      status: RoadmapStatus.Completed
    },
    ...chainsMilestones
  ]

  return projectConfigRoadmap ?? campaignSummaryMilestones
})

const showProjectDescription = computed(() => {
  return Boolean(readme.value) || isLoadingDescription.value
})

const showWhitepaper = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.whitepaper?.url) ||
    isLoadingProjectConfig.value
  )
})

const showTokenomics = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.tokenomics?.distribution) ||
    isLoadingProjectConfig.value
  )
})

const showLinks = computed(() => {
  return (
    Boolean(parsedProjectConfig.value?.project?.links) ||
    isLoadingProjectConfig.value
  )
})
</script>

<template>
  <div class="space-y-8 pt-8 md:space-y-10.5 md:pt-10.5">
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
      :loading="isLoadingRoadmap"
      :project-name="campaignSummary?.campaign?.campaignName ?? ''"
      :milestones="roadmapItems"
    />
    <ProjectTokenomics
      v-if="showTokenomics"
      :campaign-summary="campaignSummary"
      :loading="isLoadingTokenomics"
      :distribution="parsedProjectConfig?.project?.tokenomics?.distribution"
    />
    <ProjectTeam :members="members" :loading="isLoadingTeam" />
    <ProjectLinks
      v-if="showLinks"
      :links="parsedProjectConfig?.project?.links"
    />
  </div>
</template>
