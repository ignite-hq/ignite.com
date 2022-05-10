<script lang="ts">
export default {
  name: 'IgniteNumber'
}
</script>

<script lang="ts" setup>
interface Props {
  as?: string
  number: number
}

const props = withDefaults(defineProps<Props>(), {
  as: 'span',
  number: 0
})
</script>

<template>
  <component :is="as">
    {{ new Intl.NumberFormat().format(props.number) }}
  </component>
</template>
