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
      <ProjectCardStatus class="project-card__row" :loading="loading" />

      <ProjectCardInvest v-if="!loading" class="project-card__row _gray" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgntProjectCard'
}
</script>

<script lang="ts" setup>
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'

import ProjectCardHeader from './ProjectCardHeader.vue'
import ProjectCardDescription from './ProjectCardDescription.vue'
import ProjectCardShareAllocation from './ProjectCardShareAllocation.vue'
import ProjectCardIncentives from './ProjectCardIncentives.vue'
import ProjectCardStatus from './ProjectCardStatus.vue'
import ProjectCardInvest from './ProjectCardInvest.vue'

interface Props {
  loading: boolean
  project: LaunchChain
}

const { project } = defineProps<Props>()
</script>

<style scoped lang="scss">
.project-card {
  overflow: hidden;
  border-radius: px2rem(20);
  background: #ffffff;
  box-shadow: 16px 32px 128px 8px rgba(0, 0, 0, 0.07);

  &__row {
    padding: var(--spacing-7) var(--spacing-6);
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    @media (min-width: 960px) {
      padding-inline: px2rem(40);
    }
    &:first-child {
      padding-top: px2rem(52);
      border-top: 0;
    }
    &._gray {
      padding-top: var(--spacing-6);
      padding-bottom: px2rem(52);
      border-top: 0;

      background: var(--black-50);
    }
  }
  &__line {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    padding-inline: 8px;
    svg {
      margin-right: 4px;
    }
  }
  &__top-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }
}
</style>
