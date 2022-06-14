<script lang="ts">
export default {
  name: 'IgniteEmptyState'
}
</script>

<script lang="ts" setup>
import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-center space-y-6 rounded-6sm bg-[#F9F9F9] py-10.5"
  >
    <div
      class="flex h-[46px] w-[46px] items-center justify-center rounded-circle border-2 border-muted"
    >
      <IconCheckMarkThin class="h-[1.2rem] w-[1.2rem] stroke-2 text-muted" />
    </div>

    <IgniteText class="font-title text-3 text-muted sm:text-4"
      ><slot
    /></IgniteText>
  </div>
</template>
