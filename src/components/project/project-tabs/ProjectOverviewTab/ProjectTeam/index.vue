<script lang="ts">
export default {
  name: 'ProjectTeam'
}
</script>

<script setup lang="ts">
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

import { ProjectMember } from '../types'
import ProjectTeamMember from './ProjectTeamMember.vue'

interface Props {
  members: ProjectMember[]
}

withDefaults(defineProps<Props>(), {
  members: () => []
})
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <IgniteHeading as="div" class="text-center font-title text-5 md:text-7"
      >Team</IgniteHeading
    >

    <div class="-m-4 mt-6 flex flex-wrap justify-center md:-m-5 md:mt-9">
      <div
        v-for="member in members"
        :key="`${member.name}_${member.title}`"
        class="w-full flex-none p-4 md:w-[50%] md:p-5 xl:w-[25%]"
      >
        <ProjectTeamMember :member="member" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
