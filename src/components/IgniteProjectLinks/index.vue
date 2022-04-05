<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div class="ignt-title font-title text-center text-5 m:text-7">
      Join the community
    </div>

    <div class="mt-6 m:mt-9 flex justify-center flex-wrap -m-4 m:-m-5">
      <div
        class="flex-none w-[100%] l:w-[50%] p-4 m:p-5"
        :class="social.length === 1 && 'l:w-[100%]'"
      >
        <div
          v-for="(item, key) in social"
          :key="item.link"
          class="px-0 mb-7 last:mb-0 empty:hidden"
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
        class="flex-none w-[100%] l:w-[50%] p-4 m:p-5"
      >
        <div
          v-for="(item, key) in social"
          :key="item.link"
          class="px-0 mb-7 last:mb-0 empty:hidden"
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
        // {
        //   title: 'Follow us on Twitter',
        //   description: 'Keep up to date with the latest project developments.',
        //   cta: 'Follow us',
        //   link: 'https://twitter.com/'
        // },
        // {
        //   title: 'Join our Discord',
        //   description:
        //     'Looking to get involved? Join our Discord for development help and tips.',
        //   cta: 'Join our Discord',
        //   link: 'https://discord.com/'
        // },
        // {
        //   title: 'Chat on Telegram',
        //   description:
        //     'Have questions about the project? Reach out and say hello.',
        //   cta: 'Say hello',
        //   link: 'https://t.me/'
        // },
        {
          title: 'Join our Discord',
          description:
            'Looking to get involved? Join our Discord for development help and tips.',
          cta: 'Join our Discord',
          link: 'https://discord.com/'
        }
      ]
    }
  }
})
</script>

<script setup lang="ts">
import SocialCard from './SocialCard.vue'
</script>

<style scoped lang="postcss"></style>
