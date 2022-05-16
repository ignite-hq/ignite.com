<script lang="ts" setup>
import { ref } from 'vue'
import IconIgnite from '~/components/icons/IconIgnite.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteAccount from '~/components/wallet/IgniteAccount.vue'

interface Link {
  name: string
  path: string
}

// state
const opened = ref(false)

// variables
const links: Link[] = [
  {
    name: 'Explore',
    path: '/'
  },
  {
    name: 'Launch',
    path: '/launch'
  },
  {
    name: 'Validate',
    path: '/validate'
  }
]

// methods
function toggle() {
  opened.value = !opened.value
}
</script>

<template>
  <nav class="relative border-b border-border py-6">
    <div class="container flex items-center justify-between md:space-x-8">
      <router-link :to="'/'" alt="Home" title="Home" class="relative z-[1]">
        <IconIgnite />
      </router-link>

      <div
        class="absolute inset-x-0 top-0 origin-top-right space-y-7 bg-bg px-5 pt-10 pb-6 shadow transition-all md:relative md:flex md:w-full md:scale-100 md:items-center md:justify-between md:space-y-0 md:space-x-6 md:p-0 md:opacity-100"
        :class="opened ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
      >
        <ul
          class="flex flex-col space-y-6 text-left md:flex-row md:items-center md:space-y-0 md:space-x-6"
        >
          <li v-for="link in links" :key="link.name">
            <IgniteLink
              class="text-muted hover:text-primary"
              :to="link.path"
              active-class="text-primary"
            >
              {{ link.name }}
            </IgniteLink>
          </li>
        </ul>

        <IgniteAccount />
      </div>

      <IgniteButton
        @click="toggle"
        class="relative z-[1] h-2 w-[1.125rem] before:absolute before:top-[50%] before:left-[50%] before:-ml-5.5 before:-mt-5.5 before:h-7.5 before:w-7.5 md:hidden"
      >
        <i
          class="absolute top-[50%] left-0 h-[1px] w-[1.125rem] bg-text transition-all"
          :class="
            opened
              ? 'translate-y-0 opacity-0'
              : 'translate-y-[0.1875rem] opacity-100'
          "
        />
        <i
          class="absolute top-[50%] left-0 h-[1px] w-[1.125rem] bg-text transition-all"
          :class="
            opened
              ? 'translate-y-0 opacity-0'
              : '-translate-y-[0.1875rem] opacity-100'
          "
        />
        <i
          class="absolute top-[50%] left-0 h-[1px] w-[1.125rem] bg-text transition-all"
          :class="opened ? 'rotate-45 opacity-100' : 'rotate-0 opacity-0'"
        />
        <i
          class="absolute top-[50%] left-0 h-[1px] w-[1.125rem] bg-text transition-all"
          :class="opened ? '-rotate-45 opacity-100' : 'rotate-0 opacity-0'"
        />
      </IgniteButton>
    </div>
  </nav>
</template>

<style lang="postcss" scoped></style>
