<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <IgniteHeading as="div" class="text-center font-title text-5 m:text-7">
      Join the community
    </IgniteHeading>

    <div class="-m-4 mt-6 flex flex-wrap justify-center m:-m-5 m:mt-9">
      <div
        class="w-full flex-none p-4 m:p-5 l:w-[50%]"
        :class="social.length === 1 && 'l:w-full'"
      >
        <div
          v-for="(item, key) in social"
          :key="item.link"
          class="mb-7 px-0 last:mb-0 empty:hidden"
          :class="(social.length === 2 || key % 2 !== 0) && 'h-[100%]'"
        >
          <SocialCard
            v-if="key % 2 === 0"
            :item="item"
            :size="
              (social.length === 1 && 'lg') ||
              (social.length === 2 && 'md') ||
              (social.length === 3 && key % 2 !== 0 && 'md') ||
              (social.length === 3 && 'sm')
            "
          />
        </div>
      </div>
      <div
        v-if="social.length > 1"
        class="w-full flex-none p-4 m:p-5 l:w-[50%]"
      >
        <div
          v-for="(item, key) in social"
          :key="item.link"
          class="mb-7 px-0 last:mb-0 empty:hidden"
          :class="(social.length === 2 || key % 2 !== 0) && 'h-[100%]'"
        >
          <SocialCard
            v-if="key % 2 !== 0"
            :item="item"
            :size="
              (social.length === 1 && 'lg') ||
              (social.length === 2 && 'md') ||
              (social.length === 3 && key % 2 !== 0 && 'md') ||
              (social.length === 3 && 'sm')
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectLinks',
  data() {
    return {
      social: [
        {
          title: 'Follow us on Twitter',
          description: 'Keep up to date with the latest project developments.',
          cta: 'Follow us',
          link: 'https://twitter.com/'
        },
        {
          title: 'Join our Discord',
          description:
            'Looking to get involved? Join our Discord for development help and tips.',
          cta: 'Join our Discord',
          link: 'https://discord.com/'
        },
        {
          title: 'Chat on Telegram',
          description:
            'Have questions about the project? Reach out and say hello.',
          cta: 'Say hello',
          link: 'https://t.me/'
        }
      ]
    }
  }
})
</script>

<script setup lang="ts">
import IgniteHeading from './IgniteHeading.vue'
import SocialCard from './SocialCard.vue'
</script>

<style scoped lang="postcss"></style>
