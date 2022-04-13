<template>
  <IgniteLink
    :to="item.link"
    class="block text-primary hover:text-title l:h-[100%]"
  >
    <IgniteCard
      class="relative flex flex-col justify-between overflow-hidden"
      :class="[
        size === 'sm' && ['p-6', 'pb-0', 'm:p-7', 'l:py-8.5', 'xl:px-9'],
        size === 'md' && [
          'p-6',
          'pb-0',
          'm:p-7',
          'm:pb-0',
          'l:pb-0',
          'l:py-8.5',
          'xl:px-8.5',
          'xl:pt-9'
        ],
        size === 'lg' && [
          'p-6',
          'pb-0',
          'm:p-7',
          'l:px-9',
          'l:py-8.5',
          'xl:px-10',
          'xl:py-9'
        ]
      ]"
    >
      <div>
        <div
          class="ignite-title font-title font-semibold text-title"
          :class="size === 'lg' ? ['text-4', 'm:text-5'] : ['text-4']"
        >
          {{ item.title }}
        </div>
        <div
          class="ignite-text text-2 text-muted"
          :class="[
            size === 'sm' && 'max-w-[15rem]',
            size === 'md' && 'max-w-[22rem]',
            size === 'lg' && 'max-w-[22rem]',
            size === 'lg' ? 'mt-3' : 'mt-5'
          ]"
        >
          {{ item.description }}
        </div>
        <div
          class="ignite-text flex items-center text-3 font-medium"
          :class="size === 'lg' ? 'mt-6' : ['mt-5', 'm:mt-7']"
        >
          <component :is="socialIcon" class="mr-4" />
          <span>{{ item.cta }}</span>
        </div>
      </div>
      <component :is="socialGraphic" :size="size" />
    </IgniteCard>
  </IgniteLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SocialCard'
})
</script>

<script setup lang="ts">
import IconDiscord from '../icons/IconDiscord.vue'
import IconTelegram from '../icons/IconTelegram.vue'
import IconTwitter from '../icons/IconTwitter.vue'
import IgniteCard from '../IgniteCard.vue'
import IgniteLink from '../IgniteLink.vue'
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

<style scoped lang="postcss"></style>
