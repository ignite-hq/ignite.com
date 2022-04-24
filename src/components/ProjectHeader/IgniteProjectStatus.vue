<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectStatus'
})
</script>

<script setup lang="ts">
import IgniteLink from '../ui/atoms/IgniteLink.vue'
import IgniteText from '../ui/atoms/IgniteText.vue'
import IconPlane from '../ui/icons/IconPlane.vue'
import IconStage from '../ui/icons/IconStage.vue'
import IconStar from '../ui/icons/IconStar.vue'

defineProps({
  projectId: { type: String, required: true },
  requestCount: { type: String, required: true },
  validatorCount: { type: String, required: true },
  stargazerCount: { type: String, required: true }
})
</script>

<template>
  <div class="status">
    <div class="status__item" title="Stargazers">
      <IconStar class="icon" />
      <IgniteText as="span">{{ stargazerCount }}</IgniteText>
    </div>

    <IgniteLink :to="`/projects/${projectId}/requests`">
      <div class="status__item status__item--clickable" title="Requests">
        <IconPlane class="icon" />
        <IgniteText as="span">{{ requestCount }}</IgniteText>
      </div>
    </IgniteLink>

    <IgniteLink :to="`/projects/${projectId}/validators`" title="Validators">
      <div class="status__item status__item--clickable">
        <IconStage class="icon" />
        <IgniteText as="span">{{ validatorCount }}</IgniteText>
      </div>
    </IgniteLink>

    <div class="status__item">
      <IgniteText as="span" class="ignite-badge">testnet</IgniteText>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.status {
  @apply -mx-3 flex items-center text-2 font-medium;

  &__item {
    @apply flex items-center justify-center px-3;

    &--clickable {
      @apply cursor-pointer select-none hover:opacity-80 active:opacity-70;
    }
  }
}

.icon {
  @apply mr-1 h-5 w-5 text-primary;
}
</style>
