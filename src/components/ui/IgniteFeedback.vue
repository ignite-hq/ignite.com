<script lang="ts">
export default {
  name: 'IgniteFeedback'
}
</script>

<script lang="ts" setup>
import IgniteText from '~/components/ui/IgniteText.vue'
import IconWarning from '~/components/icons/IconWarningTriangle.vue'

interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center">
    <IconWarning class="mr-3" />
    <IgniteText class="text-2 font-normal text-warning">
      {{ text }}
    </IgniteText>
  </div>
</template>
