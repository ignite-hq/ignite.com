<script lang="ts" setup>
import { toRef } from 'vue'

import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import useAllGenesisValidators from '~/composables/validator/useGenesisValidatorAllChains'

import ValidatorCard from './ValidatorCard.vue'

interface Props {
  projectId: string
}

const props = defineProps<Props>()

// composables
const { campaignValidators, isLoading } = useAllGenesisValidators(
  toRef(props, 'projectId')
)
</script>

<template>
  <div v-if="isLoading" class="flex w-full flex-wrap justify-center">
    <IgniteLoader class="loading-card" />
    <IgniteLoader class="loading-card" />
    <IgniteLoader class="loading-card" />
  </div>

  <div
    v-else-if="!isLoading && campaignValidators?.length === 0"
    class="mt-6 empty:m-0 md:mt-9"
  >
    <span>- No validators yet -</span>
  </div>

  <div
    v-else
    class="-m-4 mt-6 flex flex-wrap justify-center empty:m-0 md:-m-5 md:mt-9"
  >
    <ValidatorCard
      v-for="validator in campaignValidators"
      :key="validator.address"
      :validator="validator"
    />
  </div>
</template>

<style scoped lang="postcss">
.loading-card {
  @apply m-4 h-[20rem] w-full !max-w-none flex-none rounded p-4 md:w-[50%] md:p-5 xl:w-[25%];
}
</style>
