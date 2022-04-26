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

const formattedNumber = new Intl.NumberFormat().format(props.number)
</script>

<template>
  <component :is="as">
    {{ formattedNumber }}
  </component>
</template>
