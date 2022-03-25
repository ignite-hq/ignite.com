<template>
  <div class="ignt-progress__container">
    <div v-if="logo" class="logo mr-3" />

    <div class="ignt-progress" :class="inverse ? 'bg-white-1000' : 'bg-gray-50'">
      <div
        v-for="item in items"
        :key="item.name"
        class="ignt-progress__inner text-center h-[20px]"
        :class="[
          item.split ? 'rounded-none' : 'rounded-r-lg',
          item.bgColor,
          item.bgColor === 'bg-primary' && `text-white-1000`
        ]"
        :style="{ 'width': `${item.value}%`}"
      >
        <span class="ignt-text font-medium text-1">
          <b>{{ item.value }}%</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProgressBar',

  props: {
    inverse: {
      type: Boolean
    },
    items: {
      type: Array,
      required: true
    },
    logo: {
      type: String
    },
  },

  setup(props) {
    const { items, logo } = props;

    return {
      items,
      logo
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
