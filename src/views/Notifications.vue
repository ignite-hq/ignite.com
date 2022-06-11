<script lang="ts">
export default {
  name: 'Notifications'
}

enum UIStates {
  Fresh,
  Creating,
  Created,
  Error
}

export { UIStates }
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import IgniteEmptyState from '~/components/common/IgniteEmptyState.vue'
import NotificationsFilters from '~/components/notifications/NotificationsFilters/index.vue'
import NotificationsList from '~/components/notifications/NotificationsList.vue'
import NotificationsSettingsModal from '~/components/notifications/NotificationsSettingsModal.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

const notifications = [
  {
    day: 'Today',
    date: 'April 7',
    items: [
      {
        title: 'Fundraiser registration started',
        projectName: 'Project name',
        time: 'time'
      },
      {
        title: 'Fundraiser started',
        projectName: 'Project name',
        time: 'time'
      },
      {
        title: 'Fundraiser registration ended',
        projectName: 'Project name',
        time: 'time'
      },
      {
        title: '6,000 Token request on Testnet 2 approved',
        projectName: 'Project name',
        time: 'time'
      },
      [
        {
          title: 'Validator request from Stakefish',
          projectName: 'Project name',
          time: 'time'
        },
        {
          title: 'Validator request from Forbole',
          projectName: 'Project name',
          time: 'time'
        },
        {
          title: 'Validator request from X-validate',
          projectName: 'Project name',
          time: 'time'
        },
        {
          title: 'Validator request from Validator 4',
          projectName: 'Project name',
          time: 'time'
        },
        {
          title: 'Validator request from Validator 5',
          projectName: 'Project name',
          time: 'time'
        },
        {
          title: 'Validator request from Validator 6',
          projectName: 'Project name',
          time: 'time'
        },
        {
          title: 'Validator request from Validator 7',
          projectName: 'Project name',
          time: 'time'
        },
        {
          title: 'Validator request from Validator 8',
          projectName: 'Project name',
          time: 'time'
        }
      ]
    ]
  },
  {
    day: 'Yesterday',
    date: 'April 6',
    items: [
      {
        title: 'Fundraiser ended. You’ve received 60,000 vARCH.',
        projectName: 'Project name',
        time: 'time'
      },
      {
        title: 'Fundraiser ends in 1 day',
        projectName: 'Project name',
        time: 'time'
      },
      {
        title: 'Fundraiser started',
        projectName: 'Project name',
        time: 'time'
      }
    ]
  },
  {
    date: 'March 31',
    items: [
      {
        title: 'Your fundraiser registration ended',
        projectName: 'Project name',
        time: 'time'
      },
      {
        title: 'Testnet published 🎉',
        projectName: 'Project name',
        time: 'time'
      }
    ]
  },
  {
    date: 'June 27, 2021',
    items: [
      {
        title: 'Validator request from Stakefish received',
        projectName: 'Project name',
        time: 'time'
      },
      {
        title:
          'Testnet 1 did not launch. Countdown ended before 66.6% of tokens were online.',
        projectName: 'Project name',
        time: 'time'
      }
    ]
  }
]

// state
const isSettingsModalOpen = ref(false)
</script>

<template>
  <div>
    <div class="border-b border-border py-8 md:pt-10.5 md:pb-9.5">
      <div class="container md:flex md:items-center md:justify-between">
        <div class="">
          <IgniteHeading class="font-title text-5 font-semibold md:text-7"
            >Notification</IgniteHeading
          >
        </div>
        <div class="mt-5 md:mt-0">
          <IgniteButton
            color="gray"
            variant="primary"
            class="w-full max-w-[12.5rem]"
            @click="() => (isSettingsModalOpen = true)"
          >
            Settings
          </IgniteButton>
        </div>
      </div>
    </div>

    <div class="container mt-8 md:mt-10.5">
      <IgniteEmptyState v-if="!notifications.length"
        >No notifications yet</IgniteEmptyState
      >

      <div v-else class="grid grid-cols-1 gap-7 lg:grid-cols-12">
        <div class="lg:col-span-5 xl:col-span-4">
          <NotificationsFilters class="w-full lg:max-w-[20.75rem]" />
        </div>
        <div class="lg:col-span-7 xl:col-span-8">
          <NotificationsList :notifications="notifications" />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <NotificationsSettingsModal
      :visible="isSettingsModalOpen"
      @close="() => (isSettingsModalOpen = false)"
    />
  </div>
</template>
