<script lang="ts">
export default {
  name: 'ProjectCardValidator'
}
</script>

<script setup lang="ts">
import IgniteButton from '../IgniteButton.vue'
import IgniteCard from '../IgniteCard.vue'
import IgniteHeading from '../IgniteHeading.vue'
import IgniteText from '../IgniteText.vue'
import IgniteDenom from '../ui/IgniteDenom.vue'

defineProps({
  isWide: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <IgniteCard
    :shadow="true"
    class="flex flex-col justify-between px-5 pt-8 pb-7.5 sm:px-7 md:px-8 md:pt-9"
    :class="
      isWide && [
        'lg:flex-row',
        'lg:items-center',
        'lg:flex-wrap',
        'xl:flex-nowrap'
      ]
    "
  >
    <IgniteHeading
      as="div"
      class="text-center font-title text-3 font-semibold text-title"
      :class="
        isWide ? ['lg:text-7', 'lg:max-w-sm', 'lg:text-left'] : ['md:text-4']
      "
    >
      Validator Incentives
    </IgniteHeading>
    <div
      class="mt-8 w-full justify-center sm:flex"
      :class="
        isWide && [
          'xl:mt-0',
          'lg:order-last',
          'xl:order-none',
          'lg:justify-start',
          'xl:justify-center'
        ]
      "
    >
      <div class="">
        <div class="flex items-center justify-center">
          <IgniteDenom
            modifier="avatar"
            denom="denom"
            title="denom"
            class="mr-3"
          />
          <IgniteHeading as="div" class="font-title text-5 md:text-6"
            >000%</IgniteHeading
          >
        </div>
        <IgniteText as="div" class="mt-5 text-center text-muted">
          Chain Vouchers
        </IgniteText>
      </div>
      <div class="my-3 text-center text-5 text-inactive sm:my-0 sm:mx-6">+</div>
      <div class="">
        <div class="flex items-center justify-center">
          <IgniteDenom
            modifier="avatar"
            denom="denom"
            title="denom"
            class="mr-3"
          />
          <IgniteHeading as="div" class="font-title text-5 md:text-6"
            >00M UST</IgniteHeading
          >
        </div>
        <IgniteText as="div" class="mt-5 text-center text-muted">
          Testnet Incentives
        </IgniteText>
      </div>
    </div>
    <div
      class="mt-8.5 flex items-center justify-center md:shrink-0"
      :class="isWide && 'lg:mt-0'"
    >
      <IgniteButton variant="primary" class="w-full sm:w-auto"
        >Become a validator</IgniteButton
      >
    </div>
  </IgniteCard>
</template>

<style scoped lang="postcss"></style>
