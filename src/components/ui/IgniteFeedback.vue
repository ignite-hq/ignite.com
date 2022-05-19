<script lang="ts">
export default {
  name: 'IgniteFeedback'
}
</script>

<script lang="ts" setup>
import IgniteText from '~/components/ui/IgniteText.vue'

interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <IgniteText class="text-2 font-normal text-warning">
    {{ text }}
  </IgniteText>
</template>
