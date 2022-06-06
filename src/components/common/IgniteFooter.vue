<script lang="ts" setup>
import IconIgnite from '~/components/icons/IconIgnite.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

// variables
const footerLinks = [
  {
    title: 'Ignite',
    links: [
      {
        name: 'Explore',
        path: '/'
      },
      {
        name: 'Launch',
        path: '/launch'
      }
    ]
  },
  {
    title: 'Build',
    links: [
      {
        name: 'Ignite CLI',
        path: '/'
      },
      {
        name: 'Documentation',
        path: '/launch'
      }
    ]
  },
  {
    title: 'Company',
    links: [
      {
        name: 'About Ignite',
        path: '/'
      },
      {
        name: 'Careers',
        path: '/launch'
      },
      {
        name: 'Press Kit',
        path: '/launch'
      }
    ]
  },
  {
    title: 'Social',
    links: [
      {
        name: 'Twitter',
        path: '/'
      },
      {
        name: 'Discord',
        path: '/'
      },
      {
        name: 'Github',
        path: '/launch'
      }
    ]
  }
]
</script>

<template>
  <footer class="relative py-7 md:py-8 lg:py-[5.5rem]">
    <div class="container">
      <div class="relative grid grid-cols-1 gap-7 md:grid-cols-12 md:gap-5">
        <div class="md:col-span-3 xl:col-span-4">
          <IgniteLink to="/" alt="Home" title="Home">
            <IconIgnite />
          </IgniteLink>
        </div>
        <div
          class="grid grid-cols-2 gap-7 md:col-span-9 md:grid-cols-4 xl:col-span-8"
        >
          <div v-for="section in footerLinks" :key="section.title" class="">
            <IgniteHeading as="div" class="font-semibold leading-6">{{
              section.title
            }}</IgniteHeading>
            <ul>
              <li v-for="link in section.links" :key="link.name" class="mt-5">
                <IgniteLink
                  :to="link.path"
                  class="leading-6 text-text hover:text-primary"
                  >{{ link.name }}</IgniteLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative mt-8 grid grid-cols-1 gap-5 md:mt-9 md:grid-cols-12">
        <div class="md:col-span-3 xl:col-span-4">
          <IgniteText class="text-2 text-muted"> © Ignite 2022 </IgniteText>
        </div>
        <div class="flex gap-5 md:col-span-9 xl:col-span-8">
          <IgniteLink to="/" class="text-2 text-muted hover:text-text"
            >Privacy Policy</IgniteLink
          >
          <IgniteLink to="/" class="text-2 text-muted hover:text-text"
            >Terms of Use</IgniteLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped></style>
