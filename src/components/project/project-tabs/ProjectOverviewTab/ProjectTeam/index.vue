<script lang="ts">
export default {
  name: 'ProjectTeam'
}
</script>

<script setup lang="ts">
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'

import { ProjectMember } from '../types'
import ProjectTeamMember from './ProjectTeamMember.vue'

interface Props {
  members: ProjectMember[]
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  members: () => []
})
</script>

<template>
  <div class="container">
    <IgniteHeading as="div" class="text-center font-title text-5 md:text-7"
      >Team</IgniteHeading
    >
    <div class="-m-4 mt-6 flex flex-wrap justify-center md:-m-5 md:mt-9">
      <div v-if="loading" class="flex w-full flex-wrap justify-center">
        <IgniteLoader class="member-card member-card--loader" />
        <IgniteLoader class="member-card member-card--loader" />
        <IgniteLoader class="member-card member-card--loader" />
      </div>
      <div
        v-for="member in members"
        v-else
        :key="`${member.name}_${member.title}`"
        class="member-card"
      >
        <ProjectTeamMember :member="member" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.member-card {
  @apply w-full flex-none p-4 md:w-[50%] md:p-5 xl:w-[25%];

  &--loader {
    @apply m-4 h-[20rem] !max-w-none rounded;
  }
}
</style>
