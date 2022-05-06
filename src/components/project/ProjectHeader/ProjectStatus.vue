<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectStatus'
})
</script>

<script setup lang="ts">
import IconPlane from '~/components/icons/IconPlane.vue'
import IconStage from '~/components/icons/IconStage.vue'
import IconStar from '~/components/icons/IconStar.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

defineProps({
  projectId: { type: String, required: true },
  requestCount: { type: String, required: true },
  validatorCount: { type: String, required: true },
  stargazerCount: { type: String, required: true },
  status: { type: Boolean, default: true },
  loading: { type: Boolean, default: false }
})
</script>

<template>
  <IgniteLoader v-if="loading" class="h-6 w-12" />
  <div v-else v-bind="$attrs" class="status">
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

    <div v-if="status" class="status__item">
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
