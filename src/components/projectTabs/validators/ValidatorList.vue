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
      <button
        class="rounded-sm bg-primary py-4 px-6 text-2 text-bg transition duration-200 hover:brightness-90 active:brightness-75 disabled:bg-inactive disabled:brightness-100"
        :disabled="isFetchingNextPage"
        @click="fetchNextPage"
      >
        View more
      </button>
    </div>
    <div v-if="!isLoading && genesisValidatorsAll.length === 0">
      <span>- No validators yet -</span>
    </div>
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
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import {
  LaunchChain,
  LaunchGenesisValidator,
  LaunchQueryGetGenesisValidatorResponse
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import useChain from '../../../composables/useChain'
import useGenesisValidatorAll from '../../../composables/useGenesisValidatorAll'

const props = defineProps({
  launchID: String
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
const { chainData } = useChain(props.launchID)
const {
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  genesisValidatorAllData
} = useGenesisValidatorAll(props.launchID)

/*
const { stakingValidatorsAllData } = useStakingValidatorAll()

onBeforeMount(async () => {
  // Cosmos Hub:
  const res = await fetch('https://api.cosmos.network/cosmos/staking/v1beta1/validators')
  console.log(res.json())
})*/

// computed
const chain = computed<LaunchChain>(() => {
  return chainData.value
})

const genesisValidatorsAll = computed<LaunchGenesisValidator[]>(() => {
  return mergePages(genesisValidatorAllData.value?.pages)
})
</script>
