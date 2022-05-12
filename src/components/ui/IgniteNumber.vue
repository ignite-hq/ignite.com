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
}

const props = withDefaults(defineProps<Props>(), {
  as: 'span',
  number: 0
})
</script>

<template>
  <component :is="as">
    {{ formatNumber(props.number) }}
  </component>
</template>
