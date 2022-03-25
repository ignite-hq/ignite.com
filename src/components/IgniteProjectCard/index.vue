<template>
  <div class="project-card">
    <ProjectCardHeader :loading="loading" />
    <div>
      <ProjectCardDescription :loading="loading" class="project-card__row" />
      <ProjectCardShareAllocation v-if="!loading" class="project-card__row" />
      <ProjectCardIncentives v-if="!loading" class="project-card__row" />
      <ProjectCardStatus :loading="loading" class="project-card__row" />

      <ProjectCardInvest v-if="!loading" class="project-card__row _gray" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ProjectCardHeader from './ProjectCardHeader.vue'
import ProjectCardDescription from './ProjectCardDescription.vue'
import ProjectCardShareAllocation from './ProjectCardShareAllocation.vue'
import ProjectCardIncentives from './ProjectCardIncentives.vue'
import ProjectCardStatus from './ProjectCardStatus.vue'
import ProjectCardInvest from './ProjectCardInvest.vue'

export default defineComponent({
  name: 'IgniteProjectCard',

  props: {
    project: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean
    }
  },

  components: {
    ProjectCardHeader,
    ProjectCardDescription,
    ProjectCardShareAllocation,
    ProjectCardIncentives,
    ProjectCardStatus,
    ProjectCardInvest
  },

  setup(props) {
    const { project, loading } = props;

    return {
      project,
      loading
    }
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
