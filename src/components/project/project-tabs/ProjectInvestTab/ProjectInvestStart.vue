<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import IconPlus from '~/components/icons/IconPlus.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
</script>

<template>
  <IgniteContainer>
    <IgniteCard :shadow="true" class="px-5 py-8 text-center md:py-9 lg:py-11">
      <IgniteHeading as="div" class="font-title text-4 font-semibold md:text-5">
        Start a fundraiser
      </IgniteHeading>
      <IgniteText as="div" class="mx-auto mt-3 max-w-sm text-3 text-muted">
        Create one or more fundraisers to put Project Name in front of qualified
        investors.
      </IgniteText>
      <div class="mt-7">
        <IgniteLink to="/create-fundraiser" type="button" color="primary">
          <IconPlus class="ml-2 mr-4" />
          <span>Create fundraiser</span>
        </IgniteLink>
      </div>
    </IgniteCard>
  </IgniteContainer>
</template>

<style scoped lang="postcss"></style>
