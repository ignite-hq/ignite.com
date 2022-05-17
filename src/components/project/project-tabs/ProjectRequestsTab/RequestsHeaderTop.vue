<script lang="ts">
export default {
  name: 'RequestsHeaderTop'
}
</script>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteGithubRepoLink from '~/components/common/IgniteGithubRepoLink.vue'
import IconStack from '~/components/icons/IconStack.vue'
import ProjectStatus from '~/components/project/ProjectHeader/ProjectStatus.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useCampaignChains from '~/composables/campaign/useCampaignChains'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { getCampaignStatus, ProjectStatusEnvironment } from '~/utils/campaign'
import { getIncentivesSummary, getVouchersSummary } from '~/utils/reward'

interface Props {
  campaignSummary?: CampaignCampaignSummary
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  campaignSummary: undefined
})

const projectId = computed(() => {
  return props.campaignSummary?.campaign?.campaignID
})

const { campaignChains, isLoading: isLoadingCampaignChains } =
  useCampaignChains(projectId)

const isLoading = computed(() => {
  return props.loading || isLoadingCampaignChains.value
})

const status = computed(() => {
  const chains = campaignChains.value?.pages[0].campaignChains?.chains ?? []
  const isMainnetInitialized =
    props.campaignSummary.campaign?.mainnetInitialized

  return getCampaignStatus(isMainnetInitialized ?? false, chains)
})

const isMainnet = computed(() => {
  return status.value === ProjectStatusEnvironment.Mainnet
})

const isTestnet = computed(() => {
  return status.value === ProjectStatusEnvironment.Testnet
})

const vouchersSummary = computed(() => {
  const campaignId = props.campaignSummary?.campaign?.campaignID
  const rewards = props.campaignSummary?.rewards
  return getVouchersSummary(campaignId ?? '', rewards)
})

const incentivesSummary = computed(() => {
  const campaignId = props.campaignSummary?.campaign?.campaignID
  const rewards = props.campaignSummary?.rewards
  return getIncentivesSummary(campaignId ?? '', rewards)
})

const showVouchers = computed(() => {
  return Boolean(vouchersSummary.value.denoms.length)
})

const showIncentives = computed(() => {
  return Boolean(incentivesSummary.value.denoms.length)
})
</script>

<template>
  <div class="grid grid-cols-1 gap-4 text-left lg:gap-7 xl:grid-cols-12">
    <div class="md:col-span-4">
      <IgniteText class="text-2 text-muted">Launch ID 4</IgniteText>
      <IgniteLoader v-if="isLoading" class="mt-5 h-8" />
      <IgniteHeading
        v-else
        class="mt-5 font-title text-7 font-semibold xl:text-8"
      >
        Testnet 4
      </IgniteHeading>
      <div class="item-center mt-5 md:flex">
        <IgniteGithubRepoLink
          :loading="isLoading"
          github-url="https://github.com/JoseRFelix/neptune"
          class="mb-5 text-3 md:mb-0 md:mr-7"
        />
        <ProjectStatus
          :loading="isLoading"
          :project-id="projectId ?? ''"
          :campaign-id="'0'"
          :validator-count="'0'"
          :request-count="'0'"
          :stargazer-count="'0'"
        />
      </div>

      <IgniteLoader v-if="isLoading" class="mt-7 h-7 w-[32rem] !max-w-none" />
      <IgniteText v-else class="mt-7 max-w-[21.25rem] text-2 text-muted">
        Final testnet before our upcoming mainnet launch with incentivized
        rewards for helping to test the network.
      </IgniteText>
    </div>

    <div
      class="-mx-6 mt-7 flex flex-wrap md:flex-nowrap xl:col-span-8 xl:mt-0 xl:items-end xl:justify-end"
    >
      <div v-if="isMainnet || isTestnet" class="mb-6 px-6 md:mb-0">
        <IgniteText as="div" class="text-2 text-muted">Type</IgniteText>
        <IgniteText as="div" class="ignite-badge text-medium mt-2 text-4">{{
          isMainnet ? 'Mainnet' : 'Testnet'
        }}</IgniteText>
      </div>
      <div class="mb-6 px-6 md:mb-0">
        <IgniteText as="div" class="text-2 text-muted">Launched</IgniteText>
        <IgniteText as="div" class="text-medium mt-2 py-1 text-4">{{
          dayjs
            .unix(Number(campaignSummary?.campaign?.createdAt))
            .format('DD.MM.YYYY')
        }}</IgniteText>
      </div>
      <div class="mb-6 px-6 md:mb-0">
        <IgniteText as="div" class="text-2 text-muted">Status</IgniteText>
        <div class="mt-2 flex items-center">
          <div
            class="mr-3 flex h-5 w-5 items-center justify-center rounded-circle border border-border after:h-[0.625rem] after:w-[0.625rem] after:rounded-circle after:bg-primary"
          ></div>
          <IgniteText as="div" class="text-medium py-1 text-4">{{
            isMainnet ? 'Awaiting launch' : 'Accepting requests'
          }}</IgniteText>
        </div>
      </div>

      <div v-if="showVouchers" class="mb-6 px-6 md:mb-0">
        <IgniteText as="div" class="text-2 text-muted"
          >Share allocation</IgniteText
        >
        <div class="mt-2 flex items-center">
          <IconStack class="mr-3" />
          <IgniteText as="div" class="text-medium py-1 text-4"
            >{{ vouchersSummary.avgSharePercentage }}%</IgniteText
          >
        </div>
      </div>

      <div v-if="showIncentives" class="px-6">
        <IgniteText as="div" class="text-2 text-muted">Incentives</IgniteText>
        <div class="mt-2 flex items-center">
          <IgniteDenom
            modifier="avatar"
            :denom="incentivesSummary?.denoms[0]"
            :title="incentivesSummary?.denoms[0]"
            size="small"
            class="mr-3"
          />
          <IgniteText as="div" class="text-medium py-1 text-4"
            ><IgniteNumber :number="incentivesSummary.total" />
            {{ incentivesSummary.denoms[0] }}</IgniteText
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
