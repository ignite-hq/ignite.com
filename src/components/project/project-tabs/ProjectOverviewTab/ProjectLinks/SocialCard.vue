<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SocialCard'
})
</script>

<script setup lang="ts">
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconTwitter from '~/components/icons/IconTwitter.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

import GraphicDiscord from './GraphicDiscord.vue'
import GraphicTelegram from './GraphicTelegram.vue'
import GraphicTwitter from './GraphicTwitter.vue'

const props = defineProps({
  item: {
    type: Object,
    reqired: true
  },
  size: {
    // sm, md, lg
    type: String,
    default: 'md'
  }
})

// variables
const DISCORD = 'discord'
const TELEGRAM = 't.me'
const TWITTER = 'twitter'

// methods
function getSocialVisual() {
  let socialIcon = ''
  let socialGraphic = ''
  if (props.item.link.includes(DISCORD)) {
    socialIcon = IconDiscord
    socialGraphic = GraphicDiscord
  }
  if (props.item.link.includes(TELEGRAM)) {
    socialIcon = IconTelegram
    socialGraphic = GraphicTelegram
  }
  if (props.item.link.includes(TWITTER)) {
    socialIcon = IconTwitter
    socialGraphic = GraphicTwitter
  }
  return { socialIcon, socialGraphic }
}

// computed
const { socialIcon, socialGraphic } = getSocialVisual()
</script>

<template>
  <IgniteLink
    :to="item.link"
    class="block w-full text-primary hover:text-title lg:h-[100%]"
  >
    <IgniteCard
      class="relative flex w-full flex-col justify-between overflow-hidden"
      :class="[
        size === 'sm' && ['p-6', 'pb-0', 'md:p-7', 'lg:py-8.5', 'xl:px-9'],
        size === 'md' && [
          'p-6',
          'pb-0',
          'md:p-7',
          'md:pb-0',
          'lg:pb-0',
          'lg:py-8.5',
          'xl:px-8.5',
          'xl:pt-9'
        ],
        size === 'lg' && [
          'p-6',
          'pb-0',
          'md:p-7',
          'lg:px-9',
          'lg:py-8.5',
          'xl:px-10',
          'xl:py-9'
        ]
      ]"
    >
      <div>
        <IgniteHeading
          as="div"
          class="font-title font-semibold text-title"
          :class="size === 'lg' ? ['text-4', 'md:text-5'] : ['text-4']"
        >
          {{ item.title }}
        </IgniteHeading>
        <IgniteText
          as="div"
          class="text-2 text-muted"
          :class="[
            size === 'sm' && 'max-w-[15rem]',
            size === 'md' && 'max-w-[22rem]',
            size === 'lg' && 'max-w-[22rem]',
            size === 'lg' ? 'mt-3' : 'mt-5'
          ]"
        >
          {{ item.description }}
        </IgniteText>
        <IgniteText
          as="div"
          class="flex items-center text-3 font-medium"
          :class="size === 'lg' ? 'mt-6' : ['mt-5', 'md:mt-7']"
        >
          <component :is="socialIcon" class="mr-4" />
          <span>{{ item.cta }}</span>
        </IgniteText>
      </div>
      <component :is="socialGraphic" :size="size" />
    </IgniteCard>
  </IgniteLink>
</template>

<style scoped lang="postcss"></style>
