<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <IgniteHeading as="div" class="text-center font-title text-5 m:text-7"
      >Team</IgniteHeading
    >

    <div class="-m-4 mt-6 flex flex-wrap justify-center m:-m-5 m:mt-9">
      <div
        v-for="member in members"
        :key="`${member.name}_${member.title}`"
        class="w-full flex-none p-4 m:w-[50%] m:p-5 xl:w-[25%]"
      >
        <ProjectTeamMember :member="member" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectTeam',

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

<script lang="ts" setup></script>

<script setup lang="ts">
import IgniteHeading from '../IgniteHeading.vue'
import ProjectTeamMember from './ProjectTeamMember.vue'
</script>

<style scoped lang="postcss"></style>
