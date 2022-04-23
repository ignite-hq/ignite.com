<script lang="ts">
export default {
  name: 'IgniteProjectHeader'
}
</script>

<script lang="ts" setup>
import { isEmpty, isNil } from 'lodash'
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed, reactive } from 'vue'

import useGitHubRepository from '../composables/useGitHubRepository'
import { getUserAndRepositoryFromUrl } from '../utils/github'
import IgniteBgWave from './IgniteBgWave.vue'
import IgniteBreadcrumbs from './IgniteBreadcrumbs.vue'
import IgniteGithubRepoLink from './IgniteGithubRepoLink.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteProjectActions from './IgniteProjectActions.vue'
import IgniteProjectNav from './IgniteProjectNav.vue'
import IgniteProjectStatus from './IgniteProjectStatus.vue'
import IgniteText from './IgniteText.vue'

interface Props {
  projectId: string
  campaignSummary?: CampaignCampaignSummary
  activeTab: string
}

const props = withDefaults(defineProps<Props>(), {
  campaignSummary: () => ({})
})

const navigation = reactive([
  {
    link: `/projects/${props.projectId}/overview`,
    title: 'Overview'
  },
  {
    link: `/projects/${props.projectId}/validators`,
    title: 'Validators'
  },
  {
    link: `/projects/${props.projectId}/requests`,
    title: 'Requests'
  },
  {
    link: `/projects/${props.projectId}/invest`,
    title: 'Invest'
  }
])

// variables
const githubUrl = props.campaignSummary?.mostRecentChain?.sourceURL ?? ''
const { githubUser, githubRepo } = getUserAndRepositoryFromUrl(githubUrl)

const defaultDescription =
  'A blockchain built with the Cosmos SDK and launched on the Ignite Network.'

// composables
const { repository } = useGitHubRepository(githubUser, githubRepo)

// computed
const breadcrumbsLinks = computed(() => {
  return [
    {
      link: `/`,
      title: 'Explore'
    },
    {
      link: `/projects/${props.projectId}/overview`,
      title: props.campaignSummary?.campaign?.campaignName
    }
  ]
})

const campaignName = computed(() => {
  if (!props.campaignSummary) return ''
  return props.campaignSummary?.campaign?.campaignName
})

const description = computed(() => {
  const description = repository.value?.description
  if (isNil(description) || isEmpty(description)) return defaultDescription
  return description
})
</script>

<template>
  <div>
    <div class="container-full px-6 xl:container">
      <div class="py-7.5">
        <IgniteBreadcrumbs :links="breadcrumbsLinks" />
      </div>

      <div class="pt-5.5 pb-8 md:pb-9">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-8 lg:grid-cols-6">
          <div class="px-0 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="md:flex">
              <div
                class="relative mb-6 h-9.5 w-9.5 shrink-0 rounded-md bg-primary md:mb-0 md:mr-7"
              >
                <div class="absolute inset-0 z-[2] overflow-hidden">
                  <IgniteBgWave />
                </div>
              </div>
              <div class="max-w-lg">
                <IgniteHeading
                  class="mb-6 font-title text-7 font-semibold md:text-8"
                >
                  {{ campaignName }}
                </IgniteHeading>
                <div class="item-center mb-7 lg:flex">
                  <IgniteGithubRepoLink
                    :github-url="campaignSummary?.mostRecentChain?.sourceURL"
                    class="mb-5 text-3 lg:mb-0 lg:mr-7"
                  />
                  <IgniteProjectStatus
                    :project-id="
                      campaignSummary?.mostRecentChain?.launchID ?? '0'
                    "
                    :campaign-id="campaignSummary?.campaign?.campaignID ?? '0'"
                    :validator-count="
                      campaignSummary?.mostRecentChain?.validatorNb ?? '0'
                    "
                    :request-count="
                      campaignSummary?.mostRecentChain?.requestNb ?? '0'
                    "
                    :stargazer-count="
                      repository?.stargazers_count?.toString() ?? '0'
                    "
                  />
                </div>
                <IgniteText class="text-2 text-muted md:text-3">
                  {{ description }}
                </IgniteText>
              </div>
            </div>
          </div>

          <div
            class="mt-6 px-0 md:col-span-2 md:mt-0 lg:col-span-1 lg:col-start-6"
          >
            <IgniteProjectActions />
          </div>
        </div>
      </div>
    </div>

    <div class="py-6 shadow-border_double">
      <div class="container-full px-6 xl:container">
        <IgniteProjectNav :items="navigation" :active-tab="activeTab" />
      </div>
    </div>

    <div class="relative bg-primary pb-[50%] md:pb-[33.33%]">
      <div class="absolute inset-0 z-[2] overflow-hidden">
        <IgniteBgWave />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
