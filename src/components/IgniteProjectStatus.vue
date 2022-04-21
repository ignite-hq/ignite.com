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
  campaignId: { type: String, required: true },
  launchId: { type: String, required: true },
  requestCount: { type: String, required: true },
  validatorCount: { type: String, required: true },
  stargazerCount: { type: String, required: true }
})

// computed
const requestsUrl = computed(() => {
  return `/projects/${props.launchId}/requests`
})

const validatorsUrl = computed(() => {
  return `/projects/${props.campaignId}/validators`
})
</script>

<template>
  <div class="status">
    <div class="status__item" title="Stargazers">
      <IconStar class="icon" />
      <IgniteText as="span">{{ stargazerCount }}</IgniteText>
    </div>

    <IgniteLink :to="requestsUrl">
      <div class="status__item status__item--clickable" title="Requests">
        <IconPlane class="icon" />
        <IgniteText as="span">{{ requestCount }}</IgniteText>
      </div>
    </IgniteLink>

    <IgniteLink :to="validatorsUrl" title="Validators">
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
