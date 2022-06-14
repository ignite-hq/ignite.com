<script lang="ts">
/* eslint-disable vue/no-v-html */
export default {
  name: 'NotificationItem'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconCanceledCircle from '~/components/icons/IconCanceledCircle.vue'
import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IconDots from '~/components/icons/IconDots.vue'
import IconNotificationsMute from '~/components/icons/IconNotificationsMute.vue'
import IgniteBgWave from '~/components/ui/IgniteBgWave.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

import { NotificationItem, NotificationStatus } from './utils'

interface Props {
  titleSize: string
  border: boolean
  showSettings: boolean
  data: NotificationItem
}

withDefaults(defineProps<Props>(), {
  titleSize: 'text-3',
  border: false,
  showSettings: false
})

// state
const settingsOpened = ref(false)

// methods
function openSettings() {
  settingsOpened.value = true
}
function closeSettings() {
  settingsOpened.value = false
}
</script>

<template>
  <div
    class="relative z-[1] flex items-start justify-between p-5 text-2"
    :class="border && 'border-b border-border'"
  >
    <div class="flex" :class="data.status ? 'items-center' : 'items-start'">
      <div class="mr-4">
        <IconCanceledCircle
          v-if="data.status === NotificationStatus.Failed"
          class="h-[1.875rem] w-[1.875rem] stroke-[1.5] text-error"
        />
        <div
          v-else-if="data.status === NotificationStatus.Approved"
          class="flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-circle border-2 border-primary"
        >
          <IconCheckMarkThin
            class="h-[0.875rem] w-[0.875rem] stroke-2 text-primary"
          />
        </div>
        <div
          v-else
          class="relative h-[1.875rem] w-[1.875rem] overflow-hidden rounded-xs bg-primary"
        >
          <IgniteBgWave />
        </div>
      </div>
      <div :class="titleSize === 'text-2' && 'max-w-[12.125rem]'">
        <IgniteHeading
          as="div"
          :class="[
            titleSize === 'text-2' && 'text-2 font-semibold',
            titleSize === 'text-3' && 'text-3 font-medium'
          ]"
          v-html="data.title"
        />
        <IgniteText v-if="data.projectName" as="div" class="text-muted">{{
          data.projectName
        }}</IgniteText>
      </div>
    </div>
    <div class="flex items-center">
      <IgniteText as="div" class="text-muted" :class="showSettings && 'mr-4'">{{
        data.time
      }}</IgniteText>
      <IgniteButton
        v-if="showSettings"
        class="!text-muted hover:!text-primary"
        @click="openSettings"
      >
        <IconDots class="" />
      </IgniteButton>
    </div>

    <Transition>
      <div
        v-if="settingsOpened && showSettings"
        class="absolute inset-0 z-[2] flex justify-between bg-[#f7f7f7] py-3 px-5"
      >
        <div class="flex flex-col items-start justify-around">
          <IgniteButton class="!text-muted hover:!text-text">
            <IconNotificationsMute class="mr-3" />
            <span>Silence these types of notifications</span>
          </IgniteButton>
          <IgniteButton
            v-if="data.projectName"
            class="!text-muted hover:!text-text"
          >
            <div
              class="relative mr-3 h-5 w-5 overflow-hidden rounded-xs bg-primary"
            >
              <IgniteBgWave />
            </div>
            <span
              >Silence notifications for the
              {{ data.projectName }} project</span
            >
          </IgniteButton>
        </div>
        <div class="flex flex-col justify-start pt-[0.625rem]">
          <IgniteButton
            class="!text-text hover:!text-muted"
            @click="closeSettings"
          >
            <IconCanceled class="stroke-[1.5]" />
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
  @apply translate-x-2 opacity-0;
}
</style>
