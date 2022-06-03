<script lang="ts">
export default {
  name: 'ValidateRequestsTab'
}
</script>

<script lang="ts" setup>
import ProjectEmptyState from '~/components/common/IgniteEmptyState.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'

import RequestsHeader from './RequestsHeader.vue'
import RequestsTable from './RequestsTable.vue'

const projectRequests = [
  {
    name: 'Project Name',
    type: 'Request to validate',
    actionIcon: 'validator',
    launchID: 4,
    content: {
      genesisValidator: {}
    },
    status: 'Accepted'
  },
  {
    name: 'Project Name',
    type: 'Request to validate',
    actionIcon: 'stack',
    content: {
      genesisAccount: {
        coins: [
          {
            amount: 2000,
            denom: 'YAWP'
          }
        ]
      }
    },
    status: 'Accepted'
  },
  {
    name: 'Project Name',
    type: 'Request for tokens',
    actionIcon: 'stack',
    content: {
      genesisAccount: {
        coins: [
          {
            amount: 2000,
            denom: 'OSMO'
          }
        ]
      }
    },
    status: 'Declined',
    statusReason: 'Upcoming mainnet launch'
  },
  {
    name: 'Project Name',
    type: 'Parameter change',
    actionIcon: 'transition',
    content: {
      genesisUpdate: {
        percent: 5.5
      }
    },
    status: 'Pending'
  },
  {
    name: 'Project Name',
    type: 'Request to validate',
    actionIcon: 'validator',
    content: {
      genesisValidator: {}
    },
    status: 'Pending'
  }
]

const isLoading = false
</script>

<template>
  <div class="container mt-7.5">
    <RequestsHeader project-length="22,000" />

    <div class="mt-7">
      <RequestsTable
        v-if="projectRequests.length > 0 || isLoading"
        :loading="isLoading"
        :requests="projectRequests"
      />

      <ProjectEmptyState>Empty text</ProjectEmptyState>
    </div>

    <div class="mt-8 text-center md:mt-10">
      <IgniteButton variant="primary" color="primary">View More</IgniteButton>
    </div>
  </div>
</template>
