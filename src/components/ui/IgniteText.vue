<script lang="ts">
export default {
  name: 'IgniteText'
}
</script>

<script lang="ts" setup>
interface Props {
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: 'p'
})
</script>

<template>
  <component :is="as" class="ignite-text">
    <slot />
  </component>
</template>
