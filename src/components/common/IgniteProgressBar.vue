<script lang="ts">
import { defineComponent, PropType } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { ProgressBarItem } from '~/utils/types'

export default defineComponent({
  name: 'IgniteProgressBar',
  components: { IgniteText, IgniteDenom },
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
    },
    size: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <div class="ignite-progress__container">
    <IgniteDenom
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
        class="ignite-progress__inner text-center"
        :class="[
          label && 'h-[20px]',
          !label && size === 'xs' ? 'h-3' : 'h-4',
          item.split ? 'rounded-none' : 'rounded-r-lg',
          item.bgColor,
          item.bgColor === 'bg-primary' && `text-white-1000`
        ]"
        :style="{ width: `${item.value}%` }"
      >
        <IgniteText v-if="label" as="span" class="text-1 font-medium">
          <b>{{ item.value }}%</b>
        </IgniteText>
      </div>
    </div>
  </div>
</template>

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
