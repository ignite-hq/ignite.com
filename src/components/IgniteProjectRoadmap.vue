<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus'
})
</script>

<script lang="ts" setup>
import IgniteHeading from './IgniteHeading.vue'
import IgniteRoadmap from './IgniteRoadmap.vue'
import IgniteScrollableSection from './IgniteScrollableSection.vue'
import IgniteText from './IgniteText.vue'

const roadmapItems = [
  {
    status: 'complited',
    name: 'Project started',
    date: 'November 2021'
  },
  {
    status: 'complited',
    name: 'Testnet 1',
    date: 'November 2021'
  },
  {
    status: 'complited',
    name: 'Testnet 2',
    date: 'December 2021'
  },
  {
    status: 'complited',
    name: 'Milestone 3',
    date: 'January 2022',
    description:
      'Brief description ipsum dolor sit amet, consectetur adipiscing elit. Ut at nunc tincidunt, volutpat massa fringilla, dapibus urna.'
  },
  {
    status: 'complited',
    name: 'Testnet 3',
    date: 'January 2022'
  },
  {
    status: 'active',
    name: 'Testnet 4',
    date: 'February 2022'
  },
  {
    name: 'Keplr integration',
    date: 'June 2022',
    description:
      'Brief description ipsum dolor sit amet, consectetur adipiscing elit ut at nunc tincidunt.'
  },
  {
    name: 'Mainnet',
    date: 'Jule 2022',
    description:
      'Brief description ipsum dolor sit amet, consectetur adipiscing elit. Ut at nunc tincidunt, volutpat massa fringilla, dapibus urna.'
  }
]
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <IgniteHeading as="div" class="text-center font-title text-5 md:text-7">
      Roadmap and history
    </IgniteHeading>
    <IgniteText as="div" class="mt-6 text-center text-3 text-muted">
      Key milestones for the Project Name project
    </IgniteText>

    <div class="relative mt-7 md:mt-9">
      <IgniteScrollableSection>
        <IgniteRoadmap :items="roadmapItems" />
      </IgniteScrollableSection>
    </div>
  </div>
</template>

<style lang="postcss"></style>
