<script lang="ts">
export default {
  name: 'ProjectInvestFundraiserTab'
}
</script>

<script lang="ts" setup>
import IconUser from '~/components/icons/IconUser.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteProjectInvest from './IgniteProjectInvest.vue'
import IgniteProjectInvestCancel from './IgniteProjectInvestCancel.vue'
import IgniteProjectInvestInvestors from './IgniteProjectInvestInvestors.vue'
import IgniteProjectInvestSingleCard from './IgniteProjectInvestSingleCard.vue'
import IgniteProjectInvestValidators from './IgniteProjectInvestValidators.vue'
import IgniteProjectInvestVesting from './IgniteProjectInvestVesting.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useFundraiser from '~/composables/fundraising/useFundraiser'
// import { useCosmosBankV1Beta1 } from '~/generated/tendermint-spn-vue'
import { useRoute } from 'vue-router'
import { watchEffect } from 'vue'

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'

// const { querySupplyOf } = useCosmosBankV1Beta1()
const { fundraiser } = useFundraiser(projectId)

// watchers
watchEffect(() => {
  console.log(fundraiser)
})

const roadmapItems = [
  {
    status: 'complited',
    name: 'Fundraiser published'
  },
  {
    name: 'Project started',
    date: '03.25'
  },
  {
    name: 'Sale begins',
    date: '04.01 at 9 AM UTC'
  },
  {
    name: 'Sale ends',
    date: '04.01 at 9 AM UTC'
  }
]

const roadmapCancelItems = [
  {
    status: 'complited',
    name: 'Fundraiser published'
  },
  {
    status: 'cancelled',
    name: 'Fundraiser cancelled'
  }
]
</script>

<template>
  <div v-if="fundraiser">
    <IgniteProjectInvestCancel
      :fundraiser="fundraiser"
      class="mt-8 md:mt-10.5"
    />

    <div
      class="container-full container mt-8 px-5 sm:px-5.5 md:mt-10.5 lg:px-7"
    >
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
        <IgniteProjectInvestSingleCard
          :items="roadmapItems"
          class="lg:col-span-2"
        />
      </div>
    </div>
    <div
      class="container-full container mt-8 px-5 sm:px-5.5 md:mt-10.5 lg:px-7"
    >
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
        <IgniteProjectInvestSingleCard
          :items="roadmapCancelItems"
          class="lg:col-span-2"
        />
      </div>
    </div>
    <div
      class="container-full container mt-8 px-5 sm:px-5.5 md:mt-10.5 lg:px-7"
    >
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
        <div class="flex items-end">
          <IgniteProjectInvestSingleCard size="sm" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="registrationNotOpen" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="registrationOpen" :wallet="false" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="registrationOpen" :wallet="true" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="selectTier" :sufficient="true" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="selectTier" :sufficient="false" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="registrationConfirmed" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="saleStarted" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="saleStartedNotRegistered" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="saleOngoing" :invested="false" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="saleOngoing" :invested="true" />
        </div>

        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="saleEnded" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="soldOut" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="saleFinished" />
        </div>
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest status="saleCanceled" />
        </div>
      </div>
    </div>

    <div
      class="container-full container mt-8 px-5 sm:px-5.5 md:mt-10.5 lg:px-7"
    >
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
        <div class="lg:col-span-2">
          <IgniteProjectInvestValidators :is-wild="true" />
        </div>
      </div>
    </div>

    <div
      class="container-full container mt-8 px-5 sm:px-5.5 md:mt-10.5 lg:px-7"
    >
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-7">
        <IgniteProjectInvestValidators />
        <div class="">
          <IgniteCard class="px-5 py-7 text-center md:p-8">
            <IgniteHeading as="div" class="font-title text-4 md:text-5">
              Registered investors
            </IgniteHeading>
            <IgniteText
              as="div"
              class="mx-auto mt-5 max-w-[21.5rem] text-muted"
            >
              Don’t miss out. Join the other registered investors supporting
              this project.
            </IgniteText>
            <IgniteHeading
              as="div"
              class="mt-6 flex items-center justify-center font-title text-6 md:mt-8 md:text-8"
            >
              <IconUser class="mr-5 h-6 w-6 md:h-8 md:w-8" />
              <IgniteNumber number="3420" />
            </IgniteHeading>
          </IgniteCard>
        </div>
      </div>
    </div>

    <IgniteProjectInvestInvestors class="mt-8 md:mt-10.5" />
    <IgniteProjectInvestVesting class="mt-8 md:mt-10.5" />
  </div>
</template>
