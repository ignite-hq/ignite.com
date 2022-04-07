<template>
  <div class="ignite-progress__container">
    <SpDenom
      v-if="denom"
      modifier="avatar"
      :denom="denom"
      :title="denom"
      size="small"
      class="mr-3"
    />

    <div
      class="ignite-progress"
      :class="inverse ? 'bg-white-1000' : 'bg-gray-50'"
    >
      <div
        v-for="item in items"
        :key="item.name"
        :class="[item.bgColor]"
        :style="{ width: `${item.value}%` }"
      >
        <span class="ignite-text text-1 font-medium">
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
.ignite-progress {
  @apply relative flex w-full overflow-hidden rounded-lg text-0;

  &__container {
    @apply flex items-center justify-center;
  }

  &__inner {
    @apply flex items-center justify-center;
  }
}
</style>
