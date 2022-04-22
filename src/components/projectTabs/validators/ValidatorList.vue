<script lang="ts" setup>
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import { watch, ref } from 'vue'

import useCampaignChains from '../../../composables/useCampaignChains'
import ValidatorCard from './ValidatorCard.vue'
import { useTendermintSpnLaunch } from 'tendermint-spn-vue'

const props = defineProps({
  projectId: { type: String, required: true }
})

// variables
let isLoading = ref(true)
let allGenesisValidators = ref<Validator[]>([])

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
  let validatorsFromAllChains = await Promise.all(
    chains.map(async (chainId: string) => {
      return await queryGenesisValidatorAll(chainId.toString()).then(
        (r) => r.data
      )
    })
  )

  let reducedValidatorsFromAllChains = validatorsFromAllChains.reduce(
    (acc, chainValidators) => [
      ...acc,
      ...(chainValidators?.genesisValidator || [])
    ],
    []
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
  <div>
    <div class="flex flex-wrap justify-center">
      <ValidatorCard
        v-for="validator in allGenesisValidators"
        :key="validator"
        :validator="validator"
      />
    </div>
    <div v-if="!isLoading && allGenesisValidators.length === 0">
      <span>- No validators yet -</span>
    </div>
  </div>
</template>
