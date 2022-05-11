<script lang="ts">
export default {
  name: 'ProjectStatus'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import IconPlane from '~/components/icons/IconPlane.vue'
import IconStage from '~/components/icons/IconStage.vue'
import IconStar from '~/components/icons/IconStar.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { ProjectStatusEnvironment } from '~/utils/campaign'

interface Props {
  projectId: string
  stargazerCount?: string
  requestCount?: string
  validatorCount?: string
  status?: ProjectStatusEnvironment
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  status: ProjectStatusEnvironment.Unknown,
  loading: false,
  stargazerCount: '',
  requestCount: '',
  validatorCount: ''
})

const isMainnet = computed(() => {
  return props.status === ProjectStatusEnvironment.Mainnet
})

const isTestnet = computed(() => {
  return props.status === ProjectStatusEnvironment.Testnet
})

const hasChains = computed(() => {
  return props.status !== ProjectStatusEnvironment.NoChains
})
</script>

<template>
  <IgniteLoader v-if="loading" class="h-6 w-12" />
  <div v-else v-bind="$attrs" class="status">
    <div class="status__item" title="Stargazers">
      <IconStar class="icon" />
      <IgniteText as="span">{{ stargazerCount }}</IgniteText>
    </div>

    <IgniteLink v-if="hasChains" :to="`/projects/${projectId}/requests`">
      <div class="status__item status__item--clickable" title="Requests">
        <IconPlane class="icon" />
        <IgniteText as="span">{{ requestCount }}</IgniteText>
      </div>
    </IgniteLink>

    <IgniteLink
      v-if="hasChains"
      :to="`/projects/${projectId}/validators`"
      title="Validators"
    >
      <div class="status__item status__item--clickable">
        <IconStage class="icon" />
        <IgniteText as="span">{{ validatorCount }}</IgniteText>
      </div>
    </IgniteLink>

    <div v-if="isMainnet || isTestnet" class="status__item">
      <IgniteText as="span" class="ignite-badge">{{
        isMainnet ? 'Mainnet' : 'Testnet'
      }}</IgniteText>
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
