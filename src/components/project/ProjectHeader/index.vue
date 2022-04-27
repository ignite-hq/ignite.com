<script lang="ts">
export default {
  name: 'ProjectHeader'
}
</script>

<script lang="ts" setup>
import { computed, reactive } from 'vue'

import IgniteBreadcrumbs from '~/components/common/IgniteBreadcrumbs.vue'
import IgniteGithubRepoLink from '~/components/common/IgniteGithubRepoLink.vue'
import IgniteBgWave from '~/components/ui/IgniteBgWave.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useGitHubRepository from '~/composables/github/useGitHubRepository'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'

import ProjectActions from './ProjectActions.vue'
import ProjectNav from './ProjectNav.vue'
import ProjectStatus from './ProjectStatus.vue'

interface Props {
  projectId: string
  activeTab: string
  campaignSummary?: CampaignCampaignSummary
  loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
  campaignSummary: () => ({}),
  loading: false
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
const defaultDescription =
  'A blockchain built with the Cosmos SDK and launched on the Ignite Network.'

const githubUrl = computed(() => {
  return props.campaignSummary?.mostRecentChain?.sourceURL
})

// composables
const { repository, isFetching } = useGitHubRepository(githubUrl)

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
  if (!description || description.length === 0) return defaultDescription
  return description
})

const isLoading = computed(() => {
  return isFetching.value || props.loading
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
              <!-- Profile Icon -->
              <IgniteLoader
                v-if="isLoading"
                class="mb-6 h-9.5 w-9.5 rounded-md md:mb-0 md:mr-7"
              />
              <div
                v-else
                class="relative mb-6 h-9.5 w-9.5 shrink-0 rounded-md bg-primary md:mb-0 md:mr-7"
              >
                <div class="absolute inset-0 z-[2] overflow-hidden">
                  <IgniteBgWave />
                </div>
              </div>

              <div class="max-w-lg">
                <IgniteLoader v-if="isLoading" class="mb-6 h-8" />
                <IgniteHeading
                  v-else
                  class="mb-6 font-title text-7 font-semibold md:text-8"
                >
                  {{ campaignName }}
                </IgniteHeading>

                <div class="item-center mb-7 lg:flex">
                  <IgniteGithubRepoLink
                    :loading="isLoading"
                    :github-url="campaignSummary?.mostRecentChain?.sourceURL"
                    class="mb-5 text-3 lg:mb-0 lg:mr-7"
                  />
                  <ProjectStatus
                    :loading="isLoading"
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

                <IgniteLoader
                  v-if="isLoading"
                  class="h-7 w-[32rem] !max-w-none"
                />
                <IgniteText v-else class="text-2 text-muted md:text-3">
                  {{ description }}
                </IgniteText>
              </div>
            </div>
          </div>

          <div
            class="mt-6 px-0 md:col-span-2 md:mt-0 lg:col-span-1 lg:col-start-6"
          >
            <ProjectActions />
          </div>
        </div>
      </div>
    </div>

    <div class="py-6 shadow-border_double">
      <div class="container-full px-6 xl:container">
        <ProjectNav :items="navigation" :active-tab="activeTab" />
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
