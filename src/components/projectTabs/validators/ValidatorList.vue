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
      <IgniteButton
        variant="primary"
        color="primary"
        class="px-6"
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
  LaunchGenesisValidator,
  LaunchQueryGetGenesisValidatorResponse
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed, toRef } from 'vue'

import useGenesisValidatorAll from '../../../composables/useGenesisValidatorAll'
import LayoutSpacer from '../../atoms/LayoutSpacer.vue'
import IgniteButton from '../../IgniteButton.vue'
import ValidatorCard from './ValidatorCard.vue'

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
const {
  isLoading,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  genesisValidatorAllData
} = useGenesisValidatorAll(toRef(props, 'launchID'))

const genesisValidatorsAll = computed<LaunchGenesisValidator[]>(() => {
  return mergePages(genesisValidatorAllData.value?.pages)
})
</script>
