<script lang="ts" setup>
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import { useTendermintSpnLaunch } from 'tendermint-spn-vue-client'
import { ref, watch } from 'vue'

import useCampaignChains from '~/composables/campaign/useCampaignChains'

import ValidatorCard from './ValidatorCard.vue'

const props = defineProps({
  projectId: { type: String, required: true }
})

// variables
const isLoading = ref(true)
const allGenesisValidators = ref<Validator[]>([])

// composables
const { queryGenesisValidatorAll } = useTendermintSpnLaunch()
const { campaignChains } = useCampaignChains(props.projectId)

// watchers
watch(campaignChains, (newVal) => {
  if (newVal?.pages && newVal?.pages[0].campaignChains?.chains) {
    getValidatorsFromAllChains(newVal.pages[0].campaignChains.chains)
  }
})

// methods
const getValidatorsFromAllChains = async (chains: string[]) => {
  const validatorsFromAllChains = await Promise.all(
    chains.map(async (chainId: string) => {
      return await queryGenesisValidatorAll(chainId.toString()).then(
        (r) => r.data
      )
    })
  )

  const reducedValidatorsFromAllChains = validatorsFromAllChains.flatMap(
    (chainValidators) => chainValidators?.genesisValidator || []
  )

  allGenesisValidators.value = [
    ...new Map(
      reducedValidatorsFromAllChains.map((validator) => [
        validator.address,
        validator
      ])
    ).values()
  ]
  isLoading.value = false
}
</script>

<template>
  <div
    v-if="!isLoading && allGenesisValidators.length === 0"
    class="mt-6 empty:m-0 md:mt-9"
  >
    <span>- No validators yet -</span>
  </div>
  <div
    v-else
    class="-m-4 mt-6 flex flex-wrap justify-center empty:m-0 md:-m-5 md:mt-9"
  >
    <ValidatorCard
      v-for="validator in allGenesisValidators"
      :key="validator"
      :validator="validator"
    />
  </div>
</template>
