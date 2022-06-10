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
import NotificationsSettingsModal from '~/components/notifications/NotificationsSettingsModal.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

const notifications = [{}]

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
        <div class="lg:grid-cols-7 xl:col-span-8"></div>
      </div>
    </div>

    <!-- Modal -->
    <NotificationsSettingsModal
      :visible="isSettingsModalOpen"
      @close="() => (isSettingsModalOpen = false)"
    />
  </div>
</template>
