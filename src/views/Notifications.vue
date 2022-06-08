<script lang="ts">
export default {
  name: 'Notifications'
}
</script>

<script lang="ts" setup>
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteEmptyState from '~/components/common/IgniteEmptyState.vue'

const notifications = []
</script>

<template>
  <div>
    <div class="border-b border-border pt-10.5 pb-9.5">
      <div class="container flex items-center justify-between">
        <div class="">
          <IgniteHeading class="font-title text-7 font-semibold"
            >Notification</IgniteHeading
          >
        </div>
        <div class="">
          <IgniteButton color="gray" variant="primary">Settings</IgniteButton>
        </div>
      </div>
    </div>

    <div class="container mt-10.5">
      <IgniteEmptyState v-if="!notifications.length"
        >No notifications yet</IgniteEmptyState
      >
    </div>
  </div>
</template>
