<template>
  <div class="ignt-progress__container">
    <SpDenom
      v-if="denom"
      modifier="avatar"
      :denom="denom"
      :title="denom"
      size="small"
      class="mr-3 logo"
    />

    <div
      class="ignt-progress"
      :class="inverse ? 'bg-white-1000' : 'bg-gray-50'"
    >
      <div
        v-for="item in items"
        :key="item.name"
        class="ignt-progress__inner text-center h-[20px]"
        :class="[
          item.split ? 'rounded-none' : 'rounded-r-lg',
          item.bgColor,
          item.bgColor === 'bg-primary' && `text-white-1000`
        ]"
        :style="{ width: `${item.value}%` }"
      >
        <span class="font-medium ignt-text text-1">
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
.logo {
  @apply relative shrink-0 rounded-circle bg-gray-50 w-6 h-6;
}

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
