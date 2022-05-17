<script lang="ts">
export default {
  name: 'ProjectHeader'
}
</script>

<script lang="ts" setup>
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed, reactive } from 'vue'

import IgniteBreadcrumbs from '~/components/common/IgniteBreadcrumbs.vue'
import IgniteGithubRepoLink from '~/components/common/IgniteGithubRepoLink.vue'
import IgniteBgWave from '~/components/ui/IgniteBgWave.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useCampaignChains from '~/composables/campaign/useCampaignChains'
import useGitHubRepository from '~/composables/github/useGitHubRepository'
import { getCampaignStatus } from '~/utils/campaign'

import ProjectActions from './ProjectActions.vue'
import ProjectNav from './ProjectNav.vue'
import ProjectStatus from './ProjectStatus.vue'

interface Props {
  projectId: string
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
    link: `/projects/${props.projectId}/fundraisers`,
    title: 'Fundraisers'
  }
])

// variables
const defaultDescription =
  'A blockchain built with the Cosmos SDK and launched on the Ignite Network.'

const githubUrl = computed(() => {
  return props.campaignSummary?.mostRecentChain?.sourceURL
})

// composables
const { repository, isLoading: isLoadingGithubRepository } =
  useGitHubRepository(githubUrl)
const { campaignChains, isLoading: isLoadingCampaignChains } =
  useCampaignChains(props.projectId)

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
  return isLoadingGithubRepository.value || props.loading
})

const isLoadingProjectStatus = computed(() => {
  return isLoadingCampaignChains.value || isLoading.value
})

const status = computed(() => {
  const chains = campaignChains?.value?.chains ?? []
  const isMainnetInitialized =
    props.campaignSummary.campaign?.mainnetInitialized

  return getCampaignStatus(isMainnetInitialized ?? false, chains)
})
</script>

<template>
  <div>
    <div class="container">
      <div class="py-7.5">
        <IgniteBreadcrumbs :links="breadcrumbsLinks" />
      </div>

      <div class="pt-5.5 pb-8 lg:pb-9">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-8 lg:grid-cols-12">
          <div class="px-0 md:col-span-8 lg:col-span-7 xl:col-span-6">
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
                <IgniteText class="text-2 text-muted">
                  Project ID {{ projectId }}
                </IgniteText>
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
                    :loading="isLoadingProjectStatus"
                    :status="status"
                    :project-id="projectId ?? '0'"
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
                  class="h-7 w-[32rem] !max-w-md"
                />
                <IgniteText v-else class="max-w-md text-2 text-muted md:text-3">
                  {{ description }}
                </IgniteText>

                <div class="mt-7">
                  <ProjectActions />
                </div>
              </div>
            </div>
          </div>

          <div
            class="-mx-6 mt-6 px-0 md:col-span-8 lg:col-span-5 lg:mx-0 lg:mt-0 xl:col-span-6"
          >
            <div
              class="relative bg-primary pb-[56.17%] lg:rounded"
              :class="isLoading ? 'bg-border' : 'bg-primary'"
            >
              <div class="absolute inset-0 z-[2] overflow-hidden">
                <IgniteBgWave />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-border pb-5.5 md:pb-0">
      <div class="container">
        <ProjectNav :items="navigation" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
