<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InvestStart'
})
</script>

<script lang="ts" setup>
import IconPlus from '~/components/icons/IconPlus.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

interface Props {
  projectName?: string
  projectId?: string
}

withDefaults(defineProps<Props>(), {
  projectName: '',
  projectId: '0'
})
</script>

<template>
  <div class="container">
    <IgniteCard :shadow="true" class="px-5 py-8 text-center md:py-9 lg:py-11">
      <IgniteHeading as="div" class="font-title text-4 font-semibold md:text-5">
        Start a fundraiser
      </IgniteHeading>
      <IgniteText class="mx-auto mt-3 max-w-sm text-3 text-muted">
        Create one or more fundraisers to put {{ projectName }} in front of
        qualified investors.
      </IgniteText>
      <div class="mt-7">
        <IgniteLink
          :to="`/projects/${projectId}/create-fundraiser`"
          type="button"
          color="primary"
        >
          <IconPlus class="ml-2 mr-4" />
          <span>Create fundraiser</span>
        </IgniteLink>
      </div>
    </IgniteCard>
  </div>
</template>

<style scoped lang="postcss"></style>
