<script lang="ts" setup>
import {
  LaunchGenesisValidator,
  LaunchQueryGetGenesisValidatorResponse
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import { computed, toRef } from 'vue'

import useGenesisValidatorAll from '../../../composables/useGenesisValidatorAll'
import useCampaignChains from '../../../composables/useCampaignChains'
import IgniteButton from '../../IgniteButton.vue'
import ValidatorCard from './ValidatorCard.vue'

const props = defineProps({
  launchId: { type: String, required: true }
})

// methods
function mergePages(
  pages: LaunchQueryGetGenesisValidatorResponse[] = []
): LaunchGenesisValidator[] {
  return pages.reduce(
    (acc, page) => [...acc, ...(page?.genesisValidator ?? [])],
    [] as LaunchGenesisValidator[]
  )
}

// composables
const {
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  genesisValidatorAllData
} = useGenesisValidatorAll(toRef(props, 'launchId'))

const genesisValidatorsAll = computed<LaunchGenesisValidator[]>(() => {
  return mergePages(genesisValidatorAllData.value?.pages)
})

const props = defineProps({
  projectID: { type: String, required: true }
})

const { campaignChains } = useCampaignChains(toRef(props, 'projectID'))

const chainList = computed<string[]>(
  () =>
    (campaignChains?.value?.pages &&
      campaignChains?.value?.pages[0].campaignChains?.chains) ||
    []
)

const allGenesisValidators = computed<Validator>(() => {
  let validatorsFromAllChains = chainList?.value
    ?.map((chainID: string) => {
      let { genesisValidatorAll } = useGenesisValidatorAll(chainID.toString())
      return genesisValidatorAll
    })
    .reduce(
      (acc, chainValidators) => [
        ...acc,
        ...((chainValidators?.value?.pages &&
          chainValidators?.value?.pages[0].genesisValidator) ||
          [])
      ],
      []
    )
  let uniqueValidatorsFromAllChains = [
    ...new Map(
      validatorsFromAllChains.map((validator) => [validator.address, validator])
    ).values()
  ]

  return uniqueValidatorsFromAllChains
})
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <ValidatorCard
        v-for="validator in genesisValidatorsAll"
        :key="validator"
        :validator="validator"
      />
    </div>
    <div v-if="hasNextPage">
      <IgniteButton
        variant="primary"
        color="primary"
        class="mt-4 px-6"
        :disabled="isFetchingNextPage"
        @click="fetchNextPage"
      >
        View more
      </IgniteButton>
    </div>
    <div v-if="!isLoading && genesisValidatorsAll.length === 0">
      <span>- No validators yet -</span>
    </div>
  </div>
</template>
