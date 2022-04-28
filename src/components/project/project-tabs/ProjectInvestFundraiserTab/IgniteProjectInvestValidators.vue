<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestValidators'
})
</script>

<script setup lang="ts">
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteImage from '~/components/ui/IgniteImage.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

defineProps({
  isWild: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <IgniteCard class="px-5 py-7 md:p-8 lg:p-9">
    <div :class="isWild && 'md:flex md:items-center md:justify-between'">
      <div
        class="text-center"
        :class="
          !isWild ? 'mx-auto max-w-[21.5rem]' : 'max-w-xs md:mr-4 md:text-left'
        "
      >
        <IgniteHeading as="div" class="font-title text-4 md:text-5">
          Top validators
        </IgniteHeading>
        <IgniteText as="div" class="mt-5 text-3 text-muted">
          Top validators are helping to support this project by securing the
          network.
        </IgniteText>
      </div>
      <div
        class="mt-7"
        :class="!isWild ? 'mx-auto mt-7.5 max-w-[21.5rem]' : 'md:mt-0'"
      >
        <ul
          class="-m-4 flex flex-wrap justify-center md:-m-5"
          :class="isWild && 'md:justify-center'"
        >
          <li v-for="item in 8" :key="`validator_${item}`" class="p-4 md:p-5">
            <IgniteImage
              :name="`validators/avatar_${item}`"
              :alt="`avatar_${item}`"
              class="block w-8"
            />
          </li>
        </ul>
      </div>
    </div>
  </IgniteCard>
</template>

<style scoped lang="postcss"></style>
