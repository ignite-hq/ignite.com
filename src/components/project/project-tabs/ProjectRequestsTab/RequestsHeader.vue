<script lang="ts">
export default {
  name: 'RequestsHeader'
}
</script>

<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'
import dayjs from 'dayjs'
import { computed } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteGithubRepoLink from '~/components/common/IgniteGithubRepoLink.vue'
import IconCaret from '~/components/icons/IconCaret.vue'
import IconStack from '~/components/icons/IconStack.vue'
import ProjectStatus from '~/components/project/ProjectHeader/ProjectStatus.vue'
import SlideDown from '~/components/transitions/SlideDown.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import usePopulatedCampaignChains from '~/composables/campaign/usePopulatedCampaignChains'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { useRequestsStore } from '~/stores/requests-store'
import { getIncentivesSummary, getVouchersSummary } from '~/utils/reward'

interface Props {
  campaignSummary?: CampaignCampaignSummary
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  campaignSummary: undefined
})

// store
const store = useRequestsStore()

const campaignId = computed(() => {
  return props.campaignSummary?.campaign?.campaignID
})

const { campaignChains, isLoading: isLoadingCampaignChains } =
  usePopulatedCampaignChains(campaignId)

const isLoading = computed(() => {
  return props.loading || isLoadingCampaignChains.value
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

const chainsForDropdown = computed(() => {
  return campaignChains.value?.chains ?? []
})

const currentChain = computed(() => {
  const chainIndex = campaignChains.value?.chains.findIndex(
    ({ launchID }) => launchID === store.selectedChain
  )

  if (chainIndex === undefined) return undefined

  return {
    chain: campaignChains.value?.chains[chainIndex],
    index: chainIndex
  }
})

const isMainnet = computed(() => {
  return Boolean(currentChain.value?.chain?.isMainnet)
})

const isTestnet = computed(() => {
  return !currentChain.value?.chain?.isMainnet
})

const statusText = computed(() => {
  if (currentChain.value?.chain?.launchTriggered) {
    const launchTimestamp = dayjs.unix(
      Number(currentChain.value?.chain?.launchTimestamp)
    )
    return dayjs().isAfter(launchTimestamp)
      ? 'Launching soon'
      : 'Awaiting Launch'
  }

  return 'Accepting requests'
})

const showVouchers = computed(() => {
  return Boolean(vouchersSummary.value.denoms.length)
})

const showIncentives = computed(() => {
  return Boolean(incentivesSummary.value.denoms.length)
})

const showLaunched = computed(() => {
  return Boolean(currentChain.value?.chain?.launchTriggered)
})
</script>

<template>
  <div class="grid grid-cols-1 gap-4 text-left lg:gap-7 xl:grid-cols-12">
    <div class="md:col-span-4">
      <IgniteText class="text-2 text-muted">Launch ID 4</IgniteText>
      <IgniteLoader v-if="isLoading" class="mt-5 h-8" />

      <IgniteHeading
        v-else-if="chainsForDropdown.length === 1"
        class="mt-5 flex items-center font-title text-7 font-semibold xl:text-8"
      >
        {{ isMainnet ? 'Mainnet' : 'Testnet' }}
        {{ currentChain?.index! + 1 }}
      </IgniteHeading>

      <Listbox v-else v-slot="{ open }" v-model="store.selectedChain">
        <div class="relative">
          <ListboxButton
            class="mt-5 flex items-center font-title text-7 font-semibold xl:text-8"
          >
            <span>
              {{ isMainnet ? 'Mainnet' : 'Testnet' }}
              {{ currentChain?.index! + 1 }}
            </span>

            <IconCaret class="ml-3 shrink-0" :class="open && 'rotate-180'" />
          </ListboxButton>

          <SlideDown>
            <ListboxOptions
              class="translate-0 absolute left-0 top-[100%] z-10 max-h-[20rem] min-w-full overflow-auto rounded-xs bg-white-1000 shadow-select transition-transform"
            >
              <ListboxOption
                v-for="(chain, index) of chainsForDropdown"
                :key="chain.launchID"
                v-slot="{ selected, active }"
                :value="chain.launchID"
                as="template"
              >
                <li
                  class="flex cursor-pointer items-center border-b border-border px-7 py-5 transition-opacity last:border-0"
                  :class="{
                    'text-primary': selected,
                    'bg-gray-30': active
                  }"
                >
                  {{ chain.isMainnet ? 'Mainnet' : 'Testnet' }}
                  {{ index + 1 }}
                </li>
              </ListboxOption>
            </ListboxOptions>
          </SlideDown>
        </div>
      </Listbox>

      <div class="item-center mt-5 md:flex">
        <IgniteGithubRepoLink
          :loading="isLoading"
          github-url="https://github.com/JoseRFelix/neptune"
          class="mb-5 text-3 md:mb-0 md:mr-7"
        />
        <ProjectStatus
          v-if="campaignId"
          :loading="isLoading"
          :project-id="campaignId"
          :campaign-id="'0'"
          :validator-count="'0'"
          :request-count="'0'"
          :stargazer-count="'0'"
        />
      </div>

      <IgniteLoader v-if="isLoading" class="mt-7 h-8 w-[32rem] !max-w-none" />
      <IgniteText v-else class="mt-7 max-w-[21.25rem] text-2 text-muted">
        Final testnet before our upcoming mainnet launch with incentivized
        rewards for helping to test the network.
      </IgniteText>
    </div>

    <div
      class="-mx-6 mt-7 flex flex-wrap md:flex-nowrap xl:col-span-8 xl:mt-0 xl:items-end xl:justify-end"
    >
      <div v-if="isLoading" class="px-6 md:mb-0">
        <IgniteLoader class="h-8 w-screen !max-w-md" />
      </div>

      <div v-else class="flex items-center">
        <div v-if="isMainnet || isTestnet" class="mb-6 px-6 md:mb-0">
          <IgniteText as="div" class="text-2 text-muted">Type</IgniteText>
          <IgniteText as="div" class="ignite-badge text-medium mt-2 text-4">{{
            isMainnet ? 'Mainnet' : 'Testnet'
          }}</IgniteText>
        </div>

        <div v-if="showLaunched" class="mb-6 px-6 md:mb-0">
          <IgniteText as="div" class="text-2 text-muted">Launched</IgniteText>
          <IgniteText as="div" class="text-medium mt-2 py-1 text-4">{{
            dayjs
              .unix(Number(currentChain?.chain?.launchTimestamp))
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
              statusText
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
  </div>
</template>

<style scoped lang="postcss"></style>
