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
        class="px-6 mt-4"
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
const { chainData } = useChain(toRef(props, 'launchID'))
const {
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  genesisValidatorAllData
} = useGenesisValidatorAll(toRef(props, 'launchID'))

// computed
const chain = computed<LaunchChain>(() => {
  return chainData.value
})

const genesisValidatorsAll = computed<LaunchGenesisValidator[]>(() => {
  return mergePages(genesisValidatorAllData.value?.pages)
})
</script>
