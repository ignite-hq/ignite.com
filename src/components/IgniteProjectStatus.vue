<template>
  <div class="status">
    <div class="status__item">
      <IconStar class="icon" />
      <IgniteText as="span">{{ stargazerCount }}</IgniteText>
    </div>
    <div class="status__item">
      <IconPlane class="icon" />
      <IgniteText as="span">{{ requestCount }}</IgniteText>
    </div>
    <router-link
      :to="{ path: `/projects/${campaignID}/validators` }"
      v-on:click.stop
      title="Validators"
      class="status__item cursor-pointer select-none hover:opacity-80 active:opacity-70"
    >
      <IconStage class="icon" />
      <IgniteText as="span">{{ validatorCount }}</IgniteText>
    </router-link>
    <div class="status__item">
      <IgniteText as="span" class="ignite-badge">testnet</IgniteText>
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
import IgniteText from './IgniteText.vue'

defineProps({
  campaignID: { type: String, required: true },
  launchID: { type: String, required: true },
  requestCount: { type: String, required: true },
  validatorCount: { type: String, required: true },
  stargazerCount: { type: String, required: true }
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
