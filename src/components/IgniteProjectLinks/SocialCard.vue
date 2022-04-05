<template>
  <IgniteLink
    :to="item.link"
    class="block h-[100%] text-primary hover:text-title"
  >
    <IgniteCard
      class="relative flex flex-col justify-between"
      :class="[
        size === 'sm' && ['px-9', 'py-8.5'],
        size === 'md' && ['px-8.5', 'pt-9'],
        size === 'lg' && ['p-6', 'pb-0', 'm:px-10', 'm:py-9']
      ]"
    >
      <div>
        <div
          class="ignt-title text-title font-semibold font-title"
          :class="size === 'lg' ? ['text-4', 'm:text-5'] : ['text-4']"
        >
          {{ item.title }}
        </div>
        <div
          class="ignt-text text-muted text-2"
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
          class="flex items-center ignt-text font-medium text-3"
          :class="size === 'lg' ? 'mt-6' : 'mt-7'"
        >
          <component :is="socialIcon" class="mr-4" />
          <span>{{ item.cta }}</span>
        </div>
      </div>
      <component
        :is="socialGraphic"
        :size="size"
        :class="[size === 'md' && 'mt-8']"
      />
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
import IgniteCard from '../IgniteCard.vue'
import IgniteLink from '../IgniteLink.vue'

import IconDiscord from '../icons/IconDiscord.vue'
import IconTelegram from '../icons/IconTelegram.vue'
import IconTwitter from '../icons/IconTwitter.vue'

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
