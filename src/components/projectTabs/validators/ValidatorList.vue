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
      <LayoutSpacer size="sm" />
      <!--<IgniteButton
        variant="primary"
        color="primary"
        class="px-6"
        :disabled="isFetchingNextPage"
        @click="fetchNextPage"
      >
        View more
      </IgniteButton>-->
    </div>
    <!--<div v-if="!isLoading && genesisValidatorsAll.length === 0">
      <span>- No validators yet -</span>
    </div>-->
    <hr />
    {{campaignChains}}
    <hr />
    {{chainList}}
    <hr />
    {{allGenesisValidators}}
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  watchEffect,
  defineComponent,
  ref,
  toRef,
  reactive,
  toRefs,
  watch,
  onBeforeMount
} from 'vue'
import LayoutSpacer from '../../atoms/LayoutSpacer.vue'
import ValidatorCard from './ValidatorCard.vue'
import IgniteText from '../../IgniteText.vue'
import IgniteHeading from '../../IgniteHeading.vue'
import IgniteButton from '../../IgniteButton.vue'
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import {
  LaunchChain,
  LaunchGenesisValidator,
  LaunchQueryGetGenesisValidatorResponse
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import useChain from '../../../composables/useChain'
import useGenesisValidatorAll from '../../../composables/useGenesisValidatorAll'
import useCampaignChains from '../../../composables/useCampaignChains'
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'

const props = defineProps({
  projectID: { type: String, required: true }
})

const { campaignChains } = useCampaignChains(toRef(props, 'projectID'))

const chainList = computed<string[]>(() =>
  campaignChains?.value?.pages && campaignChains?.value?.pages[0].campaignChains?.chains || []
)

const allGenesisValidators = computed<Validator>(() => {
  let validatorsFromAllChains = chainList?.value?.map((chainID: string) => {
    let { genesisValidatorAll } = useGenesisValidatorAll(chainID.toString())
    return genesisValidatorAll
  })
    .reduce(
      (acc, chainValidators) => [...acc, ...(chainValidators?.value?.pages && chainValidators?.value?.pages[0].genesisValidator || [])],
      []
    )
  let uniqueValidatorsFromAllChains = [...new Map(validatorsFromAllChains
    .map(validator => [validator.address, validator])).values()]

  return uniqueValidatorsFromAllChains
})
</script>
