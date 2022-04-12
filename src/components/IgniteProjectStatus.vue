<template>
  <div class="status">
    <div class="status__item" title="Stargazers">
      <IconStar class="icon" />
      <IgniteText as="span">{{ stargazerCount }}</IgniteText>
    </div>
    <IgniteLink :to="requestsUrl">
      <div class="status__item" title="Request count">
        <IconPlane class="icon" />
        <IgniteText as="span">{{ requestCount }}</IgniteText>
      </div>
    </IgniteLink>
    <div class="status__item" title="Validator count">
      <IconStage class="icon" />
      <IgniteText as="span">{{ validatorCount }}</IgniteText>
    </div>
    <div class="status__item">
      <IgniteText as="span" class="ignite-badge">testnet</IgniteText>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus'
})
</script>

<script setup lang="ts">
import IconPlane from './icons/IconPlane.vue'
import IconStage from './icons/IconStage.vue'
import IconStar from './icons/IconStar.vue'
import IgniteLink from './IgniteLink.vue'
import IgniteText from './IgniteText.vue'

const props = defineProps({
  requestCount: { type: String, required: true },
  validatorCount: { type: String, required: true },
  stargazerCount: { type: String, required: true },
  projectId: { type: String, required: true }
})

const requestsUrl = computed(() => {
  return `/projects/${props.projectId}/requests`
})
</script>

<style scoped lang="postcss">
.status {
  @apply -mx-3 flex items-center text-2 font-medium;

  &__item {
    @apply flex items-center justify-center px-3;
  }
}

.icon {
  @apply mr-1 h-5 w-5 text-primary;
}
</style>
