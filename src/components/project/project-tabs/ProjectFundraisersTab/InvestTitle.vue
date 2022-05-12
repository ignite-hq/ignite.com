<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InvestTitle'
})
</script>

<script lang="ts" setup>
import IconPlus from '~/components/icons/IconPlus.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

interface Props {
  projectName?: string
}

withDefaults(defineProps<Props>(), {
  projectName: ''
})
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-8 md:gap-7 lg:grid-cols-4">
      <div class="md:col-span-5 lg:col-span-3">
        <IgniteHeading
          as="div"
          class="font-title text-5 font-semibold md:text-7"
        >
          Fundraisers
        </IgniteHeading>
        <IgniteText class="mt-5 text-3 text-muted">
          Current and upcoming investment opportunities for {{ projectName }}
        </IgniteText>
      </div>
      <div class="flex items-start justify-end md:col-span-3 lg:col-span-1">
        <IgniteLink
          to="/create-fundraiser"
          class="w-full md:w-auto"
          type="button"
          color="primary"
        >
          <IconPlus class="ml-2 mr-4" />
          <span>Create fundraiser</span>
        </IgniteLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
