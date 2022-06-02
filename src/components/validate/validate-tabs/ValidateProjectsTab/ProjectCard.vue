<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCard'
})
</script>

<script lang="ts" setup>
import IconClock from '~/components/icons/IconClock.vue'
import IgniteBgWave from '~/components/ui/IgniteBgWave.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

defineProps({
  project: { type: Object, required: true }
})

// const progressBar = {
//   items: [
//     {
//       value: (
//         ((props.data.raised ?? 0) / Number(props.data.goal ?? 0)) *
//         100
//       ).toString(),
//       bgColor: 'bg-primary'
//     }
//   ] as ProgressBarItem[]
// }
</script>

<template>
  <IgniteLink to="/projects" class="mb-7 w-full last:mb-0">
    <IgniteCard :shadow="true" class="flex w-full flex-col md:flex-row">
      <div
        class="flex shrink-0 flex-col items-center justify-center px-7.5 py-8 md:w-[23.875rem]"
      >
        <div class="relative h-9.5 w-9.5 shrink-0 rounded-md bg-primary">
          <div class="absolute inset-0 z-[2] overflow-hidden">
            <IgniteBgWave />
          </div>
        </div>

        <IgniteHeading as="div" class="mt-5 font-title text-5">{{
          project.name
        }}</IgniteHeading>
        <IgniteText
          as="div"
          class="mt-5 flex items-center rounded-xs bg-gray-30 p-5 text-2"
        >
          <IconClock
            v-if="project.status === 'Accepted'"
            stroke-width="1.2"
            class="mr-3"
          />
          <div
            v-if="project.status === 'Validating'"
            class="relative mr-3 h-5 w-5 rounded-circle border border-border after:absolute after:top-[0.125rem] after:left-[0.125rem] after:h-[0.625rem] after:w-[0.625rem] after:rounded-circle after:bg-primary"
          />
          {{ project.status }}
        </IgniteText>
      </div>

      <div class="border-x border-border px-7.5 py-8 md:w-full"></div>
      <div class="px-7.5 py-8 md:w-full"></div>
      <!-- <IgniteProgressBar :items="progressBar.items" :label="false" size="xs" />
      <IgniteHeading
        as="div"
        class="mt-5 font-title text-4 font-semibold md:text-5"
      >
        <IgniteNumber :number="Number(data.raised)" />
        {{ data.currency }}
      </IgniteHeading>
      <IgniteHeading as="div" class="mt-3 text-3 text-muted">
        Raised of
        <strong>
          <IgniteNumber :number="Number(data.goal)" /> {{ data.currency }}
        </strong>
      </IgniteHeading>
      <div
        class="mt-7.5 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 xl:pt-7.5"
      >
        <div class="">
          <IgniteText as="div" class="text-2 text-muted"> Status </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconDots
              v-if="data.statusDetailed === 'AUCTION_STATUS_VESTING'"
              class="mr-3"
            />
            <IconDots
              v-if="data.statusDetailed === 'AUCTION_STATUS_STARTED'"
              class="mr-3"
            />
            <IconClock
              v-if="data.statusDetailed === 'AUCTION_STATUS_STANDBY'"
              class="mr-3"
            />
            <IconCheckMarkThin
              v-if="data.statusDetailed === 'AUCTION_STATUS_FINISHED'"
              class="mr-3"
            />
            <IconCanceled
              v-if="data.statusDetailed === 'AUCTION_STATUS_CANCELLED'"
              class="mr-3"
            />
            <IconCanceled
              v-if="data.statusDetailed === 'AUCTION_STATUS_UNSPECIFIED'"
              class="mr-3"
            />
            {{ data.status }}
          </IgniteHeading>
        </div>

        <div class="">
          <IgniteText as="div" class="text-2 text-muted"> Vouchers </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconStack class="mr-3" />
            {{ data.vouchers }}
          </IgniteHeading>
        </div>

        <div class="">
          <IgniteText as="div" class="text-2 text-muted">
            {{
              data.status === AuctionStatusLabels.Upcoming
                ? 'Registrants'
                : 'Participants'
            }}
          </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconUser class="mr-3" />
            <IgniteNumber :number="Number(data.investors)" />
          </IgniteHeading>
        </div>

        <div class="">
          <IgniteText as="div" class="text-2 text-muted">
            {{ Date.now() < new Date(data.ends).getTime() ? 'Ends' : 'Ended' }}
          </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconCalendar class="mr-3" />
            <span
              :class="
                data.statusDetailed === 'AUCTION_STATUS_CANCELLED' &&
                'text-inactive line-through'
              "
            >
              {{ new Date(data.ends).toLocaleDateString() }}
            </span>
          </IgniteHeading>
        </div>
      </div> -->
    </IgniteCard>
  </IgniteLink>
</template>

<style scoped lang="postcss"></style>
