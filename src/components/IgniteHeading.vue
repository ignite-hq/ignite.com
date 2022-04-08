<template>
  <component :is="as" class="ignite-title" :class="modifier">
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
  modifier?: string
}

withDefaults(defineProps<Props>(), {
  as: 'h1',
  modifier: ''
})
</script>
