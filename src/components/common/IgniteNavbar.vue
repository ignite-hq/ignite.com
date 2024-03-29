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
const isHamburgerMenuOpen = ref(false)

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
function onOpenHamburger() {
  isHamburgerMenuOpen.value = !isHamburgerMenuOpen.value
}

function onHideHamburger() {
  isHamburgerMenuOpen.value = false
}
</script>

<template>
  <nav class="relative z-[99] border-b border-border py-5 md:h-9.5">
    <div class="container flex items-center justify-between md:space-x-8">
      <router-link
        :to="'/'"
        alt="Home"
        title="Home"
        class="relative z-[3]"
        @click="onHideHamburger"
      >
        <IconIgnite />
      </router-link>

      <div
        class="absolute inset-x-0 top-0 z-[2] flex origin-top-right flex-col-reverse bg-bg px-5 pt-9.5 pb-6 shadow transition-all md:relative md:z-auto md:flex md:w-full md:scale-100 md:flex-row md:items-center md:justify-between md:space-x-6 md:bg-transparent md:p-0 md:opacity-100"
        :class="
          isHamburgerMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        "
      >
        <ul
          class="mt-7 flex flex-col space-y-6 text-left md:mt-0 md:flex-row md:items-center md:space-y-0 md:space-x-6"
        >
          <li v-for="link in links" :key="link.name">
            <IgniteLink
              class="text-muted hover:text-primary"
              :to="link.path"
              active-class="text-primary"
              @click="onHideHamburger"
            >
              {{ link.name }}
            </IgniteLink>
          </li>
        </ul>

        <IgniteAccount />
      </div>

      <IgniteButton
        class="relative z-[2] h-2 w-[1.125rem] before:absolute before:top-[50%] before:left-[50%] before:-ml-5.5 before:-mt-5.5 before:h-7.5 before:w-7.5 md:hidden"
        @click="onOpenHamburger"
      >
        <i
          class="absolute top-[50%] left-0 h-[1px] w-[1.125rem] bg-text transition-all"
          :class="
            isHamburgerMenuOpen
              ? 'translate-y-0 opacity-0'
              : 'translate-y-[0.1875rem] opacity-100'
          "
        />
        <i
          class="absolute top-[50%] left-0 h-[1px] w-[1.125rem] bg-text transition-all"
          :class="
            isHamburgerMenuOpen
              ? 'translate-y-0 opacity-0'
              : '-translate-y-[0.1875rem] opacity-100'
          "
        />
        <i
          class="absolute top-[50%] left-0 h-[1px] w-[1.125rem] bg-text transition-all"
          :class="
            isHamburgerMenuOpen ? 'rotate-45 opacity-100' : 'rotate-0 opacity-0'
          "
        />
        <i
          class="absolute top-[50%] left-0 h-[1px] w-[1.125rem] bg-text transition-all"
          :class="
            isHamburgerMenuOpen
              ? '-rotate-45 opacity-100'
              : 'rotate-0 opacity-0'
          "
        />
      </IgniteButton>
    </div>
  </nav>
</template>

<style lang="postcss" scoped></style>
