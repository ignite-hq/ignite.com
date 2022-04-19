<template>
  <div
    class="flex h-[30rem] w-full flex-col items-center justify-center space-y-6 rounded-6sm bg-[#F9F9F9]"
  >
    <div
      class="flex h-[46px] w-[46px] items-center justify-center rounded-circle border-2 border-primary"
    >
      <IconCheckMarkThin class="h-[1.2rem] w-[1.2rem] stroke-2" />
    </div>

    <IgniteText class="font-title text-4 text-muted"><slot /></IgniteText>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsEmptyState'
}
</script>

<script lang="ts" setup>
import IconCheckMarkThin from '../icons/IconCheckMarkThin.vue'
import IgniteText from '../IgniteText.vue'
</script>
