<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IconClock from '~/components/icons/IconClock.vue'
import IconDots from '~/components/icons/IconDots.vue'
import IconStack from '~/components/icons/IconStack.vue'
import IconUser from '~/components/icons/IconUser.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { ProgressBarItem } from '~/utils/types'

import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'

const props = defineProps({
  data: { type: Object, required: true }
})

const progressBar = {
  items: [
    {
      value: ((props.data.raised / props.data.goal) * 100).toString(),
      bgColor: 'bg-primary'
    }
  ] as ProgressBarItem[]
}

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'
</script>

<template>
  <IgniteLink
    :to="`/projects/${projectId}/fundraisers/${data.id}`"
    class="w-full"
  >
    <IgniteCard :shadow="true" class="w-full py-6 px-5 md:p-7.5">
      <IgniteProgressBar :items="progressBar.items" :label="false" size="xs" />
      <IgniteHeading
        as="div"
        class="mt-5 font-title text-4 font-semibold md:text-5"
      >
        <IgniteNumber :number="parseInt(data.raised)" />
        {{ data.currency }}
      </IgniteHeading>
      <IgniteHeading as="div" class="mt-3 text-3 text-muted">
        Raised of
        <strong>
          <IgniteNumber :number="parseInt(data.goal)" /> {{ data.currency }}
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
            <IconDots v-if="data.status === 'Current'" class="mr-3" />
            <IconDots v-if="data.status === 'Ongoing'" class="mr-3" />
            <IconClock v-if="data.status === 'Upcoming'" class="mr-3" />
            <IconClock v-if="data.status === 'Standby'" class="mr-3" />
            <IconCheckMarkThin v-if="data.status === 'Funded'" class="mr-3" />
            <IconCheckMarkThin v-if="data.status === 'Previous'" class="mr-3" />
            <IconCanceled v-if="data.status === 'Canceled'" class="mr-3" />
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
            {{ data.status === 'Standby' ? 'Registrants' : 'Participants' }}
          </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconUser class="mr-3" />
            <IgniteNumber :number="parseInt(data.investors)" />
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
                data.status === 'Canceled' && 'text-inactive line-through'
              "
            >
              {{ new Date(data.ends).toLocaleDateString() }}
            </span>
          </IgniteHeading>
        </div>
      </div>
    </IgniteCard>
  </IgniteLink>
</template>

<style scoped lang="postcss"></style>
