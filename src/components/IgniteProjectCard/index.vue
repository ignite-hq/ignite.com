<template>
  <div class="project-card">
    <ProjectCardHeader :loading="loading" />
    <div>
      <ProjectCardDescription
        :project="project"
        class="project-card__row"
        :loading="loading"
      />
      <ProjectCardShareAllocation v-if="!loading" class="project-card__row" />
      <ProjectCardIncentives v-if="!loading" class="project-card__row" />
      <ProjectCardStatus :loading="loading" class="project-card__row" />
      <ProjectCardInvest v-if="!loading" class="project-card__row _gray" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteProjectCard'
}
</script>

<script lang="ts" setup>
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { PropType } from 'vue'

import ProjectCardDescription from './ProjectCardDescription.vue'
import ProjectCardHeader from './ProjectCardHeader.vue'
import ProjectCardIncentives from './ProjectCardIncentives.vue'
import ProjectCardInvest from './ProjectCardInvest.vue'
import ProjectCardShareAllocation from './ProjectCardShareAllocation.vue'
import ProjectCardStatus from './ProjectCardStatus.vue'

defineProps({
  loading: Boolean,
  project: {
    type: Object as PropType<LaunchChain>,
    default: () => ({})
  }
})
</script>

<style scoped lang="postcss">
.project-card {
  @apply overflow-hidden bg-white-1000 rounded-md;
  box-shadow: 16px 32px 128px 8px rgba(0, 0, 0, 0.07);

  &__row {
    @apply py-7 px-6 m:px-7.5 border-t border-gray-70;
    &:first-child {
      @apply pt-8.5 border-t-0;
    }
    &._gray {
      @apply pt-6 pb-8.5 border-t-0 bg-gray-50;
    }
  }
}
</style>
