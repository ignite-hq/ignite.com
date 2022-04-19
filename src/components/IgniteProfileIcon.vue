<script lang="ts">
export default {
  name: 'IgniteProfileIcon'
}
</script>

<script lang="ts" setup>
import { MD5 } from 'crypto-js'
import avatar from 'gradient-avatar'

interface Props {
  address: string
}

const props = withDefaults(defineProps<Props>(), {
  address: 'Demo Account'
})

function getAvatar() {
  return avatar(MD5(props.address) + '', 64)
}
</script>

<template>
  <!-- eslint-disable -->
  <div class="ignite-avatar" v-html="getAvatar()" />
  <!-- eslint-enable -->
</template>

<style scoped lang="postcss">
.ignite-avatar {
  @apply h-7 w-7 overflow-hidden rounded-circle;
}

.ignite-avatar > svg {
  @apply h-7 w-7;
}
</style>
