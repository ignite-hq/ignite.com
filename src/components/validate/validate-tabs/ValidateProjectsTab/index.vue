<script lang="ts">
export default {
  name: 'ValidateProjectsTab'
}
</script>

<script lang="ts" setup>
import IgniteButton from '~/components/ui/IgniteButton.vue'
import ProjectEmptyState from '~/components/common/IgniteEmptyState.vue'

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
      rewards: [
        { denom: 'U', count: '20K UST' },
        { denom: 'T', count: '20% vTOKEN' }
      ]
    },
    distribution: {
      progressBar: [
        {
          value: 10,
          bgColor: 'bg-secondary',
          split: true
        },
        {
          value: 40,
          bgColor: 'bg-primary'
        },
        {
          value: '50'
        }
      ],
      legend: [
        {
          name: 'Yours',
          color: 'bg-secondary'
        },
        {
          name: 'Distributed',
          color: 'bg-primary'
        },
        {
          name: 'Undistributed'
        }
      ]
    },
    vouchers: {
      name: 'vYAWP',
      count: '4',
      percent: '4.00'
    }
  },
  {
    name: 'Archway',
    status: 'Accepted',
    testnet: {
      name: '2th Testnet',
      status: 'Accepting requests',
      date: 'June 20, 2022',
      validators: '20 accepted validators',
      rewards: [
        { denom: 'U', count: '20K UST' },
        { denom: 'T', count: '20% vTOKEN' }
      ]
    },
    fundraisers: {
      ongoing: 1,
      upcoming: 1,
      count: '0',
      name: 'TOKEN'
    },
    distribution: {
      progressBar: [
        {
          value: 40,
          bgColor: 'bg-primary'
        },
        {
          value: '60'
        }
      ],
      legend: [
        {
          name: 'Distributed',
          color: 'bg-primary'
        },
        {
          name: 'Undistributed'
        }
      ]
    },
    vouchers: {
      name: 'vARCH',
      count: '20,000',
      percent: '0.003'
    }
  },
  {
    name: 'Ignition #1',
    status: 'Accepted',
    testnet: {
      name: '1th Testnet',
      status: 'Accepting requests',
      date: 'June 20, 2022',
      validators: '20 accepted validators',
      rewards: [
        { denom: 'U', count: '20K UST' },
        { denom: 'T', count: '20% vTOKEN' }
      ]
    },
    distribution: {
      progressBar: [
        {
          value: 10,
          bgColor: 'bg-secondary',
          split: true
        },
        {
          value: 40,
          bgColor: 'bg-primary'
        },
        {
          value: '50'
        }
      ],
      legend: [
        {
          name: 'Yours',
          color: 'bg-secondary'
        },
        {
          name: 'Distributed',
          color: 'bg-primary'
        },
        {
          name: 'Undistributed'
        }
      ]
    },
    vouchers: {
      name: 'vTOKEN',
      count: '1,000,000',
      percent: '0.8'
    }
  },
  {
    name: 'Chihuahua',
    status: 'Validating',
    testnet: {
      name: 'Mainnet',
      status: 'Accepting requests',
      date: 'June 20, 2022',
      validators: '20 accepted validators'
    },
    distribution: {
      progressBar: [
        {
          value: 20,
          bgColor: 'bg-secondary',
          split: true
        },
        {
          value: 45,
          bgColor: 'bg-primary'
        },
        {
          value: '35'
        }
      ],
      legend: [
        {
          name: 'Yours',
          color: 'bg-secondary'
        },
        {
          name: 'Distributed',
          color: 'bg-primary'
        },
        {
          name: 'Undistributed'
        }
      ]
    },
    vouchers: {
      name: 'vHUAHUA',
      count: '400,000',
      percent: '4.125'
    }
  }
]
</script>

<template>
  <div class="container mt-7.5">
    <ProjectsHeader :projectLength="projects.length" />

    <div class="mt-7">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />

      <ProjectEmptyState>Empty text</ProjectEmptyState>
    </div>

    <div class="mt-8 text-center md:mt-10">
      <IgniteButton variant="primary" color="primary">View More</IgniteButton>
    </div>
  </div>
</template>
