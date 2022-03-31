<template>
  <div class="status">
    <div class="status__item">
      <IconStar class="icon" />
      <span class="ignt-text">{{ stargazerCount }}</span>
    </div>
    <div class="status__item">
      <IconPlane class="icon" />
      <span class="ignt-text">{{ requestCount }}</span>
    </div>
    <div class="status__item">
      <IconStage class="icon" />
      <span class="ignt-text">{{ validatorCount }}</span>
    </div>
    <div class="status__item">
      <span class="ignt-text ignt-badge">testnet</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus'
})
</script>

<script setup lang="ts">
import IconPlane from './icons/IconPlane.vue'
import IconStage from './icons/IconStage.vue'
import IconStar from './icons/IconStar.vue'

defineProps({
  requestCount: { type: String, required: true },
  validatorCount: { type: String, required: true },
  stargazerCount: { type: String, required: true }
})
</script>

<style scoped lang="postcss">
.status {
  @apply flex items-center -mx-3 font-medium text-2;

  &__item {
    @apply flex justify-center items-center px-3;
  }
}

.icon {
  @apply w-5 h-5 text-primary mr-1;
}
</style>
