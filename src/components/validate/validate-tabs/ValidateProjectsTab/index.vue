<script lang="ts">
export default {
  name: 'ValidateProjectsTab'
}
</script>

<script lang="ts" setup>
import IgniteButton from '~/components/ui/IgniteButton.vue'

import ProjectCard from './ProjectCard.vue'
import ProjectsHeader from './ProjectsHeader.vue'

const projects = [
  {
    name: 'Strange Clan',
    status: 'Accepted',
    testnet: {
      name: '4th Testnet',
      status: 'Accepting requests',
      date: 'June 20, 2022',
      validators: '20 accepted validators',
      rewards: [{ count: '20K UST' }, { count: '20% vTOKEN' }]
    },
    fundraisers: {},
    distribution: {},
    vouchers: {}
  },
  {
    name: 'Archway',
    status: 'Accepted',
    testnet: {},
    fundraisers: {},
    distribution: {},
    vouchers: {}
  },
  {
    name: 'Ignition #1',
    status: 'Accepted',
    testnet: {},
    fundraisers: {},
    distribution: {},
    vouchers: {}
  },
  {
    name: 'Chihuahua',
    status: 'Validating',
    testnet: {},
    fundraisers: {},
    distribution: {},
    vouchers: {}
  }
]
</script>

<template>
  <div class="container mt-7.5">
    <ProjectsHeader />

    <div class="mt-7">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>

    <div class="mt-8 text-center md:mt-10">
      <IgniteButton variant="primary" color="primary">View More</IgniteButton>
    </div>
  </div>
</template>
