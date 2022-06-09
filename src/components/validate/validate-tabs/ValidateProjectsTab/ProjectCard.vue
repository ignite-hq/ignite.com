<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCard',
  components: { IconCanceled }
})
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteLegend from '~/components/common/IgniteLegend.vue'
import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconCanceledCircle from '~/components/icons/IconCanceledCircle.vue'
import IconClock from '~/components/icons/IconClock.vue'
import IconReload from '~/components/icons/IconReload.vue'
import IconRocket from '~/components/icons/IconRocket.vue'
import IconStage from '~/components/icons/IconStage.vue'
import IconWarningTriangle from '~/components/icons/IconWarningTriangle.vue'
import IgniteBgWave from '~/components/ui/IgniteBgWave.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const component = computed(() => {
  return props.project.isHidden ? 'div' : IgniteLink
})
</script>

<template>
  <component
    :is="component"
    to="/projects"
    class="relative z-[1] mb-7 w-full last:mb-0"
  >
    <IgniteCard :shadow="true" class="flex w-full flex-col lg:flex-row">
      <div
        class="flex shrink-0 flex-col items-center justify-center px-5 py-7 md:px-9 md:py-8 lg:w-[15rem] lg:px-6 lg:py-8 xl:w-[23.875rem] xl:px-7.5 xl:py-8"
      >
        <div class="relative h-9.5 w-9.5 shrink-0 rounded-md bg-primary">
          <div class="absolute inset-0 z-[2] overflow-hidden">
            <IgniteBgWave />
          </div>
        </div>

        <IgniteHeading
          as="div"
          class="mt-5 text-center font-title text-4 xl:text-5"
          >{{ project.name }}</IgniteHeading
        >
        <IgniteText
          as="div"
          class="mt-5 flex items-center rounded-xs bg-gray-30 p-5 text-2"
        >
          <IconClock
            v-if="
              project.status === 'Accepted' ||
              project.status === 'Node launch required'
            "
            stroke-width="1.2"
            class="mr-3"
          />
          <IconCanceledCircle
            v-if="project.status === 'Declined'"
            class="mr-3"
          />
          <div
            v-if="
              project.status === 'Validating' ||
              project.status === 'Node offline' ||
              project.status === 'Chain halted'
            "
            class="relative mr-3 h-5 w-5 rounded-circle border border-border after:absolute after:top-[0.125rem] after:left-[0.125rem] after:h-[0.625rem] after:w-[0.625rem] after:rounded-circle"
            :class="[
              project.status === 'Validating' && 'after:bg-primary',
              project.status === 'Node offline' && 'after:bg-warning',
              project.status === 'Chain halted' && 'after:bg-error'
            ]"
          />
          {{ project.status }}
        </IgniteText>
        <IgniteText
          v-if="project.statusAlert"
          as="div"
          class="mt-5 flex items-center text-2 text-error"
        >
          <IconWarningTriangle class="mr-3" />
          {{ project.statusAlert }}
        </IgniteText>
      </div>

      <div
        v-if="project.testnet"
        class="border-y border-border px-5 py-7 md:w-full md:px-9 md:py-8 lg:border-y-0 lg:border-x lg:px-6 lg:py-8 xl:px-7.5 xl:py-8"
        :class="!project.distribution && '!border-r-0'"
      >
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
          class="mt-5 flex flex-col text-2 xl:flex-row xl:items-center"
        >
          <span class="mb-3 xl:mb-0 xl:mr-3">Rewards total:</span>
          <div class="flex w-full items-center">
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
          </div>
        </IgniteText>

        <div v-if="project.fundraisers" class="mt-7.5 justify-between sm:flex">
          <div>
            <IgniteText as="div" class="font-semibold">Fundraisers</IgniteText>
            <IgniteText as="div" class="mt-1 text-2 text-muted"
              >{{ project.fundraisers.ongoing }} ongoing,
              {{ project.fundraisers.upcoming }} upcoming</IgniteText
            >
          </div>
          <div class="mt-4 sm:mt-0">
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

      <div
        v-if="project.distribution"
        class="px-5 py-7 md:w-full md:px-9 md:py-8 lg:px-6 lg:py-8 xl:px-7.5 xl:py-8"
      >
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

        <div class="mt-7.5 justify-between sm:flex">
          <IgniteText as="div" class="font-semibold">Your vouchers:</IgniteText>
          <div class="mt-4 sm:mt-0">
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
    </IgniteCard>
    <div
      v-if="project.isHidden"
      class="absolute inset-0 flex flex-col items-center justify-center bg-white-1000/95"
    >
      <IgniteHeading as="div" class="text-4 font-semibold"
        >Project hidden</IgniteHeading
      >
      <IgniteButton class="mt-6 !text-muted hover:scale-105">
        <IconReload class="mr-3" />
        Undo
      </IgniteButton>
    </div>
  </component>
</template>

<style scoped lang="postcss"></style>
