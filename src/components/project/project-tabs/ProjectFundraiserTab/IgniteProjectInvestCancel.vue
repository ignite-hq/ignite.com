<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { computed, PropType } from 'vue'
import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'

const props = defineProps({
  fundraiser: { type: Object as PropType<any>, required: true }
})

const endDate = computed(() => {
  return new Date(props.fundraiser.auction.base_auction.start_time)
})

const fundraiserStatus = computed(() => {
  return props.fundraiser.auction.base_auction.status as AuctionStatus
})
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <IgniteCard
      v-if="fundraiserStatus === 'AUCTION_STATUS_STANDBY'"
      :shadow="true"
      class="px-5 py-7 md:p-8 lg:p-9"
    >
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
              {{
                new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                }).format(endDate)
              }}
            </strong>
            at
            <strong>
              {{
                new Intl.DateTimeFormat('en-US', {
                  hour: 'numeric',
                  hour12: true,
                  timeZoneName: 'short'
                }).format(endDate)
              }} </strong
            >.<br />
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
