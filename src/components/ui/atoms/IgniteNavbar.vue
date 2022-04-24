<script lang="ts" setup>
import IconIgnite from '../icons/IconIgnite.vue'
import IgniteLink from './IgniteLink.vue'
import IgniteAccount from '../../wallet/IgniteAccount.vue'

interface Link {
  name: string
  path: string
}

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
</script>

<template>
  <nav class="navbar container flex items-center justify-between py-6">
    <div class="flex items-center space-x-8">
      <router-link :to="'/'" alt="Home" title="Home">
        <IconIgnite />
      </router-link>

      <div class="flex items-center space-x-6">
        <IgniteLink
          v-for="link in links"
          :key="link.name"
          class="text-muted hover:text-primary"
          :to="link.path"
          active-class="text-primary"
        >
          {{ link.name }}
        </IgniteLink>
      </div>
    </div>

    <IgniteAccount />
  </nav>
</template>

<style lang="postcss" scoped>
.navbar {
  box-shadow: 0px 0.5px 0px #cbcbcb;
}
</style>
