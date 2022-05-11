<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectTeam',

  data() {
    return {
      members: [
        {
          name: 'Member Name',
          company: 'Title',
          title: 'Co-founder & CEO',
          info: 'Bio lorem consequat efficitur iaculis. Nam eu tincidunt nunc. Cras sit amet pulvinar tortor, a porta purususi. Orci varius natoque penatibus...'
        },
        {
          name: 'Member Name',
          company: 'Title',
          title: 'Co-founder & Head of Design',
          info: 'Bio lorem consequat efficitur iaculis. Nam eu tincidunt nunc. Cras sit amet pulvinar tortor, a porta purususi. Orci varius natoque penatibus...'
        },
        {
          name: 'Member Name',
          company: 'Title',
          title: 'DevOPs',
          info: 'Bio lorem consequat efficitur iaculis. Nam eu tincidunt nunc. Cras sit amet pulvinar tortor, a porta purususi.'
        }
      ]
    }
  }
})
</script>

<script setup lang="ts">
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

import ProjectTeamMember from './ProjectTeamMember.vue'
</script>

<template>
  <IgniteContainer>
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
  </IgniteContainer>
</template>

<style scoped lang="postcss"></style>
