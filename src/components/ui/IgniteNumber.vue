<script lang="ts">
export default {
  name: 'IgniteNumber'
}
</script>

<script lang="ts" setup>
import { formatNumber } from '~/utils/number'

interface Props {
  as?: string
  number: number | string
  notation: 'standard' | 'scientific' | 'engineering' | 'compact'
}

withDefaults(defineProps<Props>(), {
  as: 'span',
  number: 0,
  notation: 'standard'
})
</script>

<template>
  <component :is="as">
    {{ formatNumber(number, notation) }}
  </component>
</template>
