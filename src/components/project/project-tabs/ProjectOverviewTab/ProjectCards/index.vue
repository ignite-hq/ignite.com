<script lang="ts">
export default {
  name: 'ProjectCards'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useCampaignSummary from '~/composables/campaign/useCampaignSummary'
import useCoordinatorFundraisers from '~/composables/fundraising/useCoordinatorFundraisers'

import ProjectCardFundraiser from './ProjectCardFundraiser.vue'
import ProjectCardValidator from './ProjectCardValidator.vue'

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'
const { campaignSummary, isLoading: isLoadingCampaignSummaries } =
  useCampaignSummary(projectId)

const coordinatorId = computed(() => {
  return campaignSummary.value?.campaign?.coordinatorID
})

const { fundraisersByCoordinator, isLoading: isLoadingCoordinatorFundraiser } =
  useCoordinatorFundraisers(coordinatorId)

const showValidatorCard = computed(() => {
  return (
    isLoadingCampaignSummaries.value ||
    Boolean(campaignSummary?.value?.rewards?.length)
  )
})

const showFundraiserCard = computed(() => {
  return (
    isLoadingCoordinatorFundraiser.value ||
    Boolean(fundraisersByCoordinator.value.length)
  )
})
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <div class="grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-12 xl:grid-cols-2">
      <div
        v-if="showFundraiserCard && showValidatorCard"
        class="px-0 lg:col-span-8 lg:col-start-3 xl:col-span-1 xl:col-start-auto"
      >
        <ProjectCardFundraiser
          :coordinator-id="coordinatorId"
          :is-ongoing="false"
        />
      </div>

      <div
        v-if="showValidatorCard && showFundraiserCard"
        class="px-0 lg:col-span-8 lg:col-start-3 xl:col-span-1 xl:col-start-auto"
      >
        <ProjectCardValidator
          v-if="showValidatorCard && showFundraiserCard"
          :campaign-summary="campaignSummary"
          :loading="isLoadingCampaignSummaries"
        />
      </div>

      <div v-if="showFundraiserCard" class="px-0 lg:col-span-12 xl:col-span-2">
        <ProjectCardFundraiser
          :coordinator-id="coordinatorId"
          :is-ongoing="true"
          :is-wide="true"
        />
      </div>
      <div v-if="showValidatorCard" class="px-0 lg:col-span-12 xl:col-span-2">
        <ProjectCardValidator
          :campaign-summary="campaignSummary"
          :loading="isLoadingCampaignSummaries"
          :is-wide="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
