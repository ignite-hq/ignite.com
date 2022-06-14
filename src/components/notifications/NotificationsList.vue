<script lang="ts">
export default {
  name: 'NotificationsList'
}
</script>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import IconCaret from '~/components/icons/IconCaret.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

import NotificationItem from './NotificationItem.vue'
import { Notification } from './utils'

interface Props {
  notifications: Notification[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <div
      v-for="notification in notifications"
      :key="notification.date"
      class="before:ml-8 before:block before:h-8 before:border-l before:border-border first:before:hidden md:before:ml-9.5 md:before:h-10.5"
    >
      <IgniteCard class="py-5">
        <IgniteHeading class="px-5 py-3 text-4 font-semibold md:p-6 md:text-5">
          <span v-if="notification.day">{{ notification.day }}</span>
          <span v-if="notification.day" class="text-inactive"> · </span>
          <span :class="notification.day && 'text-inactive'">{{
            notification.date
          }}</span>
        </IgniteHeading>

        <div
          v-for="(item, id) in notification.items"
          :key="`${notification.date}_${id}`"
          class="md:px-3"
        >
          <div v-if="Array.isArray(item)">
            <Disclosure v-slot="{ open }">
              <DisclosureButton class="relative w-full text-left">
                <IconCaret
                  :class="open ? 'rotate-0 transition-transform' : '-rotate-90'"
                  class="absolute top-[1.5rem] left-[0.4rem] md:left-[0.75rem]"
                />
                <NotificationItem
                  :data="{
                    ...item[0],
                    title: item[0].title + ` + ${item.length} other received`
                  }"
                  :border="false"
                  title-size="text-3"
                  :show-settings="false"
                  class="ml-4 md:ml-6"
                />
              </DisclosureButton>
              <DisclosurePanel class="ml-[2.7rem]">
                <NotificationItem
                  v-for="(innerItem, i) in item"
                  :key="`${notification.date}_${id}_${i}`"
                  :data="innerItem"
                  :border="false"
                  title-size="text-3"
                  :show-settings="false"
                  class="ml-4 md:ml-6"
                />
                <IgniteText
                  class="text-medium ml-[4.35rem] py-4 md:ml-[5.25rem] md:py-5"
                >
                  Load <span class="text-muted">8-16</span> of
                  <span class="text-muted">{{ item.length }}</span>
                </IgniteText>
              </DisclosurePanel>
            </Disclosure>
          </div>
          <NotificationItem
            v-else
            :data="item"
            :border="false"
            title-size="text-3"
            :show-settings="false"
            class="ml-4 md:ml-6"
          />
        </div>
      </IgniteCard>
    </div>

    <div class="mt-7 text-center md:mt-8.5">
      <IgniteButton variant="primary" color="primary" size="md">
        View more
      </IgniteButton>
    </div>
  </div>
</template>
