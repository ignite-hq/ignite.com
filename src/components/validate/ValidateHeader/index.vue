<script lang="ts">
export default {
  name: 'ValidateHeader'
}
</script>

<script lang="ts" setup>
import IgniteBgWave from '~/components/ui/IgniteBgWave.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteProfileIcon from '~/components/ui/IgniteProfileIcon.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

import ValidateNav from './ValidateNav.vue'

interface Props {
  isLoading: boolean
}

withDefaults(defineProps<Props>(), {
  isLoading: false
})

const navigation = [
  {
    link: `/validate/projects`,
    title: 'Projects'
  },
  {
    link: `/validate/requests`,
    title: 'Requests'
  }
]
</script>

<template>
  <div>
    <div class="border-b border-border py-9 md:py-10.5">
      <div class="container">
        <div class="grid grid-cols-1 gap-7 lg:grid-cols-12">
          <div class="flex flex-col md:flex-row lg:col-span-7 xl:col-span-8">
            <!-- Profile Icon -->
            <IgniteLoader
              v-if="isLoading"
              class="mb-6 h-9.5 w-9.5 rounded-circle md:mb-0 md:mr-7"
            />
            <div
              v-else
              class="relative mb-6 h-9.5 w-9.5 shrink-0 rounded-circle bg-primary md:mb-0 md:mr-7"
            >
              <div class="absolute inset-0 z-[2] overflow-hidden">
                <IgniteBgWave />
              </div>
            </div>
            <div class="">
              <IgniteHeading as="div" class="font-semibold text-muted"
                >Welcome,</IgniteHeading
              >
              <IgniteLoader v-if="isLoading" class="h-9 w-[19rem]" />
              <IgniteHeading
                v-else
                class="font-title text-7 font-semibold md:text-8"
                >Stake.fish</IgniteHeading
              >
              <IgniteLoader
                v-if="isLoading"
                class="mt-6 h-[1.5rem] w-[19rem]"
              />
              <IgniteText v-else as="p" class="mt-4 text-muted md:mt-6">
                Ignite network validator since March 2022
              </IgniteText>
            </div>
          </div>

          <div
            class="max-w-[30rem] md:ml-[7rem] lg:col-span-5 lg:ml-0 xl:col-span-4"
          >
            <IgniteCard class="px-4 pt-6 pb-7.5">
              <IgniteHeading as="div" class="text-center font-semibold"
                >Incentives to date</IgniteHeading
              >
              <div
                class="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row"
              >
                <IgniteLoader v-if="isLoading" class="h-7 w-7 rounded-circle" />
                <div v-else class="flex">
                  <IgniteProfileIcon
                    class="flex h-7 w-7 items-center justify-center rounded-circle outline outline-2 outline-white-1000"
                  />
                  <IgniteProfileIcon
                    class="-ml-[0.625rem] flex h-7 w-7 items-center justify-center rounded-circle outline outline-2 outline-white-1000"
                  />
                  <IgniteProfileIcon
                    class="-ml-[0.625rem] flex h-7 w-7 items-center justify-center rounded-circle outline outline-2 outline-white-1000"
                  />
                  <div
                    class="-ml-[0.625rem] flex h-7 w-7 items-center justify-center rounded-circle border border-border bg-white-1000 outline outline-2 outline-white-1000"
                  >
                    <IgniteText as="div" class="text-center text-1"
                      >+</IgniteText
                    >
                    <IgniteText as="div" class="text-center text-2"
                      >5</IgniteText
                    >
                  </div>
                </div>
                <IgniteLoader v-if="isLoading" class="h-7 w-11" />
                <IgniteHeading
                  v-else
                  as="div"
                  class="text-center font-title text-5 font-semibold"
                  >$400,000</IgniteHeading
                >
              </div>
            </IgniteCard>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-9 xl:pt-10.5">
      <div class="container">
        <ValidateNav :items="navigation" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
