<template>
  <div class="ignt-progress__container">
    <SpDenom
      v-if="denom"
      modifier="avatar"
      :denom="denom"
      :title="denom"
      size="small"
      class="mr-3"
    />

    <div
      class="ignt-progress"
      :class="inverse ? 'bg-white-1000' : 'bg-gray-50'"
    >
      <div
        v-for="item in items"
        :key="item.name"
        class="ignt-progress__inner text-center"
        :class="[
          label ? 'h-[20px]' : 'h-[16px]',
          item.split ? 'rounded-none' : 'rounded-r-lg',
          item.bgColor,
          item.bgColor === 'bg-primary' && `text-white-1000`
        ]"
        :style="{ width: `${item.value}%` }"
      >
        <span v-if="label" class="font-medium ignt-text text-1">
          <b>{{ item.value }}%</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SpDenom from '@starport/vue/src/components/SpDenom/SpDenom.vue'
import { defineComponent, PropType } from 'vue'

import { ProgressBarItem } from '../utils/types'

export default defineComponent({
  name: 'IgniteProgressBar',
  components: { SpDenom },
  props: {
    inverse: {
      type: Boolean
    },
    label: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array as PropType<ProgressBarItem[]>,
      required: true
    },
    denom: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="postcss">
.ignt-progress {
  @apply overflow-hidden relative flex w-full rounded-lg text-0;

  &__container {
    @apply flex items-center justify-center;
  }

  &__inner {
    @apply flex items-center justify-center;
  }
}
</style>
