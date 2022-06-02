<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCard'
})
</script>

<script lang="ts" setup>
import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteLegend from '~/components/common/IgniteLegend.vue'
import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IconClock from '~/components/icons/IconClock.vue'
import IconRocket from '~/components/icons/IconRocket.vue'
import IconStage from '~/components/icons/IconStage.vue'
import IgniteBgWave from '~/components/ui/IgniteBgWave.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

defineProps({
  project: { type: Object, required: true }
})
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

      <div class="border-x border-border px-7.5 py-8 md:w-full">
        <IgniteText as="div" class="font-semibold">{{
          project.testnet.name
        }}</IgniteText>
        <IgniteText as="div" class="mt-6 flex items-center text-2">
          <IconClock class="mr-3" stroke-width="1.25" />
          {{ project.testnet.status }}</IgniteText
        >
        <IgniteText as="div" class="mt-5 flex items-center text-2">
          <IconRocket class="mr-3" />
          {{ project.testnet.date }}</IgniteText
        >
        <IgniteText as="div" class="mt-5 flex items-center text-2">
          <IconStage class="mr-3" stroke-width="1.1" />
          {{ project.testnet.validators }}</IgniteText
        >
        <IgniteText
          v-if="project.testnet.rewards"
          as="div"
          class="mt-5 flex items-center text-2"
        >
          <span class="mr-3">Rewards total:</span>
          <IgniteText
            v-for="reward in project.testnet.rewards"
            :key="reward"
            as="div"
            class="mr-5 flex items-center last:mr-0"
          >
            <IgniteDenom
              v-if="reward.denom"
              modifier="avatar"
              :denom="reward.denom"
              :title="reward.denom"
              size="small"
              class="mr-3"
            />
            {{ reward.count }}
          </IgniteText>
        </IgniteText>

        <div v-if="project.fundraisers" class="mt-7.5 flex justify-between">
          <div>
            <IgniteText as="div" class="font-semibold">Fundraisers</IgniteText>
            <IgniteText as="div" class="mt-1 text-2 text-muted"
              >{{ project.fundraisers.ongoing }} ongoing,
              {{ project.fundraisers.upcoming }} upcoming</IgniteText
            >
          </div>
          <div>
            <IgniteText as="div" class="flex items-center">
              <IgniteDenom
                modifier="avatar"
                :denom="project.fundraisers.name"
                :title="project.fundraisers.name"
                class="mr-2 !h-6 !w-6"
              />
              {{ project.fundraisers.count }}
              {{ project.fundraisers.name }}
              raised
            </IgniteText>
          </div>
        </div>
      </div>

      <div class="px-7.5 py-8 md:w-full">
        <IgniteText as="div" class="font-semibold"
          >Mainnet token distribution</IgniteText
        >

        <IgniteProgressBar
          denom="D"
          :items="project.distribution.progressBar"
          size="lg"
          class="mt-6"
        />
        <IgniteLegend :items="project.distribution.legend" class="mt-5" />

        <div class="mt-7.5 flex justify-between">
          <IgniteText as="div" class="font-semibold">Your vouchers:</IgniteText>
          <div>
            <div class="flex items-start">
              <IgniteDenom
                modifier="avatar"
                :denom="project.vouchers.name"
                :title="project.vouchers.name"
                class="mr-2 !h-6 !w-6"
              />
              <div class="text-2">
                <IgniteText as="div" class="font-semibold">
                  {{ project.vouchers.count }}
                  {{ project.vouchers.name }}
                </IgniteText>
                <IgniteText as="div" class="font-middle text-muted">
                  {{ project.vouchers.percent }}% of network
                </IgniteText>
              </div>
            </div>
          </div>
        </div>
      </div>

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
