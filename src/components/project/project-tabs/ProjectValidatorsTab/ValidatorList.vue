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
  <div>
    <div class="flex flex-wrap justify-center">
      <ValidatorCard
        v-for="validator in campaignValidators?.validators"
        :key="validator[0]"
        :validator="validator[1]"
      />
    </div>
    <div v-if="!isLoading && campaignValidators?.validators.length === 0">
      <span>- No validators yet -</span>
    </div>
  </div>
</template>
