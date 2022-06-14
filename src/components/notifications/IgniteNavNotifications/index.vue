<script lang="ts">
export default {
  name: 'IgniteNavNotifications'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IconEyes from '~/components/icons/IconEyes.vue'
import IconNotifications from '~/components/icons/IconNotifications.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'

import NotificationItem from '../NotificationItem.vue'
import { NotificationItem as NotificationItemType } from '../utils'

// state
const areNotificationsOpen = ref(false)

const notifications = ref([
  {
    title:
      'Testnet 1 did not launch. Countdown ended before 66.6% of tokens were online.',
    projectName: 'Project name',
    time: 'time'
  },
  {
    title: 'Token request from ignt234...3c4 + 17 others received',
    projectName: 'Project name',
    time: 'time'
  },
  {
    status: 'failed',
    title: 'New project creation failed',
    time: 'time'
  },
  {
    status: 'approved',
    title: 'Validator request on Strange Clan + 1 other were approved',
    time: 'time'
  },
  {
    title:
      'Validator request from <span class="text-muted">Stakefish</span> + 1 other received',
    projectName: 'Project name',
    time: 'time'
  },
  {
    title:
      '<span class="text-warning">⚠️</span> Testnet 1 now includes Stakefish as a validator which has 33.3% voting power',
    projectName: 'Project name',
    time: 'time'
  }
] as NotificationItemType[])

// methods
function onOpenNotifications() {
  areNotificationsOpen.value = !areNotificationsOpen.value
}

function onHideNotifications() {
  areNotificationsOpen.value = false
}

function clearNotifications() {
  notifications.value = []
  areNotificationsOpen.value = false
}
</script>

<template>
  <div v-click-outside="onHideNotifications" class="relative flex">
    <IgniteLink
      class="relative z-[2] !items-start justify-between rounded-t-xs bg-white-1000 text-text hover:text-primary md:hidden md:py-4 md:px-5"
      to="/notifications"
    >
      <IconNotifications />
      <div
        v-if="notifications.length"
        class="h-2 w-2 rounded-circle bg-notification"
      />
    </IgniteLink>

    <IgniteButton
      class="relative z-[2] hidden !items-start justify-between rounded-t-xs bg-white-1000 text-text hover:text-primary md:flex md:py-4 md:px-5"
      @click="onOpenNotifications"
    >
      <IconNotifications />
      <div
        v-if="notifications.length"
        class="h-2 w-2 rounded-circle bg-notification"
      />
    </IgniteButton>
    <Transition>
      <div
        v-if="areNotificationsOpen"
        class="absolute top-full right-0 w-[25rem] overflow-hidden rounded-b-xs rounded-tl-xs bg-white-1000 shadow-dropdown"
      >
        <div
          v-if="!notifications.length"
          class="py-8 px-5 text-center text-muted"
        >
          <div
            class="mx-auto flex h-[46px] w-[46px] items-center justify-center rounded-circle border-2 border-muted"
          >
            <IconCheckMarkThin class="h-[1.2rem] w-[1.2rem] stroke-2" />
          </div>
          <IgniteHeading as="div" class="mt-6 font-title text-4"
            >No notifications</IgniteHeading
          >
        </div>
        <div v-else>
          <NotificationItem
            v-for="notification in notifications"
            :key="notification?.title"
            :data="notification"
            :border="true"
            title-size="text-2"
            :show-settings="true"
          />
        </div>
        <div class="px-5 pt-5 pb-6 text-center">
          <IgniteLink
            to="/notifications"
            class="block w-full rounded-sm bg-gray-30 p-5 text-center font-semibold text-muted hover:text-text"
            @click="onHideNotifications"
            >View past notifications</IgniteLink
          >
          <IgniteButton
            v-if="notifications.length"
            class="mt-5"
            @click="clearNotifications"
          >
            <IconEyes class="mr-3" />
            <span>Mark all as seen</span>
          </IgniteButton>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-all;
}

.v-enter-from,
.v-leave-to {
  @apply -translate-y-2 opacity-0;
}
</style>
