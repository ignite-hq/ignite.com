<script lang="ts">
import dayjs from 'dayjs'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

interface Props {
  fundraiser: any
}

const props = defineProps<Props>()

const endDate = computed(() => {
  return dayjs(new Date(props.fundraiser.auction.base_auction.start_time))
})
</script>

<template>
  <div class="container">
    <IgniteCard :shadow="true" class="px-5 py-7 md:p-8 lg:p-9">
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-8 md:gap-7 lg:grid-cols-4"
      >
        <div class="md:col-span-5 lg:col-span-3">
          <IgniteHeading
            as="div"
            class="font-title text-4 font-semibold md:text-4"
          >
            Cancel fundraiser
          </IgniteHeading>
          <IgniteText as="div" class="mt-4 max-w-2xl text-3 text-muted">
            Cancel this fundraiser at any time before
            <strong>
              {{ endDate.format('MMM D, YYYY') }}
            </strong>
            at
            <strong> {{ endDate.format('h:mm A [GMT]Z') }} </strong>.<br />
            The fundraiser cannot be cancelled after it has begun.
          </IgniteText>
        </div>
        <div class="flex items-start justify-end md:col-span-3 lg:col-span-1">
          <IgniteLink
            to="/create-fundraiser"
            class="w-full md:w-auto"
            type="button"
            color="error"
          >
            <span>Cancel fundraiser</span>
          </IgniteLink>
        </div>
      </div>
    </IgniteCard>
  </div>
</template>

<style scoped lang="postcss"></style>
