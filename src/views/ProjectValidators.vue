<template>
  <div>
    <div>
      <img :src="defaultBanner" />
    </div>
    <div class="container text-center">
      <LayoutSpacer size="lg" />
      <IgntTypography modifier="highlight" size="md">
        Validator incentives
      </IgntTypography>
      <LayoutSpacer size="xs" />
      <IgntTypography
        modifier="content"
        size="md"
        class="mx-auto"
        style="max-width: 30rem"
      >
        Participation incentives for validating transactions on the {Project
        Name} network
      </IgntTypography>

      <LayoutSpacer size="md" />

      <div class="flex flex-col m:flex-row">
        <div
          class="flex justify-center flex-col border border-gray-70 rounded w-full m-4 p-5"
        >
          <IgntTypography modifier="content" size="md">
            Incentives
          </IgntTypography>
          <LayoutSpacer size="xs" />
          <span class="text-8 font-bold tracking-tight"> $000,000,000 </span>
          <LayoutSpacer size="xs" />
          <IgntTypography modifier="content" size="sm">
            Previous incentives: $0,000,000
          </IgntTypography>
        </div>
        <div
          class="flex justify-center flex-col border border-gray-70 rounded w-full m-4 p-5"
        >
          <IgntTypography modifier="content" size="md">
            Share allocation
          </IgntTypography>
        </div>
      </div>

      <LayoutSpacer size="lg" />

      <IgntTypography modifier="highlight" size="md">
        Validators
      </IgntTypography>
      <LayoutSpacer size="xs" />
      <IgntTypography
        modifier="content"
        size="md"
        class="mx-auto"
        style="max-width: 30rem"
      >
        Active validators verifying transactions to secure the {Project Name}
        network
      </IgntTypography>

      <LayoutSpacer size="md" />
      <div>
        <div class="flex flex-wrap">
          <ValidatorCard
            v-for="validator in [...Array(8).keys()]"
            :key="validator"
          >
            {{ validator }}
          </ValidatorCard>
        </div>
        <LayoutSpacer size="sm" />
        <button
          class="bg-primary py-4 px-6 text-2 text-bg hover:brightness-90 active:brightness-75 rounded-sm transition duration-200"
        >
          View more
        </button>
      </div>

      <LayoutSpacer size="lg" />

      <div
        class="flex justify-start flex-col text-left shadow rounded w-full my-4 mx-auto p-8 max-w-5xl"
      >
        <IgntTypography modifier="highlight" size="md">
          Become a validator
        </IgntTypography>
        <LayoutSpacer size="xs" />
        <IgntTypography modifier="content" size="md">
          Help secure blockchain projects and be rewarded for your participation
        </IgntTypography>
        <LayoutSpacer size="sm" />
        <div>
          <button
            class="bg-primary py-4 px-6 text-2 text-bg hover:brightness-90 active:brightness-75 rounded-sm transition duration-200"
          >
            Learn more
          </button>
        </div>
      </div>

      <LayoutSpacer size="lg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IgntTypography from '../components/atoms/IgntTypography.vue'
import LayoutSpacer from '../components/atoms/LayoutSpacer.vue'
import ValidatorCard from '../components/validators/ValidatorCard.vue'
import defaultBanner from '../assets/svg/defaultBanner.svg'

export default defineComponent({
  components: {
    IgntTypography,
    LayoutSpacer,
    ValidatorCard
  },
  setup() {
    return {
      IgntTypography,
      LayoutSpacer,
      defaultBanner
    }
  }
})
</script>
