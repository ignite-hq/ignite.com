<template>
  <component :is="as" class="ignite-title">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: 'IgniteHeading'
}
</script>

<script lang="ts" setup>
interface Props {
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: 'h1',
})
</script>
