<template>
  <div>
    <div class="mb-6 ignt-text font-medium text-2 text-muted text-center">
      Incentives
    </div>
    <div class="flex items-center justify-center mb-6">
      <div class="logo mr-3" />
      <div class="text-center ignt-title text-5 font-semibold">
        $40,000
      </div>
    </div>
    <div class="text-center ignt-text text-2 text-muted">
      Past incentives: $20,000
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardIncentives'
}
</script>

<style scoped lang="postcss">
.logo {
  @apply w-6 h-6 shrink-0 bg-gray-50 rounded-circle;
}
</style>
