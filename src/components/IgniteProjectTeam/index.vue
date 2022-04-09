<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div class="ignite-title font-title text-center text-5 m:text-7">Team</div>

    <div class="mt-6 m:mt-9 flex justify-center flex-wrap -m-4 m:-m-5">
      <div
        v-for="member in members"
        :key="`${member.name}_${member.title}`"
        class="flex-none w-[100%] m:w-[50%] xl:w-[25%] p-4 m:p-5"
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
import ProjectTeamMember from './ProjectTeamMember.vue'
</script>

<style scoped lang="postcss"></style>
