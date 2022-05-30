<script lang="ts" setup>
import useGenesisValidatorAllChains from '~/composables/validator/useGenesisValidatorAllChains'

import ValidatorCard from './ValidatorCard.vue'

interface Props {
  projectId: string
}

const props = defineProps<Props>()

// composables
const { campaignValidators, isLoading } = useGenesisValidatorAllChains(
  props.projectId
)
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
      v-for="validator in campaignValidators"
      :key="validator[0]"
      :validator="validator[1]"
    />
  </div>
</template>
